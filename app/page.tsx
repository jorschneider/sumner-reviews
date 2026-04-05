"use client";

import { useState, useMemo, useCallback } from "react";
import { reviews, Review, getCountries, getDecades, getDirectors } from "./data/reviews";

type SortKey = "rating-desc" | "rating-asc" | "year-desc" | "year-asc" | "title-asc";
type View = "browse" | "top" | "stats";

// ─── Rating badge with cinematic color coding ────────────────────────────────
function RatingBadge({ rating, large }: { rating: number; large?: boolean }) {
  const size = large ? "px-3 py-1 text-base" : "px-2 py-0.5 text-sm";
  let style = "bg-zinc-800 text-zinc-400";
  if (rating >= 3.9) style = "bg-gradient-to-br from-amber-500/25 to-yellow-600/20 text-amber-300 ring-1 ring-amber-500/50";
  else if (rating >= 3.7) style = "bg-emerald-500/12 text-emerald-400 ring-1 ring-emerald-500/20";
  else if (rating >= 3.5) style = "bg-sky-500/10 text-sky-400";
  else if (rating >= 3.0) style = "bg-zinc-800/80 text-zinc-300";
  else if (rating >= 2.5) style = "bg-orange-900/30 text-orange-400/80";
  else style = "bg-red-900/30 text-red-400/80";
  return (
    <span className={`inline-flex items-center rounded font-mono font-bold tracking-tight ${size} ${style}`}>
      {rating.toFixed(1)}
    </span>
  );
}

// ─── Film card ───────────────────────────────────────────────────────────────
function MovieCard({ movie, onClick }: { movie: Review; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full p-5 rounded-lg bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800/90 transition-all cursor-pointer group card-glow"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-zinc-100 group-hover:text-amber-200/90 leading-tight transition-colors">
          {movie.title}
        </h3>
        <RatingBadge rating={movie.rating} />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-zinc-500 mb-3">
        {movie.year && <span className="text-zinc-400">{movie.year}</span>}
        <span>{movie.country}</span>
        {movie.director && <span className="italic">{movie.director}</span>}
      </div>
      {movie.review && (
        <p className="text-sm text-zinc-400 line-clamp-3 leading-relaxed italic">
          &ldquo;{movie.review}&rdquo;
        </p>
      )}
    </button>
  );
}

// ─── Detail modal ────────────────────────────────────────────────────────────
function Modal({ movie, onClose }: { movie: Review; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-zinc-900 border border-zinc-700 rounded-xl max-w-xl w-full shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold top stripe */}
        <div className="h-1 bg-gradient-to-r from-amber-600/60 via-amber-400/40 to-amber-600/60" />
        <div className="p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-zinc-500 hover:text-white text-xl leading-none cursor-pointer w-8 h-8 flex items-center justify-center rounded-full hover:bg-zinc-800"
          >
            &times;
          </button>
          <div className="flex items-start gap-4 mb-5">
            <div className="flex-1">
              <h2 className="text-xl font-bold text-white mb-1">{movie.title}</h2>
              <div className="flex flex-wrap gap-x-4 text-sm text-zinc-400">
                {movie.year && <span className="font-mono">{movie.year}</span>}
                <span>{movie.country}</span>
                {movie.director && <span className="italic">Dir. {movie.director}</span>}
              </div>
            </div>
            <RatingBadge rating={movie.rating} large />
          </div>
          {movie.review && (
            <blockquote className="text-zinc-300 leading-relaxed mb-5 border-l-2 border-amber-500/40 pl-4 italic">
              &ldquo;{movie.review}&rdquo;
            </blockquote>
          )}
          <div className="flex gap-4 text-xs text-zinc-600 pt-3 border-t border-zinc-800">
            <span>Reviewed in: {movie.source}</span>
            <span className="ml-auto">{movie.isNew ? "New release" : "Classic / older film"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Top list section ────────────────────────────────────────────────────────
function TopListSection({ title, films, startExpanded }: { title: string; films: Review[]; startExpanded?: boolean }) {
  const [expanded, setExpanded] = useState(!!startExpanded);
  const shown = expanded ? films : films.slice(0, 10);
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-zinc-200 mb-3 pb-2 border-b border-zinc-800/80 flex items-center gap-2">
        <span className="w-1 h-5 bg-amber-500/60 rounded-full inline-block" />
        {title}
      </h3>
      <div className="space-y-0.5">
        {shown.map((m, i) => (
          <div key={m.id} className="flex items-center gap-3 py-2 px-3 rounded hover:bg-zinc-800/40 text-sm group">
            <span className="text-zinc-600 font-mono w-7 text-right text-xs">{i + 1}.</span>
            <RatingBadge rating={m.rating} />
            <span className="text-zinc-200 font-medium group-hover:text-amber-200/80 transition-colors">{m.title}</span>
            <span className="text-zinc-600 text-xs">({m.year || "?"}) &middot; {m.country}</span>
            {m.director && <span className="text-zinc-700 text-xs ml-auto hidden sm:block italic">{m.director}</span>}
          </div>
        ))}
      </div>
      {films.length > 10 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-amber-400/70 hover:text-amber-300 cursor-pointer"
        >
          {expanded ? "Show less" : `Show all ${films.length}`}
        </button>
      )}
    </div>
  );
}

