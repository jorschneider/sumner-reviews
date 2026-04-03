"use client";

import { useState, useMemo, useCallback } from "react";
import { reviews, Review, getCountries, getDecades, getDirectors } from "./data/reviews";

type SortKey = "rating-desc" | "rating-asc" | "year-desc" | "year-asc" | "title-asc";
type View = "browse" | "top" | "stats";

function RatingBadge({ rating }: { rating: number }) {
  let bg = "bg-red-900/60 text-red-300";
  if (rating >= 3.9) bg = "bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/40";
  else if (rating >= 3.7) bg = "bg-emerald-500/15 text-emerald-400";
  else if (rating >= 3.5) bg = "bg-sky-500/15 text-sky-400";
  else if (rating >= 3.0) bg = "bg-neutral-700/60 text-neutral-300";
  else if (rating >= 2.5) bg = "bg-orange-900/40 text-orange-400";
  return (
    <span className={`inline-block px-2 py-0.5 rounded text-sm font-mono font-bold ${bg}`}>
      {rating.toFixed(1)}
    </span>
  );
}

function MovieCard({ movie, onClick }: { movie: Review; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="text-left w-full p-4 rounded-lg bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800/80 transition-all cursor-pointer group"
    >
      <div className="flex items-start justify-between gap-3 mb-2">
        <h3 className="font-semibold text-neutral-100 group-hover:text-white leading-tight">
          {movie.title}
        </h3>
        <RatingBadge rating={movie.rating} />
      </div>
      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-neutral-500 mb-2">
        {movie.year && <span>{movie.year}</span>}
        <span>{movie.country}</span>
        {movie.director && <span>{movie.director}</span>}
      </div>
      {movie.review && (
        <p className="text-sm text-neutral-400 line-clamp-2 leading-relaxed">
          {movie.review}
        </p>
      )}
    </button>
  );
}

function Modal({ movie, onClose }: { movie: Review; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
      <div
        className="relative bg-neutral-900 border border-neutral-700 rounded-xl max-w-lg w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-500 hover:text-white text-xl leading-none cursor-pointer"
        >
          x
        </button>
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1">
            <h2 className="text-xl font-bold text-white mb-1">{movie.title}</h2>
            <div className="flex flex-wrap gap-x-3 text-sm text-neutral-400">
              {movie.year && <span>{movie.year}</span>}
              <span>{movie.country}</span>
              {movie.director && <span>Dir: {movie.director}</span>}
            </div>
          </div>
          <RatingBadge rating={movie.rating} />
        </div>
        {movie.review && (
          <p className="text-neutral-300 leading-relaxed mb-4">{movie.review}</p>
        )}
        <div className="flex gap-3 text-xs text-neutral-500">
          <span>Source: {movie.source}</span>
          <span>{movie.isNew ? "New release when reviewed" : "Classic/older film"}</span>
        </div>
      </div>
    </div>
  );
}

