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
  { id: 1, title: "Sirat", rating: 3.8, year: 2026, country: "Spain/Morocco", director: "", review: "This is far more impressive (both visually and sonically) on the big screen. Must see for fans of the old French film Wages of Fear (and the equally good remake Sorcerer.) Don't expect a Hollywood film—this is one of the most realistic depictions of fatherhood that I've ever seen.", source: "2026 Q1", isNew: true },
  { id: 2, title: "Kokuho", rating: 3.8, year: 2026, country: "Japan", director: "", review: "Highest-grossing live-action Japanese film. Kabuki sequences described as revelatory; effectively uses cinematography to explain the art form.", source: "2026 Q1", isNew: true },
  { id: 3, title: "No Other Choice", rating: 3.7, year: 2026, country: "South Korea", director: "", review: "Like many Korean films, Park's amusing black comedy finds humor in the willingness to push scenes to the absolute limit.", source: "2026 Q1", isNew: true },
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
  { id: 20, title: "Resurrection", rating: 4.0, year: 2025, country: "China", director: "Bi Gan", review: "Finally, a new film lived up to my expectations. I'm not quite sure what this film is about, as I was so busy being astonished by the cinematography that I missed many of the subtitles...Bi Gan seems to have been influenced by everything from Méliès' silent film to Joseph Cornell's magic boxes to Hou Hsiao-hsien's Three Times. It's so gratifying to see a director give us something new. This might end up being my favorite film of the decade.", source: "2025 Q4", isNew: true },
  { id: 21, title: "Sentimental Value", rating: 3.8, year: 2025, country: "Norway", director: "", review: "As with many family dramas it's all about the acting, which in this case is quite good.", source: "2025 Q4", isNew: true },
  { id: 22, title: "The Secret Agent", rating: 3.7, year: 2025, country: "Brazil", director: "", review: "The plot didn't seem all that plausible, but I enjoyed the film's leisurely pace and the portrayal of life in Brazil's northeast back in 1977.", source: "2025 Q4", isNew: true },
  { id: 23, title: "One Battle After Another", rating: 3.7, year: 2025, country: "USA", director: "", review: "Probably the most entertaining film of 2025, it borrowed a great deal from various Kubrick films...I especially appreciated the lack of CGI. If it falls a bit short of the great Kubrick films, it's because in the end it is just one damn scene after another.", source: "2025 Q4", isNew: true },
  { id: 24, title: "Left-Handed Girl", rating: 3.0, year: 2025, country: "Taiwan", director: "", review: "Glitzy Taiwanese dramedy that doesn't really offer anything new. It has some entertaining scenes, but not enough to justify its nearly 2-hour length...Neither fish nor fowl.", source: "2025 Q4", isNew: true },
  { id: 25, title: "An Elephant Sitting Still", rating: 4.0, year: 2019, country: "China", director: "Hu Bo", review: "One masterpiece shot after another—one of my all-time favorite Chinese films...The director Hu Bo is clearly one of the giants of 21st century cinema, based solely on this one film.", source: "2025 Q4", isNew: false },
  { id: 26, title: "Paris, Texas", rating: 3.9, year: 1984, country: "USA", director: "Wim Wenders", review: "The first 90 minutes are very good, but nothing exceptional. The final hour contains some of the most sublime filmmaking in the history of cinema.", source: "2025 Q4", isNew: false },
  { id: 27, title: "The Silence", rating: 3.8, year: 1963, country: "Sweden", director: "Ingmar Bergman", review: "From the perspective of 2025, there's a freshness to the first half of the film—as it reflects an era when directors were unshackled, able to explore many previous taboo topics.", source: "2025 Q4", isNew: false },
  { id: 28, title: "Lessons of Darkness", rating: 3.8, year: 1992, country: "Germany", director: "Werner Herzog", review: "Only 54 minutes long, the film is packed with sublime images. Instead of dialogue, there is ominous music composed by people like Wagner and Mahler.", source: "2025 Q4", isNew: false },
  { id: 29, title: "Breathless", rating: 3.8, year: 1960, country: "France", director: "Jean-Luc Godard", review: "My rating is an average of 4.0 for invention and 3.5 for entertainment value...it's actually a film about film.", source: "2025 Q4", isNew: false },
  { id: 30, title: "Undercurrent", rating: 3.7, year: 1956, country: "Japan", director: "Yoshimura", review: "Early color film with truly beautiful images essential for Japanese cinema fans.", source: "2025 Q4", isNew: false },
  { id: 31, title: "Scarface", rating: 3.7, year: 1932, country: "USA", director: "Howard Hawks", review: "It's all here---Hawks wrote the book on gangster films. It's all about the people, the faces, the poses, the gestures...the final portion contains some truly classic scenes.", source: "2025 Q4", isNew: false },
  { id: 32, title: "The Barbary Coast", rating: 3.6, year: 1935, country: "USA", director: "Howard Hawks", review: "Even Howard Hawks's weaker films are quite entertaining...He is the most conventional and straightforward of America's great directors.", source: "2025 Q4", isNew: false },
  { id: 33, title: "Safe", rating: 3.5, year: 1995, country: "USA", director: "Todd Haynes", review: "A Village Voice poll of 50 critics named this the best film of the 1990s...I don't think it has aged all that well. Thirty years later, some of the scenes seem a bit too heavy handed, too didactic.", source: "2025 Q4", isNew: false },
  { id: 34, title: "Barton Fink", rating: 3.4, year: 1991, country: "USA", director: "Coen Brothers", review: "They had no story without jazzing it up with some improbable plot twists...a classic example of a film that is much less than the sum of its parts---but has some really excellent parts.", source: "2025 Q4", isNew: false },
  { id: 35, title: "A Better Tomorrow", rating: 3.4, year: 1986, country: "Hong Kong", director: "John Woo", review: "Hard to believe it's been nearly 40 years---much of the film has not aged well. Still, there are a few scenes that remind me of why this film thrilled audiences back in 1986.", source: "2025 Q4", isNew: false },
  { id: 36, title: "Framed", rating: 3.4, year: 1947, country: "USA", director: "", review: "Despite his bland exterior, Glenn Ford is nearly perfect when he plays this sort of role—an average guy who gets caught up in trouble...It's well short of the classic noirs, but the film has an interesting plot.", source: "2025 Q4", isNew: false },
  { id: 37, title: "La Collectionneuse", rating: 3.3, year: 1967, country: "France", director: "Eric Rohmer", review: "Rohmer films often make me feel like a bit of a simpleton...the last portion of the film had enough interesting ideas presented in a witty style to keep me engaged.", source: "2025 Q4", isNew: false },
  { id: 38, title: "My Son, My Son, What Have Ye Done?", rating: 3.2, year: 2009, country: "USA", director: "Werner Herzog", review: "Roughly what you'd expect from a film directed by Werner Herzog and produced by David Lynch...I enjoyed the dark comedy, especially from the supporting actors.", source: "2025 Q4", isNew: false },
  { id: 39, title: "My Blueberry Nights", rating: 3.2, year: 2008, country: "USA", director: "Wong Kar-wai", review: "After 7 straight outstanding films, Wong Kar Wai stumbles in an attempt to bring his style to America. Visually appealing but a weak screenplay.", source: "2025 Q4", isNew: false },
  { id: 40, title: "Love Under the Crucifix", rating: 3.2, year: 1962, country: "Japan", director: "", review: "Heavy-handed melodrama with attractive cinematography offering insights into non-Christian perceptions of Christianity.", source: "2025 Q4", isNew: false },
  { id: 41, title: "A Single Man", rating: 3.1, year: 2009, country: "USA", director: "", review: "Earnest film about gay man in 1962 America. Avoids edgy and controversial scenes, which might have been a mistake.", source: "2025 Q4", isNew: false },
  { id: 42, title: "Damsels in Distress", rating: 3.1, year: 2011, country: "USA", director: "Whit Stillman", review: "Whit Stillman's weakest film—making fun of dumb people is not his forte.", source: "2025 Q4", isNew: false },
  { id: 43, title: "Once a Thief", rating: 3.0, year: 1991, country: "Hong Kong", director: "John Woo", review: "Enjoyable when first viewed but hasn't aged well as Woo's action innovations have been widely copied.", source: "2025 Q4", isNew: false },
  { id: 44, title: "Maps to the Stars", rating: 3.0, year: 2014, country: "USA", director: "David Cronenberg", review: "When satire is motivated by hatred, it can suffer from a certain lack of nuance.", source: "2025 Q4", isNew: false },
  { id: 45, title: "A Rainy Day in New York", rating: 3.0, year: 2020, country: "USA", director: "Woody Allen", review: "Recent Woody Allen films all seem about the same to me—not bad, but not good either.", source: "2025 Q4", isNew: false },
  { id: 46, title: "Toute une Nuit", rating: 3.0, year: 1982, country: "Belgium", director: "Chantal Akerman", review: "It's very hard to make a satisfying feature film without a unifying narrative thread.", source: "2025 Q4", isNew: false },
  { id: 47, title: "Body of Evidence", rating: 2.9, year: 1993, country: "USA", director: "", review: "1990s pre-internet eroticism film. Recommended only for campy appeal, not as great art.", source: "2025 Q4", isNew: false },
  { id: 48, title: "Heat Wave", rating: 2.8, year: 1991, country: "Japan", director: "", review: "Nice visuals undermined by mediocre acting and an even worse screenplay.", source: "2025 Q4", isNew: false },
  { id: 49, title: "The Lost Weekend: A Love Story", rating: 2.7, year: 2023, country: "USA", director: "", review: "Documentary on Lennon affair raises ethical gossip concerns.", source: "2025 Q4", isNew: false },
  { id: 50, title: "Fata Morgana", rating: 2.5, year: 1971, country: "Germany", director: "Werner Herzog", review: "Almost everything here is done more effectively in subsequent films...and it hasn't aged well.", source: "2025 Q4", isNew: false },

  // === 2025 Q1 (Substack) ===
  { id: 51, title: "The Shadowless Tower", rating: 3.6, year: 2024, country: "China", director: "", review: "Great visuals, sly humor, and a very perceptive look at the challenges of being middle aged.", source: "2025 Q1", isNew: true },
  { id: 52, title: "The Missing Pieces", rating: 3.6, year: 2024, country: "USA", director: "David Lynch", review: "With no plot to focus on, you really notice Lynch's ability to create a surreal mood.", source: "2025 Q1", isNew: true },
  { id: 53, title: "The Brutalist", rating: 3.5, year: 2024, country: "USA", director: "", review: "The film doesn't insult your intelligence and there are some intriguing ideas, but also too many Hollywood clichés.", source: "2025 Q1", isNew: true },
  { id: 54, title: "Black Bag", rating: 3.3, year: 2024, country: "USA", director: "Steven Soderbergh", review: "Intelligent and well crafted, but ultimately quite forgettable. The problem is a lack of ambition.", source: "2025 Q1", isNew: true },
  { id: 55, title: "Becoming Led Zeppelin", rating: 3.0, year: 2024, country: "UK", director: "", review: "Bland documentary covering early career; captures 1968 cultural change effectively.", source: "2025 Q1", isNew: true },
  { id: 56, title: "Drive-Away Dolls", rating: 2.9, year: 2024, country: "USA", director: "Ethan Coen", review: "Tarantino-style lesbian comedy/detective film; first of proposed trilogy.", source: "2025 Q1", isNew: true },
  { id: 57, title: "Room 666/Room 999", rating: 2.8, year: 2022, country: "France", director: "", review: "Documentaries questioning cinema's viability; explores how specific film genres have finite lifespans.", source: "2025 Q1", isNew: true },
  { id: 58, title: "Babygirl", rating: 2.8, year: 2024, country: "USA", director: "", review: "Modern Hollywood style with loud music and glitzy images; fake characters undermine viewer engagement.", source: "2025 Q1", isNew: true },
  { id: 59, title: "The Wailing", rating: 3.8, year: 2016, country: "South Korea", director: "", review: "Great horror film, although I didn't like it quite as much the second time around.", source: "2025 Q1", isNew: false },
  { id: 60, title: "Desire", rating: 3.8, year: 1936, country: "USA", director: "Frank Borzage", review: "Combines the best qualities of director Frank Borzage (romance) and Lubitsch (humor).", source: "2025 Q1", isNew: false },
  { id: 61, title: "The Wild Pear Tree", rating: 3.8, year: 2019, country: "Turkey", director: "Nuri Bilge Ceylan", review: "As I get older, my appreciation for Ceylan's films steadily increases.", source: "2025 Q1", isNew: false },
  { id: 62, title: "The End of Violence", rating: 3.7, year: 1997, country: "USA", director: "Wim Wenders", review: "Wim Wenders knows how to push all the pleasure buttons in a movie lover's brain.", source: "2025 Q1", isNew: false },
  { id: 63, title: "Brothers and Sisters of the Toda Family", rating: 3.7, year: 1941, country: "Japan", director: "Yasujiro Ozu", review: "Warm-up for Tokyo Story, one of the earliest Ozu films to show his mature style.", source: "2025 Q1", isNew: false },
  { id: 64, title: "If I Should Die Before I Wake", rating: 3.7, year: 1952, country: "Argentina", director: "", review: "Must see for fans of Night of the Hunter; Argentine noir with suspenseful narrative.", source: "2025 Q1", isNew: false },
  { id: 65, title: "Ladies of Leisure", rating: 3.7, year: 1930, country: "USA", director: "Frank Capra", review: "Early Capra/Stanwyck collaboration greatly underrated by critics.", source: "2025 Q1", isNew: false },
  { id: 66, title: "Thirty Day Princess", rating: 3.6, year: 1934, country: "USA", director: "", review: "Charming romantic comedy with Cary Grant; Sylvia Sydney delivers standout performance.", source: "2025 Q1", isNew: false },
  { id: 67, title: "The Black Vampire", rating: 3.6, year: 1952, country: "Argentina", director: "", review: "Remake of classic Fritz Lang film 'M', this one is also very good.", source: "2025 Q1", isNew: false },
  { id: 68, title: "The Bitter Stems", rating: 3.6, year: 1956, country: "Argentina", director: "", review: "The first half is just OK, but the second half of this noir is excellent.", source: "2025 Q1", isNew: false },
  { id: 69, title: "Brighton Rock", rating: 3.6, year: 1948, country: "UK", director: "", review: "Classic British noir based on a Graham Green novel.", source: "2025 Q1", isNew: false },
  { id: 70, title: "Human Desire", rating: 3.6, year: 1954, country: "USA", director: "Fritz Lang", review: "Railroad fans will not want to miss this noir, directed by Fritz Lang.", source: "2025 Q1", isNew: false },
  { id: 71, title: "Don't Bother to Knock", rating: 3.5, year: 1952, country: "USA", director: "", review: "Marilyn Monroe is one of America's greatest actresses, her performance towers over everyone.", source: "2025 Q1", isNew: false },
  { id: 72, title: "Never Open That Door", rating: 3.5, year: 1952, country: "Argentina", director: "", review: "Two short films by same director; first rates 3.4, second rates 3.6.", source: "2025 Q1", isNew: false },
  { id: 73, title: "Drunk", rating: 3.5, year: 2020, country: "Denmark", director: "Thomas Vinterberg", review: "Love letter to drunkenness is a lot of fun if you don't take it too seriously.", source: "2025 Q1", isNew: false },
  { id: 74, title: "Il Grido", rating: 3.4, year: 1957, country: "Italy", director: "Michelangelo Antonioni", review: "Antonioni went out of his way to make the Po valley look bleak and desolate.", source: "2025 Q1", isNew: false },
  { id: 75, title: "Masculine-Feminine", rating: 3.4, year: 1966, country: "France", director: "Jean-Luc Godard", review: "Seems a bit more superficial than his previous films.", source: "2025 Q1", isNew: false },
  { id: 76, title: "The Bride Wore Black", rating: 3.4, year: 1969, country: "France", director: "Francois Truffaut", review: "Truffaut imitates Hitchcock...As an exercise in style, quite well done.", source: "2025 Q1", isNew: false },
  { id: 77, title: "Forbidden", rating: 3.3, year: 1932, country: "USA", director: "Frank Capra", review: "Capra/Stanwyck collaboration; strong opening undermined by melodrama that hasn't aged gracefully.", source: "2025 Q1", isNew: false },
  { id: 78, title: "Shockproof", rating: 3.3, year: 1949, country: "USA", director: "Douglas Sirk", review: "Sirk melodrama with Fuller screenplay; wooden acting/dialogue; improves when couple flees.", source: "2025 Q1", isNew: false },
  { id: 79, title: "The Beast Must Die", rating: 3.2, year: 1952, country: "Argentina", director: "", review: "Directed by The Black Vampire filmmaker; plot-driven; visually less interesting.", source: "2025 Q1", isNew: false },
  { id: 80, title: "Bluebeard's 8th Wife", rating: 3.2, year: 1938, country: "USA", director: "Ernst Lubitsch", review: "Lubitsch/Wilder collaboration disappoints; Gary Cooper unconvincing as serial husband.", source: "2025 Q1", isNew: false },
  { id: 81, title: "Sapphire", rating: 3.2, year: 1959, country: "UK", director: "", review: "Early color film; examines British racial anxieties; more valuable historically than procedurally.", source: "2025 Q1", isNew: false },
  { id: 82, title: "Say Anything", rating: 3.0, year: 1989, country: "USA", director: "", review: "Just barely watchable, thanks to John Cusack's acting and Peter Gabriel's music.", source: "2025 Q1", isNew: false },
  { id: 83, title: "Dead Calm", rating: 2.7, year: 1989, country: "Australia", director: "", review: "Good acting cannot overcome a mediocre director and obviously contrived story.", source: "2025 Q1", isNew: false },

  // === 2024 Q4 (Substack) ===
  { id: 84, title: "Her Story", rating: 3.6, year: 2024, country: "China", director: "", review: "Crowd-pleasing comedy/drama takes some obvious jabs at the Xi Jinping administration.", source: "2024 Q4", isNew: true },
  { id: 85, title: "Blitz", rating: 3.6, year: 2024, country: "UK", director: "", review: "The style is more like Titanic, in the sense that it combines an impressively vivid recreation of the past with a powerful drama.", source: "2024 Q4", isNew: true },
  { id: 86, title: "Juror #2", rating: 3.4, year: 2024, country: "USA", director: "Clint Eastwood", review: "Clint Eastwood is especially good at exposing difficult moral dilemmas, such as the competing duties to family and the broader society.", source: "2024 Q4", isNew: true },
  { id: 87, title: "Fremont", rating: 3.2, year: 2024, country: "USA", director: "", review: "Minimalist dry comedy in the style of Kaurismaki about Afghan immigrant writing fortune cookies.", source: "2024 Q4", isNew: true },
  { id: 88, title: "A Complete Unknown", rating: 3.0, year: 2024, country: "USA", director: "", review: "Too straightforward, too paint by numbers...Timothee Chalamet's performance is too one dimensional.", source: "2024 Q4", isNew: true },
  { id: 89, title: "Anora", rating: 3.0, year: 2024, country: "USA", director: "", review: "The film seemed way too long, especially given the formulaic story. The 'surprise' ending was clearly telegraphed.", source: "2024 Q4", isNew: true },
  { id: 90, title: "So Long, My Son", rating: 3.8, year: 2019, country: "China", director: "", review: "This near-perfect film reminded me of one of those epic Taiwanese family dramas.", source: "2024 Q4", isNew: false },
  { id: 91, title: "Gilda", rating: 3.8, year: 1946, country: "USA", director: "", review: "Rita Hayworth has one of the greatest one-word lines in cinema history: Me?", source: "2024 Q4", isNew: false },
  { id: 92, title: "The House That Jack Built", rating: 3.7, year: 2018, country: "USA", director: "Lars von Trier", review: "Lars von Trier is an exceptionally talented director. I just wish he'd apply his talents to more appealing topics.", source: "2024 Q4", isNew: false },
  { id: 93, title: "La Prisonniere", rating: 3.6, year: 1968, country: "France", director: "Clouzot", review: "Voyeurism themes remain engaging; psychedelic ending still impressive.", source: "2024 Q4", isNew: false },
  { id: 94, title: "Le Petit Soldat", rating: 3.5, year: 1963, country: "France", director: "Jean-Luc Godard", review: "Godard's camera falls in love with Anna Karina in her first film (as did Godard himself).", source: "2024 Q4", isNew: false },
  { id: 95, title: "Vanilla Sky", rating: 3.5, year: 2001, country: "USA", director: "Cameron Crowe", review: "It's not a Michelin-starred meal; it's a box full of various tasty chocolates.", source: "2024 Q4", isNew: false },
  { id: 96, title: "Murder By Contract", rating: 3.4, year: 1957, country: "USA", director: "", review: "You can see why Scorsese praised this engrossing noir; it clearly influenced films such as Taxi Driver.", source: "2024 Q4", isNew: false },
  { id: 97, title: "Sanshiro Sugata", rating: 3.4, year: 1943, country: "Japan", director: "Akira Kurosawa", review: "First film shows Kurosawa's signature technique; censored by Japanese officials.", source: "2024 Q4", isNew: false },
  { id: 98, title: "Carnival of Souls", rating: 3.4, year: 1962, country: "USA", director: "", review: "Blends 1950s horror with Antonioni-style architecture; influenced by Psycho.", source: "2024 Q4", isNew: false },
  { id: 99, title: "Sincere Heart", rating: 3.4, year: 1953, country: "Japan", director: "", review: "Simple, sentimental; understated acting; visual purity creates emotional impact.", source: "2024 Q4", isNew: false },
  { id: 100, title: "Audition", rating: 3.2, year: 1999, country: "Japan", director: "", review: "It is skillfully made (Tarantino loves it), but I increasingly detest scenes of torture.", source: "2024 Q4", isNew: false },

  // === 2024 Q2 ===
  { id: 101, title: "About Dry Grasses", rating: 3.9, year: 2024, country: "Turkey", director: "Nuri Bilge Ceylan", review: "This is my favorite film directed by Ceylan, and that's high praise. At times it feels like a long Russian novel. Engrossing from beginning to end, despite its 3¼ hour length.", source: "2024 Q2", isNew: true },
  { id: 102, title: "Evil Does Not Exist", rating: 3.7, year: 2024, country: "Japan", director: "", review: "This is turning out to be an outstanding year for Japanese films. As is so often the case with films from Asia, it begs to be seen on the big screen.", source: "2024 Q2", isNew: true },
  { id: 103, title: "The Thief Collector", rating: 3.6, year: 2024, country: "USA", director: "", review: "This documentary on a pair of art thieves is extremely enjoyable, despite a somewhat clumsy execution in places. Surprising revelations keep popping up throughout its 100-minute running time.", source: "2024 Q2", isNew: true },
  { id: 104, title: "Hit Man", rating: 3.5, year: 2024, country: "USA", director: "Richard Linklater", review: "Highly entertaining due to its killer plot. So why not a higher rating? I was disappointed that Linklater did so little with the plot—much of the execution (not all) is fairly bland.", source: "2024 Q2", isNew: true },
  { id: 105, title: "Fallen Leaves", rating: 3.4, year: 2024, country: "Finland", director: "Aki Kaurismaki", review: "A characteristic Kaurismaki film. Like Wes Anderson, his films have a certain look and a sly sense of humor. Like Ozu, he makes the same film over and over again.", source: "2024 Q2", isNew: true },
  { id: 106, title: "Challengers", rating: 2.6, year: 2024, country: "USA", director: "", review: "Drove 30 minutes to the theater. Sat through 15 minutes of commercials and 15 more of loud in-your-face trailers. Then within 60 seconds I knew I had picked the wrong film.", source: "2024 Q2", isNew: true },
  { id: 107, title: "Identification of a Woman", rating: 3.8, year: 1982, country: "Italy", director: "Michelangelo Antonioni", review: "Critics often point out various flaws in Antonioni films, but I'd rather focus what he does so well. He's one of those directors that appeal to serious film buffs.", source: "2024 Q2", isNew: false },
  { id: 108, title: "State and Main", rating: 3.6, year: 2000, country: "USA", director: "David Mamet", review: "Not quite top level Mamet, but consistently entertaining and full of great actors. Rebecca Pidgeon is especially outstanding, overshadowing even the great Philip Hoffman.", source: "2024 Q2", isNew: false },
  { id: 109, title: "Where the Sidewalk Ends", rating: 3.6, year: 1950, country: "USA", director: "", review: "Satisfying noir, though below 1950's greatest classics.", source: "2024 Q2", isNew: false },
  { id: 110, title: "Once Upon a Time in America", rating: 3.4, year: 1984, country: "USA", director: "Sergio Leone", review: "How does one rate this glorious sprawling mess? Leone clearly put his heart into this nearly 4-hour spaghetti Godfather, and there are some marvelous sequences.", source: "2024 Q2", isNew: false },
  { id: 111, title: "Following", rating: 3.4, year: 1998, country: "UK", director: "Christopher Nolan", review: "I had thought Momento was Christopher Nolan's first film, but this engrossing low budget ($6000!!) B&W noir came even earlier.", source: "2024 Q2", isNew: false },

  // === 2024 Q1 ===
  { id: 112, title: "Monster", rating: 3.9, year: 2024, country: "Japan", director: "Hirokazu Kore-eda", review: "Kore-eda's best work since Nobody Knows, and one of the best films of the past decade. Every single aspect of the filmmaking is first class, including screenplay, acting, cinematography, sound, etc.", source: "2024 Q1", isNew: true },
  { id: 113, title: "Anselm", rating: 3.8, year: 2024, country: "Germany", director: "Wim Wenders", review: "An outstanding art documentary, directed by Wim Wenders. My only complaint is that I would have liked to see more on the exhibition in the Scuola Grande di San Rocco.", source: "2024 Q1", isNew: true },
  { id: 114, title: "In the Court of the Crimson King", rating: 3.7, year: 2024, country: "UK", director: "", review: "In some ways, this is better than the Anselm documentary. But I like Anselm better as an artist, so I rate that film higher. There are some very funny sequences, as well as some deeply moving ones.", source: "2024 Q1", isNew: true },
  { id: 115, title: "Perfect Days", rating: 3.7, year: 2024, country: "Japan", director: "Wim Wenders", review: "As I get older, I increasingly appreciate this sort of minimalist film. My only reservation is that at times I felt like the film was more about Wim Wender's impeccable taste in pop music than the story he was filming.", source: "2024 Q1", isNew: true },
  { id: 116, title: "The Movie Emperor", rating: 3.4, year: 2024, country: "Hong Kong", director: "", review: "Effective comedy addressing contemporary themes.", source: "2024 Q1", isNew: true },
  { id: 117, title: "Oppenheimer", rating: 3.3, year: 2024, country: "USA", director: "Christopher Nolan", review: "Nolan's an excellent sci-fi director, but real world science is not his forte. The visuals are fine, but didactic screenplay is tiresome.", source: "2024 Q1", isNew: true },
  { id: 118, title: "Dune 2", rating: 3.3, year: 2024, country: "USA", director: "Denis Villeneuve", review: "Visually impressive on occasion, but somewhat inert—lacking narrative momentum. I can't imagine anyone wishing it to be longer.", source: "2024 Q1", isNew: true },
  { id: 119, title: "Nostalghia", rating: 3.9, year: 1983, country: "Russia", director: "Andrei Tarkovsky", review: "It was a privilege to see a restored version of this on the big screen. The first half in particular had one stunning image after another.", source: "2024 Q1", isNew: false },
  { id: 120, title: "The Idiot", rating: 3.8, year: 1951, country: "Japan", director: "Akira Kurosawa", review: "Who knows how good this would have been if 100 minutes had not been cut out by the studio (and lost forever.) It's right up there with the butchering of The Magnificent Ambersons as one of the great artistic crimes of the 20th century.", source: "2024 Q1", isNew: false },
  { id: 121, title: "The Munekata Sisters", rating: 3.7, year: 1950, country: "Japan", director: "Yasujiro Ozu", review: "Characteristic Ozu film from start of his greatest period.", source: "2024 Q1", isNew: false },
  { id: 122, title: "Betty Blue", rating: 3.7, year: 1986, country: "France", director: "", review: "If Heraclitus were still alive, he'd say that no man watches the same film twice. In 1986, I thought Betty was the central character. Now I realize it was actually Zorg, who is the heart of this fairy tale for adults.", source: "2024 Q1", isNew: false },
  { id: 123, title: "The Other Side of Hope", rating: 3.6, year: 2017, country: "Finland", director: "Aki Kaurismaki", review: "Like many Kaurismaki films, much of the humor is rather subtle. But the scene where the Finnish restaurant adopts a sushi menu is one of the laugh out loud funniest that I've seen in years.", source: "2024 Q1", isNew: false },
  { id: 124, title: "Youth Without Youth", rating: 3.6, year: 2007, country: "Romania", director: "Francis Ford Coppola", review: "The critics panned this one, and I can see why. The supernatural plot is not at all believable. But the images are so astonishing that I liked the film despite its flaws.", source: "2024 Q1", isNew: false },
  { id: 125, title: "The Yards", rating: 3.6, year: 2000, country: "USA", director: "James Gray", review: "Fans of the Godfather and the early films of Martin Scorsese need to check out this excellent crime drama.", source: "2024 Q1", isNew: false },
  { id: 126, title: "I Vitelloni", rating: 3.6, year: 1953, country: "Italy", director: "Federico Fellini", review: "This early Fellini film might seem to go over familiar ground, but that's because it's been copied by so many other directors.", source: "2024 Q1", isNew: false },
  { id: 127, title: "Birth", rating: 3.6, year: 2004, country: "USA", director: "Jonathan Glazer", review: "Don't believe the critics, this Jonathan Glazer mystery will stick in your mind long after the film is over. Nicole Kidman is outstanding.", source: "2024 Q1", isNew: false },
  { id: 128, title: "Godzilla", rating: 3.5, year: 1954, country: "Japan", director: "", review: "At first this seemed like a run-of-the-mill 1950s horror film. But about half way though it began to achieve a sort of tragic gravitas that was totally unexpected.", source: "2024 Q1", isNew: false },
  { id: 129, title: "They Live By Night", rating: 3.5, year: 1948, country: "USA", director: "Nicholas Ray", review: "In this influential noir, Nicolas Ray decides not to show the crimes being committed, focusing instead on the young lovers.", source: "2024 Q1", isNew: false },
  { id: 130, title: "Vivre sa vie", rating: 3.5, year: 1962, country: "France", director: "Jean-Luc Godard", review: "After 60 years, I no longer find Godard's experiments to be all that interesting. But he's a highly skilled filmmaker, and Anna Karina is (as usual) sublime.", source: "2024 Q1", isNew: false },
  { id: 131, title: "It's All About Love", rating: 2.2, year: 2003, country: "Denmark", director: "Thomas Vinterberg", review: "Why did I keep watching such a bad film? I suppose it was curiosity. The film has good actors and a good director (Vinterberg), so I had a sort of morbid fascination with what would come next.", source: "2024 Q1", isNew: false },
  { id: 132, title: "Cocktail", rating: 2.5, year: 1988, country: "USA", director: "", review: "This is a fairly bad movie, but I kept watching out of fascination as to how Hollywood is able to turn junk into box office gold.", source: "2024 Q1", isNew: false },

  // === 2023 Q4 ===
  { id: 133, title: "Anatomy of a Fall", rating: 3.6, year: 2023, country: "France", director: "", review: "Watching this courtroom drama made me realize how much of my life has been spent watching Anglo-American courtroom dramas, and how little has been spent watching continental style trials.", source: "2023 Q4", isNew: true },
  { id: 134, title: "Blackberry", rating: 3.4, year: 2023, country: "Canada", director: "", review: "This 'dramedy' works better as comedy than drama, as it's not quite believable. But it's a very entertaining film about culture conflict between alphas and betas.", source: "2023 Q4", isNew: true },
  { id: 135, title: "American Fiction", rating: 3.4, year: 2023, country: "USA", director: "", review: "I can't recall seeing another Hollywood that had politics so close to my own views—anti-bigotry and anti-woke.", source: "2023 Q4", isNew: true },
  { id: 136, title: "Taylor Swift: Era Tour", rating: 3.3, year: 2023, country: "USA", director: "", review: "Her music seems aimed at empowering awkward teenage girls—making them feel better about their lives.", source: "2023 Q4", isNew: true },
  { id: 137, title: "The Boy and the Heron", rating: 3.2, year: 2023, country: "Japan", director: "Hayao Miyazaki", review: "Miyazaki seems to have lost his magic. Time to retire?", source: "2023 Q4", isNew: true },
  { id: 138, title: "Breaking the Waves", rating: 3.9, year: 1996, country: "Denmark", director: "Lars von Trier", review: "After suffering for 2 ½ hours, when one emerges into the light in the final ten minutes it feels like you've seen one of the greatest films.", source: "2023 Q4", isNew: false },
  { id: 139, title: "Diary of a Country Priest", rating: 3.8, year: 1951, country: "France", director: "Robert Bresson", review: "It's the cinematography, not the ideas, which make this early Bresson film so successful.", source: "2023 Q4", isNew: false },
  { id: 140, title: "The Repast", rating: 3.8, year: 1951, country: "Japan", director: "Mikio Naruse", review: "I don't know of any other male director who has as much sympathy for female characters.", source: "2023 Q4", isNew: false },
  { id: 141, title: "Hour of the Wolf", rating: 3.7, year: 1968, country: "Sweden", director: "Ingmar Bergman", review: "As with almost all horror films, it's a bit uneven. But there are enough great scenes that it's a must for film buffs.", source: "2023 Q4", isNew: false },
  { id: 142, title: "Woman of Tokyo", rating: 3.7, year: 1933, country: "Japan", director: "Yasujiro Ozu", review: "This film packs a world of drama into its less than 47 minute running time. Why should you watch a short silent Japanese film from 1933? Because it was directed by Ozu.", source: "2023 Q4", isNew: false },
  { id: 143, title: "Nine Queens", rating: 3.6, year: 2000, country: "Argentina", director: "", review: "I saw a bunch of confidence artist films last month, and this was one of the best.", source: "2023 Q4", isNew: false },
  { id: 144, title: "Rich and Strange", rating: 3.6, year: 1931, country: "UK", director: "Alfred Hitchcock", review: "Probably my favorite of the early (pre-1934) Hitchcock films. A very amusing commentary on how adults are often just overgrown children.", source: "2023 Q4", isNew: false },

  // === 2023 Q3 ===
  { id: 145, title: "Lynch/Oz", rating: 3.9, year: 2023, country: "USA", director: "", review: "So far, this is my favorite film of the 2020s. Six essays exploring links between The Wizard of Oz and the films of David Lynch.", source: "2023 Q3", isNew: true },
  { id: 146, title: "Barbie", rating: 3.3, year: 2023, country: "USA", director: "", review: "Pretty if you like pink. Amusing at times. A good film, but I'm not the intended viewer—the humor is dumbed down.", source: "2023 Q3", isNew: true },
  { id: 147, title: "Mission: Impossible - Dead Reckoning", rating: 3.0, year: 2023, country: "USA", director: "", review: "The actors have gotten old, the ideas are old, and I'm too old for this sort of film.", source: "2023 Q3", isNew: true },
  { id: 148, title: "Taste of Cherry", rating: 3.9, year: 1997, country: "Iran", director: "Abbas Kiarostami", review: "My all-time favorite Iranian film (and there's a lot of great competition.)", source: "2023 Q3", isNew: false },
  { id: 149, title: "Onibaba", rating: 3.9, year: 1964, country: "Japan", director: "", review: "The riches of mid-century Japanese cinema seem almost inexhaustible.", source: "2023 Q3", isNew: false },
  { id: 150, title: "Letter Never Sent", rating: 3.9, year: 1960, country: "Russia", director: "", review: "Liked this even more than the director's more famous Cranes are Flying. Great B&W cinematography.", source: "2023 Q3", isNew: false },
  { id: 151, title: "Pigs and Battleships", rating: 3.8, year: 1961, country: "Japan", director: "Shohei Imamura", review: "Director has great feel for small-time hoodlums with sarcastic style and flamboyant visual style.", source: "2023 Q3", isNew: false },
  { id: 152, title: "The Graduate", rating: 3.8, year: 1967, country: "USA", director: "", review: "It's easy to recall the great dialogue and the excellent soundtrack, but I had forgotten just how good the visuals were.", source: "2023 Q3", isNew: false },
  { id: 153, title: "Oldboy", rating: 3.8, year: 2003, country: "South Korea", director: "", review: "Best epitomizes Korean movies dialing intensity to eleven.", source: "2023 Q3", isNew: false },
  { id: 154, title: "Playtime", rating: 3.9, year: 1967, country: "France", director: "Jacques Tati", review: "It MUST be seen on at least a relatively big screen—there's so much going on in the margins.", source: "2022 Q3", isNew: false },

  // === 2023 Q2 ===
  { id: 155, title: "Asteroid City", rating: 3.7, year: 2023, country: "USA", director: "Wes Anderson", review: "Like all Wes Anderson films it's full of delightful images, including an homage to Cindy Sherman.", source: "2023 Q2", isNew: true },
  { id: 156, title: "The Velvet Queen", rating: 3.7, year: 2023, country: "France", director: "", review: "When viewed in the right frame of mind, this nature documentary is a near masterpiece.", source: "2023 Q2", isNew: true },
  { id: 157, title: "Past Lives", rating: 3.4, year: 2023, country: "South Korea", director: "", review: "An intelligent film with appealing characters. I just wish it had a bit more cinematic creativity.", source: "2023 Q2", isNew: true },
  { id: 158, title: "A Matter of Life and Death", rating: 3.9, year: 1946, country: "UK", director: "Michael Powell", review: "What a pleasure to see this masterpiece (fully restored) on the big screen.", source: "2023 Q2", isNew: false },
  { id: 159, title: "The Seventh Seal", rating: 3.9, year: 1957, country: "Sweden", director: "Ingmar Bergman", review: "The Middle Ages as imagined by Swedes in 1957. Today we'd make a grungier version.", source: "2023 Q2", isNew: false },
  { id: 160, title: "On the Waterfront", rating: 3.8, year: 1954, country: "USA", director: "Elia Kazan", review: "Right off the bat I found Lenny Bernstein's music to be annoying, and the drama is too melodramatic.", source: "2023 Q2", isNew: false },
  { id: 161, title: "Come and See", rating: 3.8, year: 1985, country: "Russia", director: "", review: "This film alternates between greatness and clumsiness. It's both hyperrealistic and surrealistic.", source: "2023 Q2", isNew: false },

  // === 2023 Q1 ===
  { id: 162, title: "The Fabelmans", rating: 3.7, year: 2023, country: "USA", director: "Steven Spielberg", review: "This has many of the strengths and weaknesses of a typical Spielberg film, and I usually prefer his (earlier) escapist narratives. However, while his films are often too sentimental, the subject matter of this one is close to his heart, which helps a lot. There's a great scene at the end where Sam is asked if he wants to meet the world's greatest director. He is introduced to John Ford, played by David Lynch. So which one is it; who's the greater director?", source: "2023 Q1", isNew: true },
  { id: 163, title: "Broker", rating: 3.7, year: 2023, country: "South Korea", director: "Hirokazu Kore-eda", review: "Koreeda's films are always impeccably directed. The ending is a bit too upbeat Hollywood for my taste, but this is an excellent film that will appeal to fans of Shoplifters.", source: "2023 Q1", isNew: true },
  { id: 164, title: "Where is the Friend's House?", rating: 3.9, year: 1987, country: "Iran", director: "Abbas Kiarostami", review: "I had forgotten what it's like to be eight years old. Kiarostami is also an extremely perceptive observer of the adults that the little boy encounters. You need to be patient and use your imagination, but this is a wonderful film.", source: "2023 Q1", isNew: false },
  { id: 165, title: "Amateur", rating: 3.8, year: 1994, country: "USA", director: "Hal Hartley", review: "A delightful absurdist comedy filmed with great skill. Each actor is nearly perfect for their role.", source: "2023 Q1", isNew: false },
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