// ─── Bar chart row ───────────────────────────────────────────────────────────
function BarRow({ label, value, max, color }: { label: string; value: number; max: number; color: string }) {
  const pct = max > 0 ? (value / max) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <span className="w-20 text-sm text-zinc-400 text-right shrink-0">{label}</span>
      <div className="flex-1 bg-zinc-800/60 rounded-full h-7 overflow-hidden">
        <div
          className={`h-full rounded-full flex items-center justify-end pr-2.5 bar-fill ${color}`}
          style={{ width: `${Math.max(pct, 4)}%` }}
        >
          <span className="text-xs text-white font-mono">{value}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Stat card ───────────────────────────────────────────────────────────────
function StatCard({ value, label, accent }: { value: string | number; label: string; accent?: string }) {
  return (
    <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-5 text-center">
      <div className={`text-3xl font-bold font-mono ${accent || "text-white"}`}>{value}</div>
      <div className="text-xs text-zinc-500 mt-1 uppercase tracking-wider">{label}</div>
    </div>
  );
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// MAIN PAGE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

export default function Home() {
  const [view, setView] = useState<View>("browse");
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("rating-desc");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedDecade, setSelectedDecade] = useState<number | "">("");
  const [selectedDirector, setSelectedDirector] = useState("");
  const [minRating, setMinRating] = useState<number>(0);
  const [showNewOnly, setShowNewOnly] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<Review | null>(null);

  const countries = useMemo(() => getCountries(), []);
  const decades = useMemo(() => getDecades(), []);
  const directors = useMemo(() => getDirectors(), []);

  // ── Filtered list ──
  const filtered = useMemo(() => {
    let result = reviews.filter((r) => {
      if (search) {
        const q = search.toLowerCase();
        if (
          !r.title.toLowerCase().includes(q) &&
          !r.director.toLowerCase().includes(q) &&
          !r.country.toLowerCase().includes(q) &&
          !r.review.toLowerCase().includes(q)
        )
          return false;
      }
      if (selectedCountry && !r.country.includes(selectedCountry)) return false;
      if (selectedDecade && r.year && Math.floor(r.year / 10) * 10 !== selectedDecade) return false;
      if (selectedDecade && !r.year) return false;
      if (selectedDirector && r.director !== selectedDirector) return false;
      if (r.rating < minRating) return false;
      if (showNewOnly && !r.isNew) return false;
      return true;
    });
    result.sort((a, b) => {
      switch (sortBy) {
        case "rating-desc": return b.rating - a.rating || a.title.localeCompare(b.title);
        case "rating-asc": return a.rating - b.rating || a.title.localeCompare(b.title);
        case "year-desc": return (b.year || 0) - (a.year || 0) || b.rating - a.rating;
        case "year-asc": return (a.year || 9999) - (b.year || 9999) || b.rating - a.rating;
        case "title-asc": return a.title.localeCompare(b.title);
        default: return 0;
      }
    });
    return result;
  }, [search, sortBy, selectedCountry, selectedDecade, selectedDirector, minRating, showNewOnly]);

  const clearFilters = useCallback(() => {
    setSearch(""); setSelectedCountry(""); setSelectedDecade(""); setSelectedDirector(""); setMinRating(0); setShowNewOnly(false);
  }, []);

  const hasFilters = search || selectedCountry || selectedDecade || selectedDirector || minRating > 0 || showNewOnly;

  // ── Top lists ──
  const topAll = useMemo(() => [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 50), []);

  const topByDecade = useMemo(() => {
    const map: Record<number, Review[]> = {};
    reviews.forEach((r) => { if (r.year) { const d = Math.floor(r.year / 10) * 10; (map[d] ||= []).push(r); } });
    Object.values(map).forEach((a) => a.sort((x, y) => y.rating - x.rating));
    return map;
  }, []);

  const topByCountry = useMemo(() => {
    const map: Record<string, Review[]> = {};
    reviews.forEach((r) => r.country.split("/").forEach((c) => { const k = c.trim(); (map[k] ||= []).push(r); }));
    Object.values(map).forEach((a) => a.sort((x, y) => y.rating - x.rating));
    return map;
  }, []);

  const topDirectors = useMemo(() => {
    const map: Record<string, { count: number; total: number; best: Review }> = {};
    reviews.forEach((r) => {
      if (!r.director) return;
      if (!map[r.director]) map[r.director] = { count: 0, total: 0, best: r };
      map[r.director].count++; map[r.director].total += r.rating;
      if (r.rating > map[r.director].best.rating) map[r.director].best = r;
    });
    return Object.entries(map)
      .filter(([, d]) => d.count >= 2)
      .map(([name, d]) => ({ name, avg: d.total / d.count, count: d.count, best: d.best }))
      .sort((a, b) => b.avg - a.avg);
  }, []);

  // ── Stats ──
  const stats = useMemo(() => {
    const total = reviews.length;
    const avg = reviews.reduce((s, r) => s + r.rating, 0) / total;
    const median = [...reviews].sort((a, b) => a.rating - b.rating)[Math.floor(total / 2)].rating;
    const highest = [...reviews].sort((a, b) => b.rating - a.rating)[0];
    const lowest = [...reviews].sort((a, b) => a.rating - b.rating)[0];
    const newReleases = reviews.filter((r) => r.isNew);
    const classics = reviews.filter((r) => !r.isNew);
    const newAvg = newReleases.reduce((s, r) => s + r.rating, 0) / (newReleases.length || 1);
    const classicAvg = classics.reduce((s, r) => s + r.rating, 0) / (classics.length || 1);

    // Rating distribution
    const buckets = ["4.0", "3.8-3.9", "3.5-3.7", "3.0-3.4", "2.5-2.9", "<2.5"];
    const ratingDist: Record<string, number> = {};
    buckets.forEach((b) => (ratingDist[b] = 0));
    reviews.forEach((r) => {
      if (r.rating >= 4.0) ratingDist["4.0"]++;
      else if (r.rating >= 3.8) ratingDist["3.8-3.9"]++;
      else if (r.rating >= 3.5) ratingDist["3.5-3.7"]++;
      else if (r.rating >= 3.0) ratingDist["3.0-3.4"]++;
      else if (r.rating >= 2.5) ratingDist["2.5-2.9"]++;
      else ratingDist["<2.5"]++;
    });

    // Country stats
    const countryMap: Record<string, { count: number; total: number }> = {};
    reviews.forEach((r) => r.country.split("/").forEach((c) => {
      const k = c.trim(); if (!countryMap[k]) countryMap[k] = { count: 0, total: 0 };
      countryMap[k].count++; countryMap[k].total += r.rating;
    }));
    const topCountries = Object.entries(countryMap)
      .map(([name, d]) => ({ name, count: d.count, avg: d.total / d.count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 15);

    // Decade stats
    const decadeMap: Record<number, { count: number; total: number }> = {};
    reviews.forEach((r) => { if (r.year) { const d = Math.floor(r.year / 10) * 10; if (!decadeMap[d]) decadeMap[d] = { count: 0, total: 0 }; decadeMap[d].count++; decadeMap[d].total += r.rating; } });
    const decadeStats = Object.entries(decadeMap)
      .map(([dec, d]) => ({ decade: Number(dec), count: d.count, avg: d.total / d.count }))
      .sort((a, b) => a.decade - b.decade);

    // Source (quarter) stats
    const sourceMap: Record<string, { count: number; total: number }> = {};
    reviews.forEach((r) => {
      if (!sourceMap[r.source]) sourceMap[r.source] = { count: 0, total: 0 };
      sourceMap[r.source].count++; sourceMap[r.source].total += r.rating;
    });
    const sourceStats = Object.entries(sourceMap)
      .map(([src, d]) => ({ source: src, count: d.count, avg: d.total / d.count }))
      .sort((a, b) => a.source.localeCompare(b.source));

    // Most polarizing (lowest-rated well-known films)
    const contrarian = [...reviews].filter((r) => r.rating <= 2.0).sort((a, b) => a.rating - b.rating);

    return { total, avg, median, highest, lowest, newAvg, classicAvg, newCount: newReleases.length, classicCount: classics.length, ratingDist, buckets, topCountries, decadeStats, sourceStats, contrarian, directorsCount: new Set(reviews.map((r) => r.director).filter(Boolean)).size, countriesCount: Object.keys(countryMap).length };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* ── HEADER ── */}
      <header className="border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-md sticky top-0 z-40">
        <div className="film-strip" />
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1 min-w-0">
              <h1 className="text-2xl font-bold tracking-tight">
                <span className="rating-gold">Scott Sumner</span>
                <span className="text-zinc-300">&apos;s Film Reviews</span>
              </h1>
              <p className="text-xs text-zinc-500 mt-0.5">
                {reviews.length} reviews &middot;{" "}
                <a href="https://scottsumner.substack.com" className="text-amber-400/60 hover:text-amber-300 hover:underline" target="_blank" rel="noopener noreferrer">Substack</a>
                {" & "}
                <a href="https://www.themoneyillusion.com" className="text-amber-400/60 hover:text-amber-300 hover:underline" target="_blank" rel="noopener noreferrer">The Money Illusion</a>
                {" & "}
                <a href="https://www.sumnerscores.com" className="text-amber-400/60 hover:text-amber-300 hover:underline" target="_blank" rel="noopener noreferrer">Sumner Scores</a>
              </p>
            </div>
            <nav className="flex gap-1 bg-zinc-900 rounded-lg p-0.5">
              {(["browse", "top", "stats"] as View[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-4 py-1.5 rounded-md text-sm font-medium cursor-pointer transition-all ${
                    view === v
                      ? "bg-zinc-700 text-white shadow-sm"
                      : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800"
                  }`}
                >
                  {v === "browse" ? "Browse" : v === "top" ? "Top Lists" : "Analytics"}
                </button>
              ))}
            </nav>
          </div>
        </div>
        <div className="film-strip" />
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* BROWSE VIEW                                                        */}
        {/* ════════════════════════════════════════════════════════════════════ */}
        {view === "browse" && (
          <>
            <div className="mb-6 space-y-3">
              <div className="flex gap-3 flex-col sm:flex-row">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Search titles, directors, countries, reviews..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 focus:ring-1 focus:ring-amber-500/20 transition-all"
                  />
                </div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="px-3 py-2.5 bg-zinc-900 border border-zinc-700 rounded-lg text-zinc-300 cursor-pointer"
                >
                  <option value="rating-desc">Highest Rated</option>
                  <option value="rating-asc">Lowest Rated</option>
                  <option value="year-desc">Newest First</option>
                  <option value="year-asc">Oldest First</option>
                  <option value="title-asc">A &ndash; Z</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                {[
                  { value: selectedDecade, onChange: (v: string) => setSelectedDecade(v ? Number(v) : ""), label: "All Decades", options: decades.map((d) => ({ value: d, label: `${d}s` })) },
                  { value: selectedCountry, onChange: setSelectedCountry, label: "All Countries", options: countries.map((c) => ({ value: c, label: c })) },
                  { value: selectedDirector, onChange: setSelectedDirector, label: "All Directors", options: directors.map((d) => ({ value: d, label: d })) },
                  { value: minRating, onChange: (v: string) => setMinRating(Number(v)), label: "Any Rating", options: [{ value: 3.0, label: "3.0+" }, { value: 3.5, label: "3.5+" }, { value: 3.8, label: "3.8+" }, { value: 3.9, label: "3.9+" }] },
                ].map((sel, i) => (
                  <select
                    key={i}
                    value={sel.value}
                    onChange={(e) => sel.onChange(e.target.value)}
                    className="px-2.5 py-1.5 bg-zinc-900 border border-zinc-800 rounded text-sm text-zinc-400 cursor-pointer hover:border-zinc-600 transition-colors"
                  >
                    <option value="">{sel.label}</option>
                    {sel.options.map((o) => (
                      <option key={String(o.value)} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                ))}

                <label className="flex items-center gap-1.5 text-sm text-zinc-500 cursor-pointer hover:text-zinc-300 transition-colors">
                  <input
                    type="checkbox"
                    checked={showNewOnly}
                    onChange={(e) => setShowNewOnly(e.target.checked)}
                    className="cursor-pointer accent-amber-500"
                  />
                  New releases only
                </label>

                {hasFilters && (
                  <button onClick={clearFilters} className="text-sm text-red-400/80 hover:text-red-300 cursor-pointer ml-2">
                    Clear all
                  </button>
                )}
              </div>
            </div>

            <p className="text-sm text-zinc-600 mb-4 font-mono">
              {filtered.length} {filtered.length === 1 ? "film" : "films"}
              {hasFilters && " (filtered)"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-zinc-600">
                <p className="text-lg mb-2">No films match your filters.</p>
                <button onClick={clearFilters} className="text-amber-400/70 hover:underline cursor-pointer">Clear filters</button>
              </div>
            )}
          </>
        )}

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* TOP LISTS VIEW                                                     */}
        {/* ════════════════════════════════════════════════════════════════════ */}
        {view === "top" && (
          <>
            <TopListSection title="Top 50 Overall" films={topAll} startExpanded />

            <h2 className="text-xl font-bold text-white mb-4 mt-12 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500/50 rounded" />
              Top Films by Decade
            </h2>
            {Object.entries(topByDecade)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([decade, films]) => (
                <TopListSection key={decade} title={`${decade}s (${films.length} reviewed)`} films={films.slice(0, 20)} />
              ))}

            <h2 className="text-xl font-bold text-white mb-4 mt-12 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500/50 rounded" />
              Top Films by Country
            </h2>
            {Object.entries(topByCountry)
              .filter(([, films]) => films.length >= 5)
              .sort(([, a], [, b]) => b.length - a.length)
              .map(([country, films]) => (
                <TopListSection key={country} title={`${country} (${films.length} films)`} films={films.slice(0, 15)} />
              ))}

            <h2 className="text-xl font-bold text-white mb-4 mt-12 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-amber-500/50 rounded" />
              Top Directors (2+ reviews)
            </h2>
            <div className="space-y-1.5 mb-8">
              {topDirectors.map((d, i) => (
                <div key={d.name} className="flex items-center gap-3 py-2.5 px-4 rounded-lg bg-zinc-900/60 border border-zinc-800/60 hover:bg-zinc-800/40 transition-colors">
                  <span className="text-zinc-600 font-mono text-xs w-6 text-right">{i + 1}.</span>
                  <span className="font-medium text-zinc-200 w-48 truncate">{d.name}</span>
                  <span className="text-sm font-mono text-amber-400/90">{d.avg.toFixed(2)}</span>
                  <span className="text-xs text-zinc-600">avg &middot; {d.count} reviews</span>
                  <span className="text-xs text-zinc-700 ml-auto hidden sm:block italic">
                    Best: {d.best.title} ({d.best.rating})
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* ════════════════════════════════════════════════════════════════════ */}
        {/* ANALYTICS VIEW                                                     */}
        {/* ════════════════════════════════════════════════════════════════════ */}
        {view === "stats" && (
          <div className="space-y-10">
            {/* Summary cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              <StatCard value={stats.total} label="Reviews" />
              <StatCard value={stats.avg.toFixed(2)} label="Mean Rating" accent="rating-gold" />
              <StatCard value={stats.median.toFixed(1)} label="Median" accent="text-zinc-300" />
              <StatCard value={stats.directorsCount} label="Directors" accent="text-sky-400" />
              <StatCard value={stats.countriesCount} label="Countries" accent="text-emerald-400" />
              <StatCard value={reviews.filter((r) => r.rating >= 3.9).length} label="Masterpieces (3.9+)" accent="text-amber-400" />
            </div>

            {/* Highest and lowest */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-5">
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Highest Rated</h4>
                <div className="flex items-center gap-3">
                  <RatingBadge rating={stats.highest.rating} large />
                  <div>
                    <div className="text-white font-semibold">{stats.highest.title}</div>
                    <div className="text-xs text-zinc-500">{stats.highest.year} &middot; {stats.highest.director || stats.highest.country}</div>
                  </div>
                </div>
              </div>
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-5">
                <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-3">Lowest Rated</h4>
                <div className="flex items-center gap-3">
                  <RatingBadge rating={stats.lowest.rating} large />
                  <div>
                    <div className="text-white font-semibold">{stats.lowest.title}</div>
                    <div className="text-xs text-zinc-500">{stats.lowest.year} &middot; {stats.lowest.director || stats.lowest.country}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* New vs Classic comparison */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-lg p-5">
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500/60 rounded-full" />
                New Releases vs. Classics
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold font-mono text-sky-400">{stats.newAvg.toFixed(2)}</div>
                  <div className="text-xs text-zinc-500 mt-1">Avg rating &middot; {stats.newCount} new releases</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold font-mono text-amber-400">{stats.classicAvg.toFixed(2)}</div>
                  <div className="text-xs text-zinc-500 mt-1">Avg rating &middot; {stats.classicCount} classic films</div>
                </div>
              </div>
            </div>

            {/* Rating distribution */}
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500/60 rounded-full" />
                Rating Distribution
              </h3>
              <div className="space-y-2">
                {stats.buckets.map((bucket) => (
                  <BarRow
                    key={bucket}
                    label={bucket}
                    value={stats.ratingDist[bucket]}
                    max={Math.max(...Object.values(stats.ratingDist))}
                    color={
                      bucket === "4.0" ? "bg-gradient-to-r from-amber-600 to-amber-500"
                        : bucket === "3.8-3.9" ? "bg-gradient-to-r from-amber-700 to-amber-600"
                        : bucket === "3.5-3.7" ? "bg-gradient-to-r from-emerald-700 to-emerald-600"
                        : bucket === "3.0-3.4" ? "bg-gradient-to-r from-sky-800 to-sky-700"
                        : bucket === "2.5-2.9" ? "bg-gradient-to-r from-orange-900 to-orange-800"
                        : "bg-gradient-to-r from-red-900 to-red-800"
                    }
                  />
                ))}
              </div>
            </div>

            {/* Average by decade */}
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500/60 rounded-full" />
                Average Rating &amp; Volume by Decade
              </h3>
              <div className="space-y-1.5">
                {stats.decadeStats.map((d) => (
                  <div key={d.decade} className="flex items-center gap-3 py-2 px-3 bg-zinc-900/40 rounded-lg border border-zinc-800/40">
                    <span className="w-12 font-mono text-sm text-zinc-400">{d.decade}s</span>
                    <div className="flex-1 bg-zinc-800/40 rounded-full h-5 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-amber-700/80 to-amber-500/80 bar-fill"
                        style={{ width: `${((d.avg - 2.5) / 1.5) * 100}%` }}
                      />
                    </div>
                    <span className="font-mono text-sm text-amber-400/80 w-10 text-right">{d.avg.toFixed(2)}</span>
                    <span className="text-xs text-zinc-600 w-14 text-right">{d.count} films</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Country breakdown */}
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500/60 rounded-full" />
                Top Countries (by volume &amp; average)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {stats.topCountries.map((c) => (
                  <div key={c.name} className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/60 border border-zinc-800/60 rounded-lg">
                    <span className="text-zinc-300 text-sm">{c.name}</span>
                    <div className="flex gap-3 items-center">
                      <span className="text-xs text-zinc-600 font-mono">{c.count} films</span>
                      <span className="text-sm font-mono text-amber-400/70">{c.avg.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews per quarter */}
            <div>
              <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                <span className="w-1 h-5 bg-amber-500/60 rounded-full" />
                Reviews by Quarter
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {stats.sourceStats.map((s) => (
                  <div key={s.source} className="flex items-center justify-between px-3 py-2 bg-zinc-900/40 border border-zinc-800/40 rounded text-sm">
                    <span className="text-zinc-400 font-mono text-xs">{s.source}</span>
                    <div className="flex gap-2 items-center">
                      <span className="text-zinc-600 text-xs">{s.count}</span>
                      <span className="text-xs font-mono text-amber-400/60">{s.avg.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contrarian corner */}
            {stats.contrarian.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-zinc-200 mb-4 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-500/60 rounded-full" />
                  The Doghouse (rated 2.0 or below)
                </h3>
                <div className="space-y-1">
                  {stats.contrarian.map((m) => (
                    <div key={m.id} className="flex items-center gap-3 py-2 px-3 bg-zinc-900/40 rounded-lg border border-zinc-800/40">
                      <RatingBadge rating={m.rating} />
                      <span className="text-zinc-300 text-sm font-medium">{m.title}</span>
                      <span className="text-zinc-600 text-xs">({m.year})</span>
                      {m.review && (
                        <span className="text-zinc-500 text-xs italic ml-auto hidden sm:block max-w-xs truncate">
                          &ldquo;{m.review}&rdquo;
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Footer note */}
            <div className="text-sm text-zinc-700 border-t border-zinc-800/50 pt-6">
              Data collected from Scott Sumner&apos;s quarterly film review posts on{" "}
              <a href="https://scottsumner.substack.com" className="text-amber-500/50 hover:underline" target="_blank" rel="noopener noreferrer">Substack</a>{" "}and{" "}
              <a href="https://www.themoneyillusion.com" className="text-amber-500/50 hover:underline" target="_blank" rel="noopener noreferrer">The Money Illusion</a>{" "}
              (2022&ndash;2026). Sumner rates films on a scale roughly from 1.0 to 4.0.
              For his complete database, visit{" "}
              <a href="https://www.sumnerscores.com" className="text-amber-500/50 hover:underline" target="_blank" rel="noopener noreferrer">sumnerscores.com</a>.
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedMovie && <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}
