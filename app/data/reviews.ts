export interface Review {
  id: number;
  title: string;
  rating: number;
  year: number | null;
  country: string;
  director: string;
  review: string;
  source: string;
  isNew: boolean; // was it a new release when reviewed
}

export const reviews: Review[] = [
  // === 2026 Q1 (Substack) ===
  { id: 1, title: "Sirat", rating: 3.8, year: 2026, country: "Spain/Morocco", director: "", review: "Far more impressive (both visually and sonically) on the big screen. Realistic depiction of fatherhood compared to Wages of Fear.", source: "2026 Q1", isNew: true },
  { id: 2, title: "Kokuho", rating: 3.8, year: 2026, country: "Japan", director: "", review: "Highest-grossing live-action Japanese film. Kabuki sequences described as revelatory; effectively uses cinematography to explain the art form.", source: "2026 Q1", isNew: true },
  { id: 3, title: "No Other Choice", rating: 3.7, year: 2026, country: "South Korea", director: "", review: "Black comedy that pushes scenes to their limit. Contains social commentary on downsizing and AI, though advises against taking politics seriously.", source: "2026 Q1", isNew: true },
  { id: 4, title: "Naked Ambition", rating: 3.5, year: 2026, country: "USA", director: "", review: "Documentary about photographer Bunny Yeager. Initially appears superficial with 1950s cheesecake photos but improves substantially.", source: "2026 Q1", isNew: true },
  { id: 5, title: "Crime 101", rating: 3.4, year: 2026, country: "USA", director: "", review: "Well-crafted crime drama with familiar Hollywood tropes. Entertaining despite predictable elements and excessive length.", source: "2026 Q1", isNew: true },
  { id: 6, title: "The Mastermind", rating: 3.4, year: 2026, country: "USA", director: "", review: "Low-key crime drama set in 1970 Massachusetts. Appreciates the period recreation and subtle humor despite minimal action.", source: "2026 Q1", isNew: true },
  { id: 7, title: "Videoheaven", rating: 3.1, year: 2026, country: "USA", director: "", review: "Nostalgic documentary examining video rental store scenes in cinema. Runs excessively long at nearly 3 hours.", source: "2026 Q1", isNew: true },
  { id: 8, title: "Peter Hujar's Day", rating: 3.0, year: 2026, country: "USA", director: "", review: "Features excellent cinematography but relies on bland conversation rather than compelling dialogue.", source: "2026 Q1", isNew: true },
  { id: 9, title: "The Rip", rating: 3.0, year: 2026, country: "USA", director: "", review: "Frenetic pacing prevents emotional engagement. Includes overacting from Ben Affleck but offers passable entertainment value.", source: "2026 Q1", isNew: true },
  { id: 10, title: "Islands", rating: 3.0, year: 2026, country: "Germany", director: "", review: "Well-made mystery with predictable plot that becomes tedious after extended runtime.", source: "2026 Q1", isNew: true },
  { id: 11, title: "A Private Life", rating: 2.7, year: 2026, country: "France", director: "", review: "Plot-driven narrative with structural flaws. Jodie Foster delivers capable performance wasted by weak material.", source: "2026 Q1", isNew: true },
  { id: 12, title: "Mistress Disspeller", rating: 2.5, year: 2026, country: "China", director: "", review: "Claims documentary authenticity while presenting fabricated reality television content.", source: "2026 Q1", isNew: true },
  { id: 13, title: "Mulholland Drive", rating: 4.0, year: 2001, country: "USA", director: "David Lynch", review: "The third time through it was better than ever. Lynch's masterpiece comparable to Vertigo's significance. Depicts artistic filmmaking authentically.", source: "2026 Q1", isNew: false },
  { id: 14, title: "Days and Nights in the Forest", rating: 3.9, year: 1970, country: "India", director: "Satyajit Ray", review: "Satyajit Ray's acclaimed work featuring actress Sharmila Tagore. Transitions subtly from lighthearted narrative to profound human observation.", source: "2026 Q1", isNew: false },
  { id: 15, title: "Kiki's Delivery Service", rating: 3.9, year: 1989, country: "Japan", director: "Hayao Miyazaki", review: "Described as utopian. Ranks among favorite animated works alongside Spirited Away.", source: "2026 Q1", isNew: false },
  { id: 16, title: "Aguirre: The Wrath of God", rating: 3.8, year: 1972, country: "Germany", director: "Werner Herzog", review: "Classic 1970s film employing Heart of Darkness irony effectively. Represents era when cinema could feel genuinely novel to audiences.", source: "2026 Q1", isNew: false },
  { id: 17, title: "Wings of Desire", rating: 3.8, year: 1987, country: "Germany", director: "Wim Wenders", review: "Wim Wenders' work featuring Berlin before the wall's collapse. Contains beautiful black-and-white cinematography and Nick Cave performances.", source: "2026 Q1", isNew: false },
  { id: 18, title: "The Magician", rating: 3.8, year: 1958, country: "Sweden", director: "Ingmar Bergman", review: "Bergman work demonstrating mature directorial style. More entertaining than his subsequent, more ponderous productions.", source: "2026 Q1", isNew: false },
  { id: 19, title: "Moving", rating: 3.8, year: 1993, country: "Japan", director: "Shinji Somai", review: "Examination of human experience and childhood. Influenced contemporary Japanese masters; combines visual sophistication with psychological depth.", source: "2026 Q1", isNew: false },

  // === 2025 Q4 (Substack) ===
  { id: 20, title: "Resurrection", rating: 4.0, year: 2025, country: "China", director: "Bi Gan", review: "Exceptional cinematography influenced by Melies, Cornell, and Hou Hsiao-hsien. A 30-minute long take in a Yangtze river town impressed deeply. Potentially favorite film of the decade.", source: "2025 Q4", isNew: true },
  { id: 21, title: "Sentimental Value", rating: 3.8, year: 2025, country: "Norway", director: "", review: "Family drama elevated by strong acting performances.", source: "2025 Q4", isNew: true },
  { id: 22, title: "The Secret Agent", rating: 3.7, year: 2025, country: "Brazil", director: "", review: "Implausible plot but engaging leisurely pace depicting 1977 life in Brazil's northeast.", source: "2025 Q4", isNew: true },
  { id: 23, title: "One Battle After Another", rating: 3.7, year: 2025, country: "USA", director: "", review: "Most entertaining 2025 film with Kubrick influences and minimal CGI, though described as 'one damn scene after another.'", source: "2025 Q4", isNew: true },
  { id: 24, title: "Left-Handed Girl", rating: 3.0, year: 2025, country: "Taiwan", director: "", review: "Glitzy dramedy offering nothing new. Despite 99% Rotten Tomatoes score, lacks sufficient comedy or realistic characters.", source: "2025 Q4", isNew: true },
  { id: 25, title: "An Elephant Sitting Still", rating: 4.0, year: 2019, country: "China", director: "Hu Bo", review: "Masterful shot after another displaying brilliant cinematography. Upgraded from 3.8 after viewing on big screen. One of all-time favorite Chinese films.", source: "2025 Q4", isNew: false },
  { id: 26, title: "Paris, Texas", rating: 3.9, year: 1984, country: "USA", director: "Wim Wenders", review: "Strong final hour contains some of the most sublime filmmaking in the history of cinema. First 90 minutes very good but not exceptional.", source: "2025 Q4", isNew: false },
  { id: 27, title: "The Silence", rating: 3.8, year: 1963, country: "Sweden", director: "Ingmar Bergman", review: "Would have shocked 1963 audiences. Remains fresh with willingness to explore previously taboo topics.", source: "2025 Q4", isNew: false },
  { id: 28, title: "Lessons of Darkness", rating: 3.8, year: 1992, country: "Germany", director: "Werner Herzog", review: "Documentary on Gulf War aftermath and oil fires. 54 minutes packed with sublime images and ominous classical music.", source: "2025 Q4", isNew: false },
  { id: 29, title: "Breathless", rating: 3.8, year: 1960, country: "France", director: "Jean-Luc Godard", review: "Invention rated 4.0, entertainment value 3.5. Godard invented modern cinema with jump cuts and irony, though some content now seems dated.", source: "2025 Q4", isNew: false },
  { id: 30, title: "Undercurrent", rating: 3.7, year: 1956, country: "Japan", director: "Yoshimura", review: "Early color film with truly beautiful images essential for Japanese cinema fans.", source: "2025 Q4", isNew: false },
  { id: 31, title: "Scarface", rating: 3.7, year: 1932, country: "USA", director: "Howard Hawks", review: "Pre-code gangster film focused on people, the faces, the poses, the gestures. Final portion contains classic scenes.", source: "2025 Q4", isNew: false },
  { id: 32, title: "The Barbary Coast", rating: 3.6, year: 1935, country: "USA", director: "Howard Hawks", review: "Hawks' weaker work remains quite entertaining, typical of his straightforward, audience-pleasing approach.", source: "2025 Q4", isNew: false },
  { id: 33, title: "Safe", rating: 3.5, year: 1995, country: "USA", director: "Todd Haynes", review: "Critical favorite with mysterious ambiguity, but hasn't aged well\u2014some scenes seem too heavy handed, too didactic.", source: "2025 Q4", isNew: false },
  { id: 34, title: "Barton Fink", rating: 3.4, year: 1991, country: "USA", director: "Coen Brothers", review: "Appealing premise undermined by reliance on improbable plot twists. Film is much less than the sum of its parts despite excellent components.", source: "2025 Q4", isNew: false },
  { id: 35, title: "A Better Tomorrow", rating: 3.4, year: 1986, country: "Hong Kong", director: "John Woo", review: "Much content has not aged well after nearly 40 years, though some scenes justify its original impact.", source: "2025 Q4", isNew: false },
  { id: 36, title: "Framed", rating: 3.4, year: 1947, country: "USA", director: "", review: "Glenn Ford nearly perfect in this role. Well short of classic noir but features interesting plot that holds one's interest.", source: "2025 Q4", isNew: false },
  { id: 37, title: "La Collectionneuse", rating: 3.3, year: 1967, country: "France", director: "Eric Rohmer", review: "Rohmer films leave me feeling like a bit of a simpleton. Last portion contained engaging ideas presented wittily.", source: "2025 Q4", isNew: false },
  { id: 38, title: "My Son, My Son, What Have Ye Done?", rating: 3.2, year: 2009, country: "USA", director: "Werner Herzog", review: "Roughly what you'd expect from Herzog/Lynch collaboration. Dark comedy appealing to fans of both directors.", source: "2025 Q4", isNew: false },
  { id: 39, title: "My Blueberry Nights", rating: 3.2, year: 2008, country: "USA", director: "Wong Kar-wai", review: "Visually appealing attempt to bring Wong's style to America stumbles due to weak screenplay.", source: "2025 Q4", isNew: false },
  { id: 40, title: "Love Under the Crucifix", rating: 3.2, year: 1962, country: "Japan", director: "", review: "Heavy-handed melodrama with attractive cinematography offering insights into non-Christian perceptions of Christianity.", source: "2025 Q4", isNew: false },
  { id: 41, title: "A Single Man", rating: 3.1, year: 2009, country: "USA", director: "", review: "Earnest film about gay man in 1962 America. Avoids edgy and controversial scenes, which might have been a mistake.", source: "2025 Q4", isNew: false },
  { id: 42, title: "Damsels in Distress", rating: 3.1, year: 2011, country: "USA", director: "Whit Stillman", review: "Stillman's weakest film\u2014making fun of dumb people is not his forte.", source: "2025 Q4", isNew: false },
  { id: 43, title: "Once a Thief", rating: 3.0, year: 1991, country: "Hong Kong", director: "John Woo", review: "Enjoyable when first viewed but hasn't aged well as Woo's action innovations have been widely copied.", source: "2025 Q4", isNew: false },
  { id: 44, title: "Maps to the Stars", rating: 3.0, year: 2014, country: "USA", director: "David Cronenberg", review: "Cynical Hollywood satire motivated by hatred lacks nuance. Would rather see a black comedy done by a director bemused by industry.", source: "2025 Q4", isNew: false },
  { id: 45, title: "A Rainy Day in New York", rating: 3.0, year: 2020, country: "USA", director: "Woody Allen", review: "Recent Allen films all seem about the same\u2014not bad, but not good either.", source: "2025 Q4", isNew: false },
  { id: 46, title: "Toute une Nuit", rating: 3.0, year: 1982, country: "Belgium", director: "Chantal Akerman", review: "Better visuals than Akerman's other work, but difficulty making feature film without a unifying narrative thread.", source: "2025 Q4", isNew: false },
  { id: 47, title: "Body of Evidence", rating: 2.9, year: 1993, country: "USA", director: "", review: "1990s pre-internet eroticism film. Recommended only for campy appeal, not as great art.", source: "2025 Q4", isNew: false },
  { id: 48, title: "Heat Wave", rating: 2.8, year: 1991, country: "Japan", director: "", review: "Nice visuals undermined by mediocre acting and an even worse screenplay.", source: "2025 Q4", isNew: false },
  { id: 49, title: "The Lost Weekend: A Love Story", rating: 2.7, year: 2023, country: "USA", director: "", review: "Documentary on Lennon affair raises ethical gossip concerns.", source: "2025 Q4", isNew: false },
  { id: 50, title: "Fata Morgana", rating: 2.5, year: 1971, country: "Germany", director: "Werner Herzog", review: "Herzog innovations appear more effectively in later films. Hasn't aged well despite innovative techniques.", source: "2025 Q4", isNew: false },

  // === 2025 Q1 (Substack) ===
  { id: 51, title: "The Shadowless Tower", rating: 3.6, year: 2024, country: "China", director: "", review: "Great visuals, sly humor, and a very perceptive look at the challenges of being middle aged.", source: "2025 Q1", isNew: true },
  { id: 52, title: "The Missing Pieces", rating: 3.6, year: 2024, country: "USA", director: "David Lynch", review: "Collection of Twin Peaks outtakes superior to most Hollywood films; showcases Lynch's surreal mood creation.", source: "2025 Q1", isNew: true },
  { id: 53, title: "The Brutalist", rating: 3.5, year: 2024, country: "USA", director: "", review: "Ambitious epic with excellent acting but pedestrian visuals and Hollywood cliches; building design seemed derivative.", source: "2025 Q1", isNew: true },
  { id: 54, title: "Black Bag", rating: 3.3, year: 2024, country: "USA", director: "Steven Soderbergh", review: "Intelligent but forgettable; lacks ambition and believable spy-story elements despite witty moments.", source: "2025 Q1", isNew: true },
  { id: 55, title: "Becoming Led Zeppelin", rating: 3.0, year: 2024, country: "UK", director: "", review: "Bland documentary covering early career; captures 1968 cultural change effectively.", source: "2025 Q1", isNew: true },
  { id: 56, title: "Drive-Away Dolls", rating: 2.9, year: 2024, country: "USA", director: "Ethan Coen", review: "Tarantino-style lesbian comedy/detective film; first of proposed trilogy.", source: "2025 Q1", isNew: true },
  { id: 57, title: "Room 666/Room 999", rating: 2.8, year: 2022, country: "France", director: "", review: "Documentaries questioning cinema's viability; explores how specific film genres have finite lifespans.", source: "2025 Q1", isNew: true },
  { id: 58, title: "Babygirl", rating: 2.8, year: 2024, country: "USA", director: "", review: "Modern Hollywood style with loud music and glitzy images; fake characters undermine viewer engagement.", source: "2025 Q1", isNew: true },
  { id: 59, title: "The Wailing", rating: 3.8, year: 2016, country: "South Korea", director: "", review: "Great horror film; reflects South Korean cultural intensity regarding economy, competition, work.", source: "2025 Q1", isNew: false },
  { id: 60, title: "Desire", rating: 3.8, year: 1936, country: "USA", director: "Frank Borzage", review: "Combines romance and humor effectively; Marlene Dietrich is wonderful, Gary Cooper excellent.", source: "2025 Q1", isNew: false },
  { id: 61, title: "The Wild Pear Tree", rating: 3.8, year: 2019, country: "Turkey", director: "Nuri Bilge Ceylan", review: "Slow-paced character study; appreciation for Ceylan's work increases with age.", source: "2025 Q1", isNew: false },
  { id: 62, title: "The End of Violence", rating: 3.7, year: 1997, country: "USA", director: "Wim Wenders", review: "Bill Pullman vehicle exploring Hispanic immigrants' overlooked role maintaining American sanity.", source: "2025 Q1", isNew: false },
  { id: 63, title: "Brothers and Sisters of the Toda Family", rating: 3.7, year: 1941, country: "Japan", director: "Yasujiro Ozu", review: "Ozu warm-up for Tokyo Story; demonstrates democratic sympathies in class-divided society.", source: "2025 Q1", isNew: false },
  { id: 64, title: "If I Should Die Before I Wake", rating: 3.7, year: 1952, country: "Argentina", director: "", review: "Must see for fans of Night of the Hunter; Argentine noir with suspenseful narrative.", source: "2025 Q1", isNew: false },
  { id: 65, title: "Ladies of Leisure", rating: 3.7, year: 1930, country: "USA", director: "Frank Capra", review: "Underrated Capra/Stanwyck collaboration; excellent cinematography and Barbara Stanwyck gives spectacular performance.", source: "2025 Q1", isNew: false },
  { id: 66, title: "Thirty Day Princess", rating: 3.6, year: 1934, country: "USA", director: "", review: "Charming romantic comedy with Cary Grant; Sylvia Sydney delivers standout performance.", source: "2025 Q1", isNew: false },
  { id: 67, title: "The Black Vampire", rating: 3.6, year: 1952, country: "Argentina", director: "", review: "Fritz Lang's M remake; features dark shadows, child danger, blind witness, Freudian psychology.", source: "2025 Q1", isNew: false },
  { id: 68, title: "The Bitter Stems", rating: 3.6, year: 1956, country: "Argentina", director: "", review: "First Argentine noir viewed; second half excellent; Buenos Aires looks like most modern city.", source: "2025 Q1", isNew: false },
  { id: 69, title: "Brighton Rock", rating: 3.6, year: 1948, country: "UK", director: "", review: "Classic British noir from Graham Greene novel; Richard Attenborough delivers compelling performance.", source: "2025 Q1", isNew: false },
  { id: 70, title: "Human Desire", rating: 3.6, year: 1954, country: "USA", director: "Fritz Lang", review: "Railroad noir with excellent acting; trains provided classic film scenes.", source: "2025 Q1", isNew: false },
  { id: 71, title: "Don't Bother to Knock", rating: 3.5, year: 1952, country: "USA", director: "", review: "Average film elevated by Marilyn Monroe's towering performance among competent co-stars.", source: "2025 Q1", isNew: false },
  { id: 72, title: "Never Open That Door", rating: 3.5, year: 1952, country: "Argentina", director: "", review: "Two short films by same director; first rates 3.4, second rates 3.6.", source: "2025 Q1", isNew: false },
  { id: 73, title: "Drunk", rating: 3.5, year: 2020, country: "Denmark", director: "Thomas Vinterberg", review: "Love letter to drunkenness; entertaining if not taken seriously; unclear messaging appreciated.", source: "2025 Q1", isNew: false },
  { id: 74, title: "Il Grido", rating: 3.4, year: 1957, country: "Italy", director: "Michelangelo Antonioni", review: "Po Valley scenery deliberately bleak; nearly panned by critics; for Antonioni completists only.", source: "2025 Q1", isNew: false },
  { id: 75, title: "Masculine-Feminine", rating: 3.4, year: 1966, country: "France", director: "Jean-Luc Godard", review: "Somewhat superficial; encapsulates classic Godard style; humor hasn't aged universally well.", source: "2025 Q1", isNew: false },
  { id: 76, title: "The Bride Wore Black", rating: 3.4, year: 1969, country: "France", director: "Francois Truffaut", review: "Hitchcock imitation with Bernard Herrmann score; skillful but pales versus original Hitchcock.", source: "2025 Q1", isNew: false },
  { id: 77, title: "Forbidden", rating: 3.3, year: 1932, country: "USA", director: "Frank Capra", review: "Capra/Stanwyck collaboration; strong opening undermined by melodrama that hasn't aged gracefully.", source: "2025 Q1", isNew: false },
  { id: 78, title: "Shockproof", rating: 3.3, year: 1949, country: "USA", director: "Douglas Sirk", review: "Sirk melodrama with Fuller screenplay; wooden acting/dialogue; improves when couple flees.", source: "2025 Q1", isNew: false },
  { id: 79, title: "The Beast Must Die", rating: 3.2, year: 1952, country: "Argentina", director: "", review: "Directed by The Black Vampire filmmaker; plot-driven; visually less interesting.", source: "2025 Q1", isNew: false },
  { id: 80, title: "Bluebeard's 8th Wife", rating: 3.2, year: 1938, country: "USA", director: "Ernst Lubitsch", review: "Lubitsch/Wilder collaboration disappoints; Gary Cooper unconvincing as serial husband.", source: "2025 Q1", isNew: false },
  { id: 81, title: "Sapphire", rating: 3.2, year: 1959, country: "UK", director: "", review: "Early color film; examines British racial anxieties; more valuable historically than procedurally.", source: "2025 Q1", isNew: false },
  { id: 82, title: "Say Anything", rating: 3.0, year: 1989, country: "USA", director: "", review: "Barely watchable; John Cusack's acting and Peter Gabriel's music redeem mediocre narrative.", source: "2025 Q1", isNew: false },
  { id: 83, title: "Dead Calm", rating: 2.7, year: 1989, country: "Australia", director: "", review: "Nicole Kidman's major debut undermined by mediocre direction and contrived storytelling.", source: "2025 Q1", isNew: false },

  // === 2024 Q4 (Substack) ===
  { id: 84, title: "Her Story", rating: 3.6, year: 2024, country: "China", director: "", review: "Crowd-pleasing comedy/drama takes some obvious jabs at the Xi Jinping administration.", source: "2024 Q4", isNew: true },
  { id: 85, title: "Blitz", rating: 3.6, year: 2024, country: "UK", director: "", review: "Combines vivid historical recreation with drama; reminiscent of Hope and Glory in content, Titanic in style.", source: "2024 Q4", isNew: true },
  { id: 86, title: "Juror #2", rating: 3.4, year: 2024, country: "USA", director: "Clint Eastwood", review: "Standard courtroom drama; Eastwood excels at exposing moral dilemmas between family and society.", source: "2024 Q4", isNew: true },
  { id: 87, title: "Fremont", rating: 3.2, year: 2024, country: "USA", director: "", review: "Minimalist dry comedy in the style of Kaurismaki about Afghan immigrant writing fortune cookies.", source: "2024 Q4", isNew: true },
  { id: 88, title: "A Complete Unknown", rating: 3.0, year: 2024, country: "USA", director: "", review: "Dylan biopic that feels more like Joan Baez would direct it; Chalamet's performance one-dimensional.", source: "2024 Q4", isNew: true },
  { id: 89, title: "Anora", rating: 3.0, year: 2024, country: "USA", director: "", review: "Formulaic story with telegraphed ending; middle section funny but overall too long.", source: "2024 Q4", isNew: true },
  { id: 90, title: "So Long, My Son", rating: 3.8, year: 2019, country: "China", director: "", review: "Near-perfect film critical of one-child policy; complex narrative requires close attention.", source: "2024 Q4", isNew: false },
  { id: 91, title: "Gilda", rating: 3.8, year: 1946, country: "USA", director: "", review: "Influenced by Casablanca; great screenplay and supporting cast; Hayworth's 'Me?' is iconic.", source: "2024 Q4", isNew: false },
  { id: 92, title: "The House That Jack Built", rating: 3.7, year: 2018, country: "USA", director: "Lars von Trier", review: "Exceptionally talented director but applied to unappealing subject matter.", source: "2024 Q4", isNew: false },
  { id: 93, title: "La Prisonniere", rating: 3.6, year: 1968, country: "France", director: "Clouzot", review: "Voyeurism themes remain engaging; psychedelic ending still impressive.", source: "2024 Q4", isNew: false },
  { id: 94, title: "Le Petit Soldat", rating: 3.5, year: 1963, country: "France", director: "Jean-Luc Godard", review: "Camera work showcases Anna Karina in her film debut; less graphic torture than modern films.", source: "2024 Q4", isNew: false },
  { id: 95, title: "Vanilla Sky", rating: 3.5, year: 2001, country: "USA", director: "Cameron Crowe", review: "Pop culture references feel tailored to specific age demographic; charming rather than artistically rigorous.", source: "2024 Q4", isNew: false },
  { id: 96, title: "Murder By Contract", rating: 3.4, year: 1957, country: "USA", director: "", review: "Engrossing noir that influenced Taxi Driver; Vince Edwards delivers excellent performance.", source: "2024 Q4", isNew: false },
  { id: 97, title: "Sanshiro Sugata", rating: 3.4, year: 1943, country: "Japan", director: "Akira Kurosawa", review: "First film shows Kurosawa's signature technique; censored by Japanese officials.", source: "2024 Q4", isNew: false },
  { id: 98, title: "Carnival of Souls", rating: 3.4, year: 1962, country: "USA", director: "", review: "Blends 1950s horror with Antonioni-style architecture; influenced by Psycho.", source: "2024 Q4", isNew: false },
  { id: 99, title: "Sincere Heart", rating: 3.4, year: 1953, country: "Japan", director: "", review: "Simple, sentimental; understated acting; visual purity creates emotional impact.", source: "2024 Q4", isNew: false },
  { id: 100, title: "Audition", rating: 3.2, year: 1999, country: "Japan", director: "", review: "Skillfully crafted but contains extended torture sequences; Tarantino admires it.", source: "2024 Q4", isNew: false },

  // === 2024 Q2 ===
  { id: 101, title: "About Dry Grasses", rating: 3.9, year: 2024, country: "Turkey", director: "Nuri Bilge Ceylan", review: "Favorite Ceylan film; engrossing despite 3-and-a-quarter hour length.", source: "2024 Q2", isNew: true },
  { id: 102, title: "Evil Does Not Exist", rating: 3.7, year: 2024, country: "Japan", director: "", review: "Outstanding Japanese cinema; slow start building to strong second half.", source: "2024 Q2", isNew: true },
  { id: 103, title: "The Thief Collector", rating: 3.6, year: 2024, country: "USA", director: "", review: "Documentary on art thieves; enjoyable with surprising revelations.", source: "2024 Q2", isNew: true },
  { id: 104, title: "Hit Man", rating: 3.5, year: 2024, country: "USA", director: "Richard Linklater", review: "Entertaining plot but lacking style; Soderbergh-lite execution.", source: "2024 Q2", isNew: true },
  { id: 105, title: "Fallen Leaves", rating: 3.4, year: 2024, country: "Finland", director: "Aki Kaurismaki", review: "Characteristic style with sly humor; formulaic like his other works.", source: "2024 Q2", isNew: true },
  { id: 106, title: "Challengers", rating: 2.6, year: 2024, country: "USA", director: "", review: "Unpleasant characters; annoying soundtrack; wrong film choice.", source: "2024 Q2", isNew: true },
  { id: 107, title: "Identification of a Woman", rating: 3.8, year: 1982, country: "Italy", director: "Michelangelo Antonioni", review: "Brilliantly constructed visuals; appeals to serious film enthusiasts.", source: "2024 Q2", isNew: false },
  { id: 108, title: "State and Main", rating: 3.6, year: 2000, country: "USA", director: "David Mamet", review: "Consistently entertaining with strong cast; Pidgeon outstanding.", source: "2024 Q2", isNew: false },
  { id: 109, title: "Where the Sidewalk Ends", rating: 3.6, year: 1950, country: "USA", director: "", review: "Satisfying noir, though below 1950's greatest classics.", source: "2024 Q2", isNew: false },
  { id: 110, title: "Once Upon a Time in America", rating: 3.4, year: 1984, country: "USA", director: "Sergio Leone", review: "Ambitious but flawed; marvelous sequences but lacks cohesion.", source: "2024 Q2", isNew: false },
  { id: 111, title: "Following", rating: 3.4, year: 1998, country: "UK", director: "Christopher Nolan", review: "Low-budget noir more entertaining than higher-budget peers.", source: "2024 Q2", isNew: false },

  // === 2024 Q1 ===
  { id: 112, title: "Monster", rating: 3.9, year: 2024, country: "Japan", director: "Hirokazu Kore-eda", review: "Best work since Nobody Knows, and one of the best films of the past decade. Excellent screenplay, acting, cinematography, and sound.", source: "2024 Q1", isNew: true },
  { id: 113, title: "Anselm", rating: 3.8, year: 2024, country: "Germany", director: "Wim Wenders", review: "Outstanding art documentary.", source: "2024 Q1", isNew: true },
  { id: 114, title: "In the Court of the Crimson King", rating: 3.7, year: 2024, country: "UK", director: "", review: "Better than Anselm documentary in some ways; contains funny and deeply moving sequences.", source: "2024 Q1", isNew: true },
  { id: 115, title: "Perfect Days", rating: 3.7, year: 2024, country: "Japan", director: "Wim Wenders", review: "Minimalist film; occasionally felt more focused on Wenders' pop music taste than the narrative.", source: "2024 Q1", isNew: true },
  { id: 116, title: "The Movie Emperor", rating: 3.4, year: 2024, country: "Hong Kong", director: "", review: "Effective comedy addressing contemporary themes.", source: "2024 Q1", isNew: true },
  { id: 117, title: "Oppenheimer", rating: 3.3, year: 2024, country: "USA", director: "Christopher Nolan", review: "Excellent sci-fi director but weak on real-world science; three-hour history lesson on well-known material is tiresome.", source: "2024 Q1", isNew: true },
  { id: 118, title: "Dune 2", rating: 3.3, year: 2024, country: "USA", director: "Denis Villeneuve", review: "Visually impressive occasionally but somewhat inert, lacking narrative momentum; Villeneuve lacks Kubrick/Tarkovsky caliber.", source: "2024 Q1", isNew: true },
  { id: 119, title: "Nostalghia", rating: 3.9, year: 1983, country: "Russia", director: "Andrei Tarkovsky", review: "Privilege to see restored version on big screen; first half has stunning image after another; final shot like Caspar David Friedrich painting.", source: "2024 Q1", isNew: false },
  { id: 120, title: "The Idiot", rating: 3.8, year: 1951, country: "Japan", director: "Akira Kurosawa", review: "100 minutes cut by studio; one of great artistic crimes of 20th century.", source: "2024 Q1", isNew: false },
  { id: 121, title: "The Munekata Sisters", rating: 3.7, year: 1950, country: "Japan", director: "Yasujiro Ozu", review: "Characteristic Ozu film from start of his greatest period.", source: "2024 Q1", isNew: false },
  { id: 122, title: "Betty Blue", rating: 3.7, year: 1986, country: "France", director: "", review: "Re-watching reveals Zorg is central character; fairy tale for adults about living life fully.", source: "2024 Q1", isNew: false },
  { id: 123, title: "The Other Side of Hope", rating: 3.6, year: 2017, country: "Finland", director: "Aki Kaurismaki", review: "Subtle humor; sushi menu scene one of laugh out loud funniest in years.", source: "2024 Q1", isNew: false },
  { id: 124, title: "Youth Without Youth", rating: 3.6, year: 2007, country: "Romania", director: "Francis Ford Coppola", review: "Critics panned; supernatural plot unbelievable but images astonishing; transported to sublime Coppola films of 1970s.", source: "2024 Q1", isNew: false },
  { id: 125, title: "The Yards", rating: 3.6, year: 2000, country: "USA", director: "James Gray", review: "Excellent crime drama; Godfather and early Scorsese fans need to check this out.", source: "2024 Q1", isNew: false },
  { id: 126, title: "I Vitelloni", rating: 3.6, year: 1953, country: "Italy", director: "Federico Fellini", review: "Early Fellini covering familiar ground because it's been copied by many directors.", source: "2024 Q1", isNew: false },
  { id: 127, title: "Birth", rating: 3.6, year: 2004, country: "USA", director: "Jonathan Glazer", review: "Will stick in your mind long after; Nicole Kidman outstanding; Glazer underrated director.", source: "2024 Q1", isNew: false },
  { id: 128, title: "Godzilla", rating: 3.5, year: 1954, country: "Japan", director: "", review: "Initially seemed typical 1950s horror; halfway through achieved tragic gravitas totally unexpected.", source: "2024 Q1", isNew: false },
  { id: 129, title: "They Live By Night", rating: 3.5, year: 1948, country: "USA", director: "Nicholas Ray", review: "Influential noir; avoids showing crimes, focusing on young lovers; respectful choice.", source: "2024 Q1", isNew: false },
  { id: 130, title: "Vivre sa vie", rating: 3.5, year: 1962, country: "France", director: "Jean-Luc Godard", review: "After 60 years, Godard's experiments less interesting; highly skilled filmmaker; Anna Karina sublime.", source: "2024 Q1", isNew: false },
  { id: 131, title: "It's All About Love", rating: 2.2, year: 2003, country: "Denmark", director: "Thomas Vinterberg", review: "Very bad film; good actors/director caused morbid fascination; Sean Penn's performance almost funny.", source: "2024 Q1", isNew: false },
  { id: 132, title: "Cocktail", rating: 2.5, year: 1988, country: "USA", director: "", review: "Fairly bad film watched out of fascination; charismatic lead helps box office.", source: "2024 Q1", isNew: false },

  // === 2023 Q4 ===
  { id: 133, title: "Anatomy of a Fall", rating: 3.6, year: 2023, country: "France", director: "", review: "Continental courtroom drama showing how judges ask questions. Well-made but not rewatchable.", source: "2023 Q4", isNew: true },
  { id: 134, title: "Blackberry", rating: 3.4, year: 2023, country: "Canada", director: "", review: "Works better as comedy than drama. Entertaining film about culture conflict between alphas and betas.", source: "2023 Q4", isNew: true },
  { id: 135, title: "American Fiction", rating: 3.4, year: 2023, country: "USA", director: "", review: "Funny but follows Hollywood formula too closely.", source: "2023 Q4", isNew: true },
  { id: 136, title: "Taylor Swift: Era Tour", rating: 3.3, year: 2023, country: "USA", director: "", review: "Polished performance showcasing her songwriting talent. Her music seems aimed at empowering awkward teenage girls.", source: "2023 Q4", isNew: true },
  { id: 137, title: "The Boy and the Heron", rating: 3.2, year: 2023, country: "Japan", director: "Hayao Miyazaki", review: "Miyazaki seems to have lost his magic. Time to retire?", source: "2023 Q4", isNew: true },
  { id: 138, title: "Breaking the Waves", rating: 3.9, year: 1996, country: "Denmark", director: "Lars von Trier", review: "Emotionally devastating. After suffering for 2.5 hours feels like you've seen one of the greatest films.", source: "2023 Q4", isNew: false },
  { id: 139, title: "Diary of a Country Priest", rating: 3.8, year: 1951, country: "France", director: "Robert Bresson", review: "Masterpiece exploring spiritual themes through cinematography rather than dialogue.", source: "2023 Q4", isNew: false },
  { id: 140, title: "The Repast", rating: 3.8, year: 1951, country: "Japan", director: "Mikio Naruse", review: "First of excellent 1950s films. Naruse has sympathy for female characters unmatched by other male directors.", source: "2023 Q4", isNew: false },
  { id: 141, title: "Hour of the Wolf", rating: 3.7, year: 1968, country: "Sweden", director: "Ingmar Bergman", review: "Uneven horror film with memorable scenes essential for film enthusiasts.", source: "2023 Q4", isNew: false },
  { id: 142, title: "Woman of Tokyo", rating: 3.7, year: 1933, country: "Japan", director: "Yasujiro Ozu", review: "Packs drama into 47-minute runtime. Worth watching because it was directed by Ozu.", source: "2023 Q4", isNew: false },
  { id: 143, title: "Nine Queens", rating: 3.6, year: 2000, country: "Argentina", director: "", review: "Excellent confidence-artist film with entertaining plot and strong performances.", source: "2023 Q4", isNew: false },
  { id: 144, title: "Rich and Strange", rating: 3.6, year: 1931, country: "UK", director: "Alfred Hitchcock", review: "Amusing commentary on how adults are often just overgrown children. Final 20 minutes especially effective.", source: "2023 Q4", isNew: false },

  // === 2023 Q3 ===
  { id: 145, title: "Lynch/Oz", rating: 3.9, year: 2023, country: "USA", director: "", review: "Six essays exploring links between The Wizard of Oz and David Lynch films. Favorite of the 2020s; recommends big screen viewing.", source: "2023 Q3", isNew: true },
  { id: 146, title: "Barbie", rating: 3.3, year: 2023, country: "USA", director: "", review: "Pretty if you like pink. Amusing but humor dumbed down for teenage audience.", source: "2023 Q3", isNew: true },
  { id: 147, title: "Mission: Impossible - Dead Reckoning", rating: 3.0, year: 2023, country: "USA", director: "", review: "Everything was derivative. Tom Cruise lost his charisma.", source: "2023 Q3", isNew: true },
  { id: 148, title: "Taste of Cherry", rating: 3.9, year: 1997, country: "Iran", director: "Abbas Kiarostami", review: "All-time favorite Iranian film. Narrative initially unclear but highly engrossing.", source: "2023 Q3", isNew: false },
  { id: 149, title: "Onibaba", rating: 3.9, year: 1964, country: "Japan", director: "", review: "Riches of mid-century Japanese cinema seem inexhaustible. William Friedkin named it his top favorite film.", source: "2023 Q3", isNew: false },
  { id: 150, title: "Letter Never Sent", rating: 3.9, year: 1960, country: "Russia", director: "", review: "Liked this even more than the director's more famous Cranes are Flying. Great B&W cinematography.", source: "2023 Q3", isNew: false },
  { id: 151, title: "Pigs and Battleships", rating: 3.8, year: 1961, country: "Japan", director: "Shohei Imamura", review: "Director has great feel for small-time hoodlums with sarcastic style and flamboyant visual style.", source: "2023 Q3", isNew: false },
  { id: 152, title: "The Graduate", rating: 3.8, year: 1967, country: "USA", director: "", review: "Great dialogue and excellent soundtrack plus striking images.", source: "2023 Q3", isNew: false },
  { id: 153, title: "Oldboy", rating: 3.8, year: 2003, country: "South Korea", director: "", review: "Best epitomizes Korean movies dialing intensity to eleven. Style powerful but extreme violence unpleasant rewatching.", source: "2023 Q3", isNew: false },
  { id: 154, title: "Playtime", rating: 3.9, year: 1967, country: "France", director: "Jacques Tati", review: "Almost silent architectural comedy; requires large screen; resembles Keaton remaking Chaplin.", source: "2022 Q3", isNew: false },

  // === 2023 Q2 ===
  { id: 155, title: "Asteroid City", rating: 3.7, year: 2023, country: "USA", director: "Wes Anderson", review: "Visually delightful film full of striking images, including a Cindy Sherman homage.", source: "2023 Q2", isNew: true },
  { id: 156, title: "The Velvet Queen", rating: 3.7, year: 2023, country: "France", director: "", review: "Nature documentary that becomes a near masterpiece when viewed correctly, though extremely slow-paced.", source: "2023 Q2", isNew: true },
  { id: 157, title: "Past Lives", rating: 3.4, year: 2023, country: "South Korea", director: "", review: "Intelligent film with appealing characters but lacks cinematic creativity.", source: "2023 Q2", isNew: true },
  { id: 158, title: "A Matter of Life and Death", rating: 3.9, year: 1946, country: "UK", director: "Michael Powell", review: "Powell/Pressburger masterpiece with exceptional technical brilliance.", source: "2023 Q2", isNew: false },
  { id: 159, title: "The Seventh Seal", rating: 3.9, year: 1957, country: "Sweden", director: "Ingmar Bergman", review: "Classic featuring Death playing chess; outstanding acting, dialogue, and cinematography.", source: "2023 Q2", isNew: false },
  { id: 160, title: "On the Waterfront", rating: 3.8, year: 1954, country: "USA", director: "Elia Kazan", review: "Brando's exceptional acting carries the melodramatic plot.", source: "2023 Q2", isNew: false },
  { id: 161, title: "Come and See", rating: 3.8, year: 1985, country: "Russia", director: "", review: "Alternates between greatness and clumsiness; horrifying depiction of Nazi destruction in Belarus.", source: "2023 Q2", isNew: false },

  // === 2023 Q1 ===
  { id: 162, title: "The Fabelmans", rating: 3.7, year: 2023, country: "USA", director: "Steven Spielberg", review: "Strengths and weaknesses typical of Spielberg; close to his heart. Features inspired casting with David Lynch as John Ford.", source: "2023 Q1", isNew: true },
  { id: 163, title: "Broker", rating: 3.7, year: 2023, country: "South Korea", director: "Hirokazu Kore-eda", review: "Impeccably directed; ending too upbeat Hollywood-style but excellent for Shoplifters fans.", source: "2023 Q1", isNew: true },
  { id: 164, title: "Where is the Friend's House?", rating: 3.9, year: 1987, country: "Iran", director: "Abbas Kiarostami", review: "I had forgotten what it's like to be eight years old; perceptive observer of adults; requires patience.", source: "2023 Q1", isNew: false },
  { id: 165, title: "Amateur", rating: 3.8, year: 1994, country: "USA", director: "Hal Hartley", review: "Delightful absurdist comedy filmed with great skill; each actor is nearly perfect.", source: "2023 Q1", isNew: false },
  { id: 166, title: "The Spirit of the Beehive", rating: 3.8, year: 1973, country: "Spain", director: "", review: "Often has the feel of a classic silent film; favorite film about childhood and Spanish cinema.", source: "2023 Q1", isNew: false },
  { id: 167, title: "Traffic", rating: 3.8, year: 1971, country: "France", director: "Jacques Tati", review: "Less original than Playtime; masterpiece with humor centered around people, not architecture.", source: "2023 Q1", isNew: false },
  { id: 168, title: "Millennium Mambo", rating: 3.8, year: 2001, country: "Taiwan", director: "Hou Hsiao-hsien", review: "Great to see again; noticed director's amazing ability to get true to life performances.", source: "2023 Q1", isNew: false },
  { id: 169, title: "There Was a Father", rating: 3.8, year: 1942, country: "Japan", director: "Yasujiro Ozu", review: "Ozu films seem flat and unemotional, then somehow end up with overwhelming emotion.", source: "2023 Q1", isNew: false },
  { id: 170, title: "To Be or Not to Be", rating: 3.8, year: 1942, country: "USA", director: "Ernst Lubitsch", review: "One of Lubitsch's more entertaining comedies; Nazi era comedies might seem tasteless if made today.", source: "2023 Q1", isNew: false },

  // === 2022 Q4 ===
  { id: 171, title: "Decision to Leave", rating: 3.7, year: 2022, country: "South Korea", director: "Park Chan-wook", review: "Koreans excel at films straddling commercial and artistic lines. Consistently excellent filmmaking.", source: "2022 Q4", isNew: true },
  { id: 172, title: "Tar", rating: 3.6, year: 2022, country: "USA", director: "", review: "Intelligent film with entertaining first half resembling a documentary on orchestral music.", source: "2022 Q4", isNew: true },
  { id: 173, title: "Vesper", rating: 3.6, year: 2022, country: "Lithuania", director: "", review: "Surprisingly well-crafted post-apocalyptic vision.", source: "2022 Q4", isNew: true },
  { id: 174, title: "Babylon", rating: 1.5, year: 2022, country: "USA", director: "", review: "Three hours of extremely dumb hysteria. Really tiresome.", source: "2022 Q4", isNew: true },
  { id: 175, title: "Harakiri", rating: 3.9, year: 1962, country: "Japan", director: "", review: "A classic in every sense.", source: "2022 Q4", isNew: false },
  { id: 176, title: "Walkabout", rating: 3.8, year: 1971, country: "Australia", director: "Nicholas Roeg", review: "Style less impressive fifty years later, but story and restrained acting remain moving.", source: "2022 Q4", isNew: false },
  { id: 177, title: "Kwaidan", rating: 3.8, year: 1964, country: "Japan", director: "Masaki Kobayashi", review: "Art design and Toru Takemitsu soundtrack excellent. Mid-century modern sets work perfectly.", source: "2022 Q4", isNew: false },
  { id: 178, title: "The Flavor of Green Tea Over Rice", rating: 3.8, year: 1952, country: "Japan", director: "Yasujiro Ozu", review: "Late-night snack scene is sublimely satisfying, like a first date.", source: "2022 Q4", isNew: false },
  { id: 179, title: "The Earrings of Madame de...", rating: 3.8, year: 1953, country: "France", director: "Max Ophuls", review: "A classic. De Sica is a pretty good actor.", source: "2022 Q4", isNew: false },
  { id: 180, title: "Jeanne Dielman", rating: 3.8, year: 1975, country: "Belgium", director: "Chantal Akerman", review: "Most boring or greatest film ever made? Why not both? Appeals to intellectual cinephiles.", source: "2022 Q4", isNew: false },
  { id: 181, title: "Daisies", rating: 3.8, year: 1966, country: "Czech Republic", director: "", review: "Anarchic energy captures 1966 spirit wonderfully.", source: "2022 Q4", isNew: false },
  { id: 182, title: "Sweet Smell of Success", rating: 3.8, year: 1957, country: "USA", director: "", review: "Drenched in corruption, like Touch of Evil.", source: "2022 Q4", isNew: false },
  { id: 183, title: "Prisoner", rating: 1.5, year: 2013, country: "USA", director: "Denis Villeneuve", review: "Disappointing\u2014mean-spirited, bigoted, cliche-ridden. Felt need to shower after.", source: "2022 Q4", isNew: false },

  // === 2022 Q3 ===
  { id: 184, title: "Everything Everywhere All at Once", rating: 3.2, year: 2022, country: "USA", director: "", review: "Talented direction but excessive fighting scenes; too lengthy.", source: "2022 Q3", isNew: true },
  { id: 185, title: "Man of the West", rating: 3.8, year: 1958, country: "USA", director: "Anthony Mann", review: "Godard praised it; contains visceral intensity; masterpiece deserving recognition.", source: "2022 Q3", isNew: false },
  { id: 186, title: "Midnight Run", rating: 3.8, year: 1988, country: "USA", director: "", review: "De Niro and Grodin excel as ultimate buddy film; personal favorite comedy.", source: "2022 Q3", isNew: false },
  { id: 187, title: "Flowers of Shanghai", rating: 3.8, year: 1998, country: "Taiwan", director: "Hou Hsiao-hsien", review: "Gorgeous cinematography; makes Hollywood seem overwrought by comparison.", source: "2022 Q3", isNew: false },
  { id: 188, title: "INLAND EMPIRE", rating: 3.8, year: 2006, country: "USA", director: "David Lynch", review: "Violates storytelling rules but redeemed by engaging scenes; Laura Dern spectacular.", source: "2022 Q3", isNew: false },
  { id: 189, title: "Days of Being Wild", rating: 3.8, year: 1990, country: "Hong Kong", director: "Wong Kar-wai", review: "First of seven masterpieces; Christopher Doyle cinematography exemplary.", source: "2022 Q3", isNew: false },
  { id: 190, title: "Jules and Jim", rating: 3.8, year: 1962, country: "France", director: "Francois Truffaut", review: "French New Wave classic.", source: "2022 Q3", isNew: false },
  { id: 191, title: "Early Summer", rating: 3.8, year: 1951, country: "Japan", director: "Yasujiro Ozu", review: "Seeming simplicity masks depth; rewards careful attention.", source: "2022 Q3", isNew: false },
  { id: 192, title: "Fires of the Plain", rating: 3.8, year: 1959, country: "Japan", director: "", review: "Explores Japanese WWII casualties; bleakest film seen; should show war from losing perspective.", source: "2022 Q3", isNew: false },
  { id: 193, title: "Damnation", rating: 3.8, year: 1988, country: "Hungary", director: "Bela Tarr", review: "Ugliness looked beautiful; regarded as first masterpiece.", source: "2022 Q3", isNew: false },
  { id: 194, title: "The Fire Within", rating: 3.8, year: 1963, country: "France", director: "Louis Malle", review: "Existential wrestling; disturbing for ordinary viewer.", source: "2022 Q3", isNew: false },
  { id: 195, title: "Double Indemnity", rating: 3.8, year: 1944, country: "USA", director: "Billy Wilder", review: "A perfect film noir.", source: "2022 Q2", isNew: false },
  { id: 196, title: "Year of the Dragon", rating: 2.0, year: 1985, country: "USA", director: "", review: "Sometimes campy but takes itself seriously; Rourke unbearable.", source: "2022 Q3", isNew: false },
  { id: 197, title: "Father", rating: 1.6, year: 1988, country: "Japan", director: "", review: "Japan produces varied quality; this comedy warrants firing the Criterion programmer.", source: "2022 Q3", isNew: false },

  // === 2022 Q2 ===
  { id: 198, title: "Memoria", rating: 3.8, year: 2021, country: "Thailand", director: "Apichatpong Weerasethakul", review: "Extremely slow pace with highly rewarding scenes for the patient viewer and subtle humor.", source: "2022 Q2", isNew: true },
  { id: 199, title: "The Northman", rating: 2.7, year: 2022, country: "USA", director: "Robert Eggers", review: "The story wasn't very interesting; tough slog with uninspired cinematography.", source: "2022 Q2", isNew: true },
  { id: 200, title: "How Green Was My Valley", rating: 3.8, year: 1941, country: "USA", director: "John Ford", review: "Won Best Picture over Citizen Kane; Ford effectively combines art and crowd-pleasing.", source: "2022 Q2", isNew: false },
  { id: 201, title: "The Empire Strikes Back", rating: 3.8, year: 1981, country: "USA", director: "Irvin Kershner", review: "Holds up despite mediocre acting. Possibly best adolescent adventure movie ever made.", source: "2022 Q2", isNew: false },
  { id: 202, title: "The Samurai", rating: 3.8, year: 1967, country: "France", director: "Jean-Pierre Melville", review: "Stylish but unrealistic like superhero films, yet so much more beautiful. Delon's performance captivates.", source: "2022 Q2", isNew: false },
  { id: 203, title: "Alphaville", rating: 3.8, year: 1965, country: "France", director: "Jean-Luc Godard", review: "Uneven but with plenty of high points. Nostalgia for mid-century modern future aesthetic.", source: "2022 Q2", isNew: false },
  { id: 204, title: "Amarcord", rating: 2.8, year: 1973, country: "Italy", director: "Federico Fellini", review: "Perhaps Fellini's most overrated film; he seems to have lost his touch.", source: "2022 Q2", isNew: false },

  // === 2022 Q1 ===
  { id: 205, title: "The French Dispatch", rating: 3.7, year: 2021, country: "USA", director: "Wes Anderson", review: "Right now, Wes Anderson is the director I most look forward to seeing\u2014his visual imagination is off the charts.", source: "2022 Q1", isNew: true },
  { id: 206, title: "Chimes at Midnight", rating: 4.0, year: 1965, country: "USA", director: "Orson Welles", review: "A masterpiece on every level\u2014framing, lighting, editing, dialogue, acting.", source: "2022 Q1", isNew: false },
  { id: 207, title: "The Magnificent Ambersons", rating: 3.9, year: 1942, country: "USA", director: "Orson Welles", review: "Studio mutilation removed 50 minutes; surviving version resembles extended trailer of potential masterwork.", source: "2022 Q1", isNew: false },
  { id: 208, title: "The Element of Crime", rating: 3.8, year: 1984, country: "Denmark", director: "Lars von Trier", review: "Directorial debut demonstrates remarkable mastery; influenced by multiple sources without seeming derivative.", source: "2022 Q1", isNew: false },
  { id: 209, title: "Europa", rating: 3.8, year: 1991, country: "Denmark", director: "Lars von Trier", review: "Visionary experimentation creates breathtaking moments.", source: "2022 Q1", isNew: false },
  { id: 210, title: "Gates of Hell", rating: 3.8, year: 1953, country: "Japan", director: "", review: "Outstanding color cinematography rivals Black Narcissus; Japanese woodblock art influences visible.", source: "2022 Q1", isNew: false },
  { id: 211, title: "All About Eve", rating: 3.8, year: 1950, country: "USA", director: "", review: "Almost the definition of a classic Hollywood film.", source: "2022 Q1", isNew: false },
  { id: 212, title: "Le Doulos", rating: 3.8, year: 1962, country: "France", director: "Jean-Pierre Melville", review: "Melville's crime mastery evident throughout this exceptional noir.", source: "2022 Q1", isNew: false },
  { id: 213, title: "Baby Doll", rating: 3.8, year: 1956, country: "USA", director: "Elia Kazan", review: "Kazan-directed Tennessee Williams adaptation; dark comedy raises ethical questions.", source: "2022 Q1", isNew: false },
  { id: 214, title: "Juliet of the Spirits", rating: 3.8, year: 1965, country: "Italy", director: "Federico Fellini", review: "From the opening frames you are entranced by Fellini's inexhaustible visual invention.", source: "2022 Q1", isNew: false },
  { id: 215, title: "Laura", rating: 3.6, year: 1944, country: "USA", director: "", review: "1944 audiences would find mid-film plot twist genuinely shocking; classic noir.", source: "2022 Q1", isNew: false },

  // === Greatest Plot Ever / Q3 2025 ===
  { id: 216, title: "Once Upon a Time in the West", rating: 4.0, year: 1968, country: "USA", director: "Sergio Leone", review: "Greatest plot ever.", source: "2025 Q3", isNew: false },
  { id: 217, title: "Pandora's Box", rating: 3.9, year: 1929, country: "Germany", director: "G.W. Pabst", review: "", source: "2025 Q3", isNew: false },
  { id: 218, title: "The American Friend", rating: 3.9, year: 1977, country: "Germany", director: "Wim Wenders", review: "", source: "2025 Q3", isNew: false },
  { id: 219, title: "Secret Sunshine", rating: 3.9, year: 2007, country: "South Korea", director: "", review: "", source: "2025 Q3", isNew: false },
  { id: 220, title: "Touchez Pas au Grisbi", rating: 3.8, year: 1954, country: "France", director: "", review: "", source: "2025 Q3", isNew: false },
  { id: 221, title: "Werckmeister Harmonies", rating: 3.8, year: 2000, country: "Hungary", director: "Bela Tarr", review: "", source: "2025 Q3", isNew: false },
  { id: 222, title: "Grave of the Fireflies", rating: 3.8, year: 1988, country: "Japan", director: "", review: "", source: "2025 Q3", isNew: false },
  { id: 223, title: "Summer with Monika", rating: 3.8, year: 1953, country: "Sweden", director: "Ingmar Bergman", review: "", source: "2025 Q3", isNew: false },
  { id: 224, title: "The Virgin Spring", rating: 3.8, year: 1960, country: "Sweden", director: "Ingmar Bergman", review: "", source: "2025 Q3", isNew: false },
  { id: 225, title: "After Yang", rating: 3.8, year: 2022, country: "USA", director: "Kogonada", review: "Great beauty and subtlety with Ozu-influenced visual style.", source: "2025 Q3", isNew: true },
  { id: 226, title: "Ennio", rating: 3.8, year: 2022, country: "Italy", director: "", review: "Documentary about composer Morricone; first rate production quality.", source: "2025 Q3", isNew: true },

  // === Q3 2024 (Much Ado About Nothing) ===
  { id: 227, title: "A Short Story", rating: 3.7, year: 2024, country: "China", director: "Bi Gan", review: "14 minutes long surrealism exercise.", source: "2024 Q3", isNew: true },
  { id: 228, title: "The Delinquents", rating: 3.6, year: 2024, country: "Argentina", director: "", review: "Over 3 hours with sly humor and realistic feel.", source: "2024 Q3", isNew: true },
  { id: 229, title: "Passion", rating: 3.6, year: 2008, country: "Japan", director: "Ryusuke Hamaguchi", review: "Extremely impressive student film debut.", source: "2024 Q3", isNew: false },
  { id: 230, title: "Do Not Expect Too Much from the End of the World", rating: 3.5, year: 2024, country: "Romania", director: "", review: "Excellent black comedy after slow start.", source: "2024 Q3", isNew: true },
  { id: 231, title: "When a Woman Ascends the Stairs", rating: 3.8, year: 1960, country: "Japan", director: "Mikio Naruse", review: "Deeper and richer on second viewing.", source: "2024 Q3", isNew: false },
  { id: 232, title: "The Straight Story", rating: 3.8, year: 1999, country: "USA", director: "David Lynch", review: "Mesmerizing without surrealism; deeply personal.", source: "2024 Q3", isNew: false },
  { id: 233, title: "A Clockwork Orange", rating: 3.7, year: 1971, country: "UK", director: "Stanley Kubrick", review: "First half dated; still shows Kubrick's brilliance.", source: "2024 Q3", isNew: false },
  { id: 234, title: "John Wick", rating: 1.5, year: 2014, country: "USA", director: "", review: "One of worst films ever; pointless action.", source: "2024 Q3", isNew: false },

  // More from various posts
  { id: 235, title: "Megalopolis", rating: 3.0, year: 2024, country: "USA", director: "Francis Ford Coppola", review: "Barely worth watching despite ambitious flaws.", source: "2024 Q3", isNew: true },
  { id: 236, title: "Licorice Pizza", rating: 3.6, year: 2021, country: "USA", director: "P.T. Anderson", review: "Captures freedom of 1970s era.", source: "2024 Q3", isNew: false },
  { id: 237, title: "Wanda", rating: 2.7, year: 1970, country: "USA", director: "", review: "Sight and Sound rates among top 50 but it's not good in any discernible way.", source: "2022 Q4", isNew: false },
  { id: 238, title: "Weekend", rating: 2.2, year: 1967, country: "France", director: "Jean-Luc Godard", review: "Only supreme talent can make film this bad. Political satire ranges from lame to pathetic.", source: "2023 Q1", isNew: false },
  { id: 239, title: "Party Girl", rating: 1.8, year: 1995, country: "USA", director: "", review: "Boring comedy about a party girl that becomes a librarian.", source: "2023 Q1", isNew: false },
  { id: 240, title: "Ghost World", rating: 3.6, year: 2001, country: "USA", director: "", review: "Lead actress performance (Thora Birch) explains high rating. Features young Scarlett Johansson.", source: "2023 Q3", isNew: false },
  { id: 241, title: "Something Wild", rating: 3.6, year: 1986, country: "USA", director: "", review: "1980s was decade for films about dangerous women. Great soundtrack.", source: "2023 Q3", isNew: false },
  { id: 242, title: "Desperately Seeking Susan", rating: 3.6, year: 1985, country: "USA", director: "", review: "Still quite entertaining after 38 years. Madonna surprisingly good.", source: "2023 Q3", isNew: false },
  { id: 243, title: "Germany, Year Zero", rating: 3.6, year: 1948, country: "Germany", director: "Roberto Rossellini", review: "Great film title and exceedingly interesting document.", source: "2023 Q3", isNew: false },
  { id: 244, title: "Anatomy of a Murder", rating: 3.5, year: 1959, country: "USA", director: "", review: "Courtroom dramas move at leisurely pace. Great jazz soundtrack.", source: "2023 Q3", isNew: false },

  // High-rated films from 2022 Q1
  { id: 245, title: "Citizenfour", rating: 3.7, year: 2014, country: "USA", director: "", review: "Snowden revelations gain poignancy; mild-mannered Ed Snowden is far more heroic than those superheroes.", source: "2022 Q1", isNew: false },
  { id: 246, title: "Odds Against Tomorrow", rating: 3.7, year: 1959, country: "USA", director: "", review: "Melville admiration evident; noir exemplifies his stylistic preferences.", source: "2022 Q1", isNew: false },
  { id: 247, title: "5 Fingers", rating: 3.6, year: 1952, country: "UK", director: "", review: "Is there anyone more amoral than a film buff? Viewer complicity in rooting for Nazi collaborator raises uncomfortable questions.", source: "2022 Q1", isNew: false },
  { id: 248, title: "All That Heaven Allows", rating: 3.6, year: 1955, country: "USA", director: "Douglas Sirk", review: "Sirk melodrama proves more likeable than artistically superior alternatives.", source: "2022 Q1", isNew: false },

  // More 2022 Q3 highlights
  { id: 249, title: "Destry Rides Again", rating: 3.7, year: 1939, country: "USA", director: "", review: "Launched Stewart stardom; relaunched Dietrich career.", source: "2022 Q3", isNew: false },
  { id: 250, title: "The Sound of the Mountain", rating: 3.7, year: 1954, country: "Japan", director: "Mikio Naruse", review: "Based on Kawabata novel; stars Setsuko Hara.", source: "2022 Q3", isNew: false },
  { id: 251, title: "Air Doll", rating: 3.7, year: 2009, country: "Japan", director: "Hirokazu Kore-eda", review: "Cinematography by Mark Lee; underrated gem.", source: "2022 Q3", isNew: false },
  { id: 252, title: "The Thin Man", rating: 3.6, year: 1934, country: "USA", director: "", review: "Highly entertaining 1930s Hollywood; talkie perfection decade.", source: "2022 Q3", isNew: false },

  // Additional 2022 Q4 highlights
  { id: 253, title: "The Postman Always Rings Twice", rating: 3.7, year: 1946, country: "USA", director: "", review: "Greatness due to James Cain story and Lana Turner's face.", source: "2022 Q4", isNew: false },
  { id: 254, title: "Vive L'Amour", rating: 3.7, year: 1994, country: "Taiwan", director: "Tsai Ming-liang", review: "Hard to pin down. Sad story of loneliness and sly comedy simultaneously.", source: "2022 Q4", isNew: false },
  { id: 255, title: "Pepe le Moko", rating: 3.7, year: 1937, country: "France", director: "", review: "Almost perfectly defines romantic gangster genre.", source: "2022 Q4", isNew: false },

  // 2023 Q3 additional
  { id: 256, title: "Floating Weeds", rating: 3.7, year: 1959, country: "Japan", director: "Yasujiro Ozu", review: "Ozu remade the 1934 version.", source: "2023 Q3", isNew: false },
  { id: 257, title: "Z", rating: 3.7, year: 1969, country: "France", director: "", review: "Powerful and highly influential. Essential for understanding fascism sociology.", source: "2023 Q3", isNew: false },
  { id: 258, title: "Dersu Uzala", rating: 3.7, year: 1975, country: "Russia", director: "Akira Kurosawa", review: "First half brilliant\u2014second half merely good. Kurosawa most Western of great Japanese directors.", source: "2023 Q3", isNew: false },
  { id: 259, title: "Henry Fool", rating: 3.7, year: 1997, country: "USA", director: "Hal Hartley", review: "Excellent independent film from the 1990s.", source: "2023 Q3", isNew: false },
  { id: 260, title: "Suzhou River", rating: 3.6, year: 2000, country: "China", director: "", review: "Basically a Chinese version of Vertigo. Shows grungy Shanghai in 2000.", source: "2023 Q3", isNew: false },

  // 2022 Q2 additional
  { id: 261, title: "The Hole", rating: 3.7, year: 1998, country: "Taiwan", director: "Tsai Ming-liang", review: "Works on many different levels as black comedy, dystopia, musical, and surrealism.", source: "2022 Q2", isNew: false },
  { id: 262, title: "Belle de Jour", rating: 3.6, year: 1967, country: "France", director: "Luis Bunuel", review: "Made Catherine Deneuve a star; expertly crafted.", source: "2022 Q2", isNew: false },
  { id: 263, title: "The Last Picture Show", rating: 3.6, year: 1971, country: "USA", director: "Peter Bogdanovich", review: "Seemed impressive in 1971; impact diminished as its best features were imitated.", source: "2022 Q2", isNew: false },
  { id: 264, title: "The Lovers", rating: 3.6, year: 1958, country: "France", director: "Louis Malle", review: "Malle's second film made Jeanne Moreau a star; lightness epitomizes French cinema appeal.", source: "2022 Q2", isNew: false },
  { id: 265, title: "La Piscine", rating: 3.5, year: 1969, country: "France", director: "", review: "Very influential film. Superficial in the best sense.", source: "2022 Q2", isNew: false },
  { id: 266, title: "High Sierra", rating: 3.5, year: 1941, country: "USA", director: "Raoul Walsh", review: "One of Bogart's first starring roles, which is all you need to know.", source: "2022 Q2", isNew: false },
];

// Helper: get unique values
export function getCountries(): string[] {
  const countries = new Set<string>();
  reviews.forEach(r => {
    r.country.split('/').forEach(c => countries.add(c.trim()));
  });
  return Array.from(countries).sort();
}

export function getDecades(): number[] {
  const decades = new Set<number>();
  reviews.forEach(r => {
    if (r.year) decades.add(Math.floor(r.year / 10) * 10);
  });
  return Array.from(decades).sort();
}

export function getSources(): string[] {
  const sources = new Set<string>();
  reviews.forEach(r => sources.add(r.source));
  return Array.from(sources).sort();
}

export function getDirectors(): string[] {
  const dirs = new Set<string>();
  reviews.forEach(r => {
    if (r.director) dirs.add(r.director);
  });
  return Array.from(dirs).sort();
}