function TopListSection({ title, films }: { title: string; films: Review[] }) {
  const [expanded, setExpanded] = useState(false);
  const shown = expanded ? films : films.slice(0, 10);
  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-neutral-200 mb-3 border-b border-neutral-800 pb-2">{title}</h3>
      <div className="space-y-1">
        {shown.map((m, i) => (
          <div key={m.id} className="flex items-center gap-3 py-1.5 px-2 rounded hover:bg-neutral-800/50 text-sm">
            <span className="text-neutral-600 font-mono w-6 text-right">{i + 1}.</span>
            <RatingBadge rating={m.rating} />
            <span className="text-neutral-200 font-medium">{m.title}</span>
            <span className="text-neutral-500 text-xs">({m.year || "?"}) {m.country}</span>
            {m.director && <span className="text-neutral-600 text-xs ml-auto hidden sm:block">{m.director}</span>}
          </div>
        ))}
      </div>
      {films.length > 10 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 text-sm text-sky-400 hover:text-sky-300 cursor-pointer"
        >
          {expanded ? "Show less" : `Show all ${films.length}`}
        </button>
      )}
    </div>
  );
}

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

  const filtered = useMemo(() => {
    let result = reviews.filter((r) => {
      if (search) {
        const q = search.toLowerCase();
        const match =
          r.title.toLowerCase().includes(q) ||
          r.director.toLowerCase().includes(q) ||
          r.country.toLowerCase().includes(q) ||
          r.review.toLowerCase().includes(q);
        if (!match) return false;
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
        case "rating-desc": return b.rating - a.rating;
        case "rating-asc": return a.rating - b.rating;
        case "year-desc": return (b.year || 0) - (a.year || 0);
        case "year-asc": return (a.year || 9999) - (b.year || 9999);
        case "title-asc": return a.title.localeCompare(b.title);
        default: return 0;
      }
    });

    return result;
  }, [search, sortBy, selectedCountry, selectedDecade, selectedDirector, minRating, showNewOnly]);

  const clearFilters = useCallback(() => {
    setSearch("");
    setSelectedCountry("");
    setSelectedDecade("");
    setSelectedDirector("");
    setMinRating(0);
    setShowNewOnly(false);
  }, []);

  const hasFilters = search || selectedCountry || selectedDecade || selectedDirector || minRating > 0 || showNewOnly;

  // Top lists data
  const topAll = useMemo(() => [...reviews].sort((a, b) => b.rating - a.rating).slice(0, 50), []);

  const topByDecade = useMemo(() => {
    const byDecade: Record<number, Review[]> = {};
    reviews.forEach((r) => {
      if (!r.year) return;
      const dec = Math.floor(r.year / 10) * 10;
      if (!byDecade[dec]) byDecade[dec] = [];
      byDecade[dec].push(r);
    });
    Object.values(byDecade).forEach((arr) => arr.sort((a, b) => b.rating - a.rating));
    return byDecade;
  }, []);

  const topByCountry = useMemo(() => {
    const byCountry: Record<string, Review[]> = {};
    reviews.forEach((r) => {
      r.country.split("/").forEach((c) => {
        const ct = c.trim();
        if (!byCountry[ct]) byCountry[ct] = [];
        byCountry[ct].push(r);
      });
    });
    Object.values(byCountry).forEach((arr) => arr.sort((a, b) => b.rating - a.rating));
    return byCountry;
  }, []);

  const topDirectors = useMemo(() => {
    const byDir: Record<string, { count: number; avg: number; total: number; best: Review }> = {};
    reviews.forEach((r) => {
      if (!r.director) return;
      if (!byDir[r.director]) byDir[r.director] = { count: 0, avg: 0, total: 0, best: r };
      byDir[r.director].count++;
      byDir[r.director].total += r.rating;
      if (r.rating > byDir[r.director].best.rating) byDir[r.director].best = r;
    });
    Object.values(byDir).forEach((d) => (d.avg = d.total / d.count));
    return Object.entries(byDir)
      .filter(([, d]) => d.count >= 2)
      .sort(([, a], [, b]) => b.avg - a.avg);
  }, []);

  // Stats
  const stats = useMemo(() => {
    const total = reviews.length;
    const avg = reviews.reduce((s, r) => s + r.rating, 0) / total;
    const ratingDist: Record<string, number> = {};
    reviews.forEach((r) => {
      const bucket = r.rating >= 3.8 ? "3.8+" : r.rating >= 3.5 ? "3.5-3.7" : r.rating >= 3.0 ? "3.0-3.4" : r.rating >= 2.5 ? "2.5-2.9" : "<2.5";
      ratingDist[bucket] = (ratingDist[bucket] || 0) + 1;
    });

    const countryCount: Record<string, number> = {};
    reviews.forEach((r) => {
      r.country.split("/").forEach((c) => {
        const ct = c.trim();
        countryCount[ct] = (countryCount[ct] || 0) + 1;
      });
    });
    const topCountries = Object.entries(countryCount).sort(([, a], [, b]) => b - a).slice(0, 15);

    const decadeCount: Record<number, number> = {};
    reviews.forEach((r) => {
      if (r.year) {
        const d = Math.floor(r.year / 10) * 10;
        decadeCount[d] = (decadeCount[d] || 0) + 1;
      }
    });

    return { total, avg, ratingDist, topCountries, decadeCount };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <h1 className="text-xl font-bold text-white">Scott Sumner&apos;s Movie Reviews</h1>
              <p className="text-xs text-neutral-500">
                {reviews.length} reviews collected from{" "}
                <a href="https://scottsumner.substack.com" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Substack</a>{" "}
                &amp;{" "}
                <a href="https://www.themoneyillusion.com" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">The Money Illusion</a>
              </p>
            </div>
            <nav className="flex gap-1">
              {(["browse", "top", "stats"] as View[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1.5 rounded text-sm font-medium cursor-pointer transition-colors ${
                    view === v ? "bg-neutral-700 text-white" : "text-neutral-400 hover:text-white hover:bg-neutral-800"
                  }`}
                >
                  {v === "browse" ? "Browse" : v === "top" ? "Top Lists" : "Stats"}
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        {/* BROWSE VIEW */}
        {view === "browse" && (
          <>
            {/* Search & Filters */}
            <div className="mb-6 space-y-3">
              <div className="flex gap-3 flex-col sm:flex-row">
                <input
                  type="text"
                  placeholder="Search titles, directors, reviews..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="flex-1 px-4 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-sky-500"
                />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="px-3 py-2 bg-neutral-900 border border-neutral-700 rounded-lg text-neutral-300 cursor-pointer"
                >
                  <option value="rating-desc">Highest Rated</option>
                  <option value="rating-asc">Lowest Rated</option>
                  <option value="year-desc">Newest First</option>
                  <option value="year-asc">Oldest First</option>
                  <option value="title-asc">A-Z</option>
                </select>
              </div>

              <div className="flex flex-wrap gap-2 items-center">
                <select
                  value={selectedDecade}
                  onChange={(e) => setSelectedDecade(e.target.value ? Number(e.target.value) : "")}
                  className="px-2 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-neutral-300 cursor-pointer"
                >
                  <option value="">All Decades</option>
                  {decades.map((d) => (
                    <option key={d} value={d}>{d}s</option>
                  ))}
                </select>

                <select
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="px-2 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-neutral-300 cursor-pointer"
                >
                  <option value="">All Countries</option>
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>

                <select
                  value={selectedDirector}
                  onChange={(e) => setSelectedDirector(e.target.value)}
                  className="px-2 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-neutral-300 cursor-pointer"
                >
                  <option value="">All Directors</option>
                  {directors.map((d) => (
                    <option key={d} value={d}>{d}</option>
                  ))}
                </select>

                <select
                  value={minRating}
                  onChange={(e) => setMinRating(Number(e.target.value))}
                  className="px-2 py-1.5 bg-neutral-900 border border-neutral-700 rounded text-sm text-neutral-300 cursor-pointer"
                >
                  <option value={0}>Any Rating</option>
                  <option value={3.0}>3.0+</option>
                  <option value={3.5}>3.5+</option>
                  <option value={3.8}>3.8+</option>
                  <option value={3.9}>3.9+</option>
                </select>

                <label className="flex items-center gap-1.5 text-sm text-neutral-400 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={showNewOnly}
                    onChange={(e) => setShowNewOnly(e.target.checked)}
                    className="cursor-pointer"
                  />
                  New releases only
                </label>

                {hasFilters && (
                  <button onClick={clearFilters} className="text-sm text-red-400 hover:text-red-300 cursor-pointer">
                    Clear all
                  </button>
                )}
              </div>
            </div>

            <p className="text-sm text-neutral-500 mb-4">
              {filtered.length} {filtered.length === 1 ? "film" : "films"}
              {hasFilters && " (filtered)"}
            </p>

            {/* Movie Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {filtered.map((movie) => (
                <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-16 text-neutral-500">
                <p className="text-lg mb-2">No films match your filters.</p>
                <button onClick={clearFilters} className="text-sky-400 hover:underline cursor-pointer">Clear filters</button>
              </div>
            )}
          </>
        )}

        {/* TOP LISTS VIEW */}
        {view === "top" && (
          <>
            <TopListSection title="Top 50 Overall" films={topAll} />

            <h2 className="text-xl font-bold text-white mb-4 mt-10">Top by Decade</h2>
            {Object.entries(topByDecade)
              .sort(([a], [b]) => Number(b) - Number(a))
              .map(([decade, films]) => (
                <TopListSection key={decade} title={`${decade}s (${films.length} films reviewed)`} films={films.slice(0, 20)} />
              ))}

            <h2 className="text-xl font-bold text-white mb-4 mt-10">Top by Country</h2>
            {Object.entries(topByCountry)
              .filter(([, films]) => films.length >= 5)
              .sort(([, a], [, b]) => b.length - a.length)
              .map(([country, films]) => (
                <TopListSection key={country} title={`${country} (${films.length} films)`} films={films.slice(0, 15)} />
              ))}

            <h2 className="text-xl font-bold text-white mb-4 mt-10">Top Directors (2+ reviews)</h2>
            <div className="space-y-2 mb-8">
              {topDirectors.map(([name, data]) => (
                <div key={name} className="flex items-center gap-3 py-2 px-3 rounded bg-neutral-900 border border-neutral-800">
                  <span className="font-medium text-neutral-200 w-48">{name}</span>
                  <span className="text-sm font-mono text-amber-400">{data.avg.toFixed(2)} avg</span>
                  <span className="text-xs text-neutral-500">{data.count} reviews</span>
                  <span className="text-xs text-neutral-600 ml-auto hidden sm:block">
                    Best: {data.best.title} ({data.best.rating})
                  </span>
                </div>
              ))}
            </div>
          </>
        )}

        {/* STATS VIEW */}
        {view === "stats" && (
          <div className="space-y-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-white">{stats.total}</div>
                <div className="text-sm text-neutral-500">Total Reviews</div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-amber-400">{stats.avg.toFixed(2)}</div>
                <div className="text-sm text-neutral-500">Average Rating</div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-emerald-400">
                  {reviews.filter((r) => r.rating >= 3.9).length}
                </div>
                <div className="text-sm text-neutral-500">Films Rated 3.9+</div>
              </div>
              <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-4 text-center">
                <div className="text-3xl font-bold text-sky-400">
                  {new Set(reviews.map((r) => r.director).filter(Boolean)).size}
                </div>
                <div className="text-sm text-neutral-500">Directors</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-200 mb-3">Rating Distribution</h3>
              <div className="space-y-2">
                {Object.entries(stats.ratingDist)
                  .sort(([a], [b]) => b.localeCompare(a))
                  .map(([bucket, count]) => (
                    <div key={bucket} className="flex items-center gap-3">
                      <span className="w-16 text-sm text-neutral-400 text-right">{bucket}</span>
                      <div className="flex-1 bg-neutral-800 rounded-full h-6 overflow-hidden">
                        <div
                          className="h-full bg-sky-600 rounded-full flex items-center justify-end pr-2"
                          style={{ width: `${(count / stats.total) * 100}%` }}
                        >
                          <span className="text-xs text-white font-mono">{count}</span>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-200 mb-3">Reviews by Country</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {stats.topCountries.map(([country, count]) => (
                  <div key={country} className="flex justify-between px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm">
                    <span className="text-neutral-300">{country}</span>
                    <span className="text-neutral-500 font-mono">{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-neutral-200 mb-3">Reviews by Decade</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {Object.entries(stats.decadeCount)
                  .sort(([a], [b]) => Number(b) - Number(a))
                  .map(([decade, count]) => (
                    <div key={decade} className="flex justify-between px-3 py-2 bg-neutral-900 border border-neutral-800 rounded text-sm">
                      <span className="text-neutral-300">{decade}s</span>
                      <span className="text-neutral-500 font-mono">{count}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="text-sm text-neutral-600 border-t border-neutral-800 pt-4">
              <p>
                Data collected from Scott Sumner&apos;s quarterly film review posts on{" "}
                <a href="https://scottsumner.substack.com" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Substack</a>{" "}
                and{" "}
                <a href="https://www.themoneyillusion.com" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">The Money Illusion</a>{" "}
                (2022&ndash;2026). Sumner rates films on a scale roughly from 1.0 to 4.0.
                His reviews cover both new releases and classic films across world cinema.
                See also <a href="https://www.sumnerscores.com" className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">sumnerscores.com</a> for his complete database.
              </p>
            </div>
          </div>
        )}
      </main>

      {/* Modal */}
      {selectedMovie && <Modal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}
    </div>
  );
}
