const BG2 = "#161B22",
  GOLD = "#F0B429",
  SILVER = "#8B98A8",
  BRONZE = "#C07A45",
  GREEN = "#2DD4A0",
  BLUE = "#58A6FF",
  MUTED = "#7D8590",
  TEXT = "#E6EDF3";
const FONT = "Poppins";
const CFG = {
  background: BG2,
  font: FONT,
  axis: {
    domainColor: "rgba(255,255,255,0.1)",
    gridColor: "rgba(255,255,255,0.06)",
    tickColor: "rgba(255,255,255,0.1)",
    labelColor: MUTED,
    titleColor: "#B0BAC4",
    labelFont: FONT,
    titleFont: FONT,
    labelFontSize: 11,
    titleFontSize: 11,
    titleFontWeight: 500,
  },
  legend: {
    labelColor: MUTED,
    titleColor: "#B0BAC4",
    labelFont: FONT,
    titleFont: FONT,
    labelFontSize: 11,
    titleFontSize: 11,
    titleFontWeight: 500,
    symbolStrokeWidth: 0,
  },
  title: { color: TEXT, font: FONT, fontSize: 13, fontWeight: 500 },
  view: { stroke: null },
};
const O = { actions: false };
 
const medalsByYear = [
  { Year: 1896, Medal: "Bronze", count: 1 },
  { Year: 1896, Medal: "Gold", count: 2 },
  { Year: 1900, Medal: "Bronze", count: 3 },
  { Year: 1900, Medal: "Gold", count: 3 },
  { Year: 1904, Medal: "Bronze", count: 1 },
  { Year: 1904, Medal: "Silver", count: 3 },
  { Year: 1906, Medal: "Bronze", count: 3 },
  { Year: 1906, Medal: "Gold", count: 1 },
  { Year: 1906, Medal: "Silver", count: 3 },
  { Year: 1908, Medal: "Bronze", count: 1 },
  { Year: 1908, Medal: "Gold", count: 1 },
  { Year: 1908, Medal: "Silver", count: 2 },
  { Year: 1912, Medal: "Bronze", count: 2 },
  { Year: 1912, Medal: "Gold", count: 2 },
  { Year: 1912, Medal: "Silver", count: 2 },
  { Year: 1920, Medal: "Bronze", count: 1 },
  { Year: 1920, Medal: "Silver", count: 2 },
  { Year: 1924, Medal: "Bronze", count: 2 },
  { Year: 1924, Medal: "Gold", count: 1 },
  { Year: 1924, Medal: "Silver", count: 1 },
  { Year: 1928, Medal: "Bronze", count: 1 },
  { Year: 1928, Medal: "Gold", count: 1 },
  { Year: 1928, Medal: "Silver", count: 2 },
  { Year: 1932, Medal: "Bronze", count: 3 },
  { Year: 1932, Medal: "Gold", count: 3 },
  { Year: 1932, Medal: "Silver", count: 1 },
  { Year: 1936, Medal: "Bronze", count: 1 },
  { Year: 1936, Medal: "Silver", count: 2 },
  { Year: 1948, Medal: "Bronze", count: 2 },
  { Year: 1948, Medal: "Silver", count: 2 },
  { Year: 1952, Medal: "Bronze", count: 6 },
  { Year: 1952, Medal: "Gold", count: 6 },
  { Year: 1952, Medal: "Silver", count: 2 },
  { Year: 1956, Medal: "Bronze", count: 4 },
  { Year: 1956, Medal: "Gold", count: 13 },
  { Year: 1956, Medal: "Silver", count: 8 },
  { Year: 1960, Medal: "Bronze", count: 8 },
  { Year: 1960, Medal: "Gold", count: 8 },
  { Year: 1960, Medal: "Silver", count: 8 },
  { Year: 1964, Medal: "Bronze", count: 10 },
  { Year: 1964, Medal: "Gold", count: 6 },
  { Year: 1964, Medal: "Silver", count: 2 },
  { Year: 1968, Medal: "Bronze", count: 7 },
  { Year: 1968, Medal: "Gold", count: 5 },
  { Year: 1968, Medal: "Silver", count: 7 },
  { Year: 1972, Medal: "Bronze", count: 5 },
  { Year: 1972, Medal: "Gold", count: 8 },
  { Year: 1972, Medal: "Silver", count: 7 },
  { Year: 1976, Medal: "Bronze", count: 5 },
  { Year: 1976, Medal: "Gold", count: 1 },
  { Year: 1976, Medal: "Silver", count: 4 },
  { Year: 1980, Medal: "Bronze", count: 3 },
  { Year: 1980, Medal: "Gold", count: 2 },
  { Year: 1980, Medal: "Silver", count: 5 },
  { Year: 1984, Medal: "Bronze", count: 8 },
  { Year: 1984, Medal: "Gold", count: 4 },
  { Year: 1984, Medal: "Silver", count: 8 },
  { Year: 1988, Medal: "Bronze", count: 11 },
  { Year: 1988, Medal: "Gold", count: 3 },
  { Year: 1988, Medal: "Silver", count: 6 },
  { Year: 1992, Medal: "Bronze", count: 7 },
  { Year: 1992, Medal: "Gold", count: 7 },
  { Year: 1992, Medal: "Silver", count: 9 },
  { Year: 1996, Medal: "Bronze", count: 23 },
  { Year: 1996, Medal: "Gold", count: 9 },
  { Year: 1996, Medal: "Silver", count: 9 },
  { Year: 2000, Medal: "Bronze", count: 17 },
  { Year: 2000, Medal: "Gold", count: 16 },
  { Year: 2000, Medal: "Silver", count: 25 },
  { Year: 2004, Medal: "Bronze", count: 17 },
  { Year: 2004, Medal: "Gold", count: 17 },
  { Year: 2004, Medal: "Silver", count: 16 },
  { Year: 2008, Medal: "Bronze", count: 14 },
  { Year: 2008, Medal: "Gold", count: 14 },
  { Year: 2008, Medal: "Silver", count: 15 },
  { Year: 2012, Medal: "Bronze", count: 12 },
  { Year: 2012, Medal: "Gold", count: 7 },
  { Year: 2012, Medal: "Silver", count: 16 },
  { Year: 2016, Medal: "Bronze", count: 10 },
  { Year: 2016, Medal: "Gold", count: 8 },
  { Year: 2016, Medal: "Silver", count: 11 },
];
 
const perMillion = [
  { NOC: "FIN", total_medals: 310, country_name: "Finland", medals_per_million: 56.41 },
  { NOC: "SWE", total_medals: 513, country_name: "Sweden", medals_per_million: 51.7 },
  { NOC: "HUN", total_medals: 504, country_name: "Hungary", medals_per_million: 51.64 },
  { NOC: "NOR", total_medals: 155, country_name: "Norway", medals_per_million: 29.61 },
  { NOC: "JAM", total_medals: 76, country_name: "Jamaica", medals_per_million: 27.05 },
  { NOC: "EST", total_medals: 34, country_name: "Estonia", medals_per_million: 25.84 },
  { NOC: "NZL", total_medals: 118, country_name: "New Zealand", medals_per_million: 25.03 },
  { NOC: "AUS", total_medals: 506, country_name: "Australia", medals_per_million: 20.92 },
  { NOC: "CUB", total_medals: 214, country_name: "Cuba", medals_per_million: 19.0 },
  { NOC: "ROU", total_medals: 303, country_name: "Romania", medals_per_million: 15.38 },
  { NOC: "BEL", total_medals: 166, country_name: "Belgium", medals_per_million: 14.65 },
  { NOC: "TTO", total_medals: 19, country_name: "Trinidad & Tobago", medals_per_million: 14.03 },
  { NOC: "GBR", total_medals: 892, country_name: "United Kingdom", medals_per_million: 13.6 },
  { NOC: "AUT", total_medals: 108, country_name: "Austria", medals_per_million: 12.36 },
  { NOC: "FRA", total_medals: 770, country_name: "France", medals_per_million: 11.54 },
  { NOC: "ITA", total_medals: 608, country_name: "Italy", medals_per_million: 10.11 },
  { NOC: "BLR", total_medals: 84, country_name: "Belarus", medals_per_million: 8.87 },
  { NOC: "LTU", total_medals: 25, country_name: "Lithuania", medals_per_million: 8.69 },
  { NOC: "GEO", total_medals: 32, country_name: "Georgia", medals_per_million: 8.58 },
  { NOC: "CAN", total_medals: 305, country_name: "Canada", medals_per_million: 8.45 },
];
 
const worldMedalData = [
  { id: 4, NOC: "AFG", total_medals: 2 },
  { id: 12, NOC: "ALG", total_medals: 17 },
  { id: 32, NOC: "ARG", total_medals: 74 },
  { id: 51, NOC: "ARM", total_medals: 16 },
  { id: 36, NOC: "AUS", total_medals: 506 },
  { id: 40, NOC: "AUT", total_medals: 108 },
  { id: 31, NOC: "AZE", total_medals: 44 },
  { id: 44, NOC: "BAH", total_medals: 14 },
  { id: 52, NOC: "BAR", total_medals: 1 },
  { id: 108, NOC: "BDI", total_medals: 2 },
  { id: 56, NOC: "BEL", total_medals: 166 },
  { id: 112, NOC: "BLR", total_medals: 84 },
  { id: 76, NOC: "BRA", total_medals: 128 },
  { id: 100, NOC: "BUL", total_medals: 217 },
  { id: 124, NOC: "CAN", total_medals: 305 },
  { id: 156, NOC: "CHN", total_medals: 542 },
  { id: 170, NOC: "COL", total_medals: 28 },
  { id: 191, NOC: "CRO", total_medals: 33 },
  { id: 192, NOC: "CUB", total_medals: 214 },
  { id: 203, NOC: "CZE", total_medals: 54 },
  { id: 208, NOC: "DEN", total_medals: 210 },
  { id: 214, NOC: "DOM", total_medals: 7 },
  { id: 818, NOC: "EGY", total_medals: 27 },
  { id: 724, NOC: "ESP", total_medals: 148 },
  { id: 233, NOC: "EST", total_medals: 34 },
  { id: 231, NOC: "ETH", total_medals: 53 },
  { id: 246, NOC: "FIN", total_medals: 310 },
  { id: 250, NOC: "FRA", total_medals: 770 },
  { id: 826, NOC: "GBR", total_medals: 892 },
  { id: 268, NOC: "GEO", total_medals: 32 },
  { id: 276, NOC: "GER", total_medals: 776 },
  { id: 288, NOC: "GHA", total_medals: 4 },
  { id: 300, NOC: "GRE", total_medals: 151 },
  { id: 348, NOC: "HUN", total_medals: 504 },
  { id: 360, NOC: "INA", total_medals: 30 },
  { id: 356, NOC: "IND", total_medals: 28 },
  { id: 364, NOC: "IRI", total_medals: 68 },
  { id: 372, NOC: "IRL", total_medals: 33 },
  { id: 376, NOC: "ISR", total_medals: 9 },
  { id: 380, NOC: "ITA", total_medals: 608 },
  { id: 388, NOC: "JAM", total_medals: 76 },
  { id: 392, NOC: "JPN", total_medals: 437 },
  { id: 398, NOC: "KAZ", total_medals: 70 },
  { id: 404, NOC: "KEN", total_medals: 100 },
  { id: 410, NOC: "KOR", total_medals: 263 },
  { id: 428, NOC: "LAT", total_medals: 19 },
  { id: 440, NOC: "LTU", total_medals: 25 },
  { id: 504, NOC: "MAR", total_medals: 23 },
  { id: 458, NOC: "MAS", total_medals: 11 },
  { id: 484, NOC: "MEX", total_medals: 67 },
  { id: 496, NOC: "MGL", total_medals: 26 },
  { id: 528, NOC: "NED", total_medals: 297 },
  { id: 566, NOC: "NGR", total_medals: 24 },
  { id: 578, NOC: "NOR", total_medals: 155 },
  { id: 554, NOC: "NZL", total_medals: 118 },
  { id: 586, NOC: "PAK", total_medals: 10 },
  { id: 616, NOC: "POL", total_medals: 290 },
  { id: 620, NOC: "POR", total_medals: 24 },
  { id: 408, NOC: "PRK", total_medals: 54 },
  { id: 642, NOC: "ROU", total_medals: 303 },
  { id: 710, NOC: "RSA", total_medals: 88 },
  { id: 643, NOC: "RUS", total_medals: 460 },
  { id: 702, NOC: "SGP", total_medals: 5 },
  { id: 705, NOC: "SLO", total_medals: 23 },
  { id: 688, NOC: "SRB", total_medals: 15 },
  { id: 144, NOC: "SRI", total_medals: 2 },
  { id: 756, NOC: "SUI", total_medals: 209 },
  { id: 703, NOC: "SVK", total_medals: 28 },
  { id: 752, NOC: "SWE", total_medals: 513 },
  { id: 764, NOC: "THA", total_medals: 30 },
  { id: 780, NOC: "TTO", total_medals: 19 },
  { id: 788, NOC: "TUN", total_medals: 13 },
  { id: 792, NOC: "TUR", total_medals: 95 },
  { id: 804, NOC: "UKR", total_medals: 126 },
  { id: 840, NOC: "USA", total_medals: 2544 },
  { id: 860, NOC: "UZB", total_medals: 33 },
  { id: 862, NOC: "VEN", total_medals: 15 },
  { id: 716, NOC: "ZIM", total_medals: 8 },
];
 
const perMillionMapData = [
  { id: 32, NOC: "ARG", country_name: "Argentina", medals_per_million: 1.69 },
  { id: 51, NOC: "ARM", country_name: "Armenia", medals_per_million: 5.35 },
  { id: 36, NOC: "AUS", country_name: "Australia", medals_per_million: 20.92 },
  { id: 40, NOC: "AUT", country_name: "Austria", medals_per_million: 12.36 },
  { id: 31, NOC: "AZE", country_name: "Azerbaijan", medals_per_million: 4.51 },
  { id: 56, NOC: "BEL", country_name: "Belgium", medals_per_million: 14.65 },
  { id: 112, NOC: "BLR", country_name: "Belarus", medals_per_million: 8.87 },
  { id: 76, NOC: "BRA", country_name: "Brazil", medals_per_million: 0.63 },
  { id: 124, NOC: "CAN", country_name: "Canada", medals_per_million: 8.45 },
  { id: 156, NOC: "CHN", country_name: "China", medals_per_million: 0.39 },
  { id: 170, NOC: "COL", country_name: "Colombia", medals_per_million: 0.59 },
  { id: 192, NOC: "CUB", country_name: "Cuba", medals_per_million: 19.0 },
  { id: 203, NOC: "CZE", country_name: "Czechia", medals_per_million: 5.11 },
  { id: 818, NOC: "EGY", country_name: "Egypt", medals_per_million: 0.27 },
  { id: 724, NOC: "ESP", country_name: "Spain", medals_per_million: 3.19 },
  { id: 233, NOC: "EST", country_name: "Estonia", medals_per_million: 25.84 },
  { id: 231, NOC: "ETH", country_name: "Ethiopia", medals_per_million: 0.5 },
  { id: 246, NOC: "FIN", country_name: "Finland", medals_per_million: 56.41 },
  { id: 250, NOC: "FRA", country_name: "France", medals_per_million: 11.54 },
  { id: 826, NOC: "GBR", country_name: "United Kingdom", medals_per_million: 13.6 },
  { id: 268, NOC: "GEO", country_name: "Georgia", medals_per_million: 8.58 },
  { id: 348, NOC: "HUN", country_name: "Hungary", medals_per_million: 51.64 },
  { id: 356, NOC: "IND", country_name: "India", medals_per_million: 0.02 },
  { id: 372, NOC: "IRL", country_name: "Ireland", medals_per_million: 6.93 },
  { id: 380, NOC: "ITA", country_name: "Italy", medals_per_million: 10.11 },
  { id: 388, NOC: "JAM", country_name: "Jamaica", medals_per_million: 27.05 },
  { id: 392, NOC: "JPN", country_name: "Japan", medals_per_million: 3.44 },
  { id: 398, NOC: "KAZ", country_name: "Kazakhstan", medals_per_million: 3.81 },
  { id: 404, NOC: "KEN", country_name: "Kenya", medals_per_million: 2.08 },
  { id: 410, NOC: "KOR", country_name: "South Korea", medals_per_million: 5.13 },
  { id: 440, NOC: "LTU", country_name: "Lithuania", medals_per_million: 8.69 },
  { id: 504, NOC: "MAR", country_name: "Morocco", medals_per_million: 0.66 },
  { id: 484, NOC: "MEX", country_name: "Mexico", medals_per_million: 0.55 },
  { id: 578, NOC: "NOR", country_name: "Norway", medals_per_million: 29.61 },
  { id: 554, NOC: "NZL", country_name: "New Zealand", medals_per_million: 25.03 },
  { id: 616, NOC: "POL", country_name: "Poland", medals_per_million: 7.64 },
  { id: 642, NOC: "ROU", country_name: "Romania", medals_per_million: 15.38 },
  { id: 643, NOC: "RUS", country_name: "Russia", medals_per_million: 3.17 },
  { id: 752, NOC: "SWE", country_name: "Sweden", medals_per_million: 51.7 },
  { id: 764, NOC: "THA", country_name: "Thailand", medals_per_million: 0.42 },
  { id: 780, NOC: "TTO", country_name: "Trinidad & Tobago", medals_per_million: 14.03 },
  { id: 792, NOC: "TUR", country_name: "Turkey", medals_per_million: 1.2 },
  { id: 804, NOC: "UKR", country_name: "Ukraine", medals_per_million: 2.76 },
  { id: 840, NOC: "USA", country_name: "United States", medals_per_million: 7.84 },
  { id: 860, NOC: "UZB", country_name: "Uzbekistan", medals_per_million: 1.05 },
  { id: 862, NOC: "VEN", country_name: "Venezuela", medals_per_million: 0.49 },
];
 
const ausRank = [
  { Year: 1896, medals: 3, rank: 9 },
  { Year: 1900, medals: 6, rank: 9 },
  { Year: 1904, medals: 4, rank: 4 },
  { Year: 1906, medals: 3, rank: 14 },
  { Year: 1920, medals: 3, rank: 14 },
  { Year: 1924, medals: 6, rank: 14 },
  { Year: 1928, medals: 4, rank: 19 },
  { Year: 1932, medals: 5, rank: 15 },
  { Year: 1936, medals: 1, rank: 25 },
  { Year: 1948, medals: 13, rank: 11 },
  { Year: 1952, medals: 11, rank: 11 },
  { Year: 1956, medals: 35, rank: 3 },
  { Year: 1960, medals: 22, rank: 5 },
  { Year: 1964, medals: 18, rank: 8 },
  { Year: 1968, medals: 17, rank: 8 },
  { Year: 1972, medals: 17, rank: 11 },
  { Year: 1976, medals: 5, rank: 20 },
  { Year: 1980, medals: 9, rank: 13 },
  { Year: 1984, medals: 24, rank: 10 },
  { Year: 1988, medals: 14, rank: 13 },
  { Year: 1992, medals: 27, rank: 9 },
  { Year: 1996, medals: 41, rank: 5 },
  { Year: 2000, medals: 58, rank: 3 },
  { Year: 2004, medals: 50, rank: 4 },
  { Year: 2008, medals: 46, rank: 5 },
  { Year: 2012, medals: 35, rank: 7 },
  { Year: 2016, medals: 29, rank: 8 },
];
 
const bySport = [
  { Sport: "Athletics", Medal: "Bronze", count: 28 },
  { Sport: "Athletics", Medal: "Gold", count: 21 },
  { Sport: "Athletics", Medal: "Silver", count: 16 },
  { Sport: "Basketball", Medal: "Bronze", count: 1 },
  { Sport: "Basketball", Medal: "Silver", count: 2 },
  { Sport: "Boxing", Medal: "Bronze", count: 5 },
  { Sport: "Boxing", Medal: "Silver", count: 2 },
  { Sport: "Canoeing", Medal: "Bronze", count: 5 },
  { Sport: "Canoeing", Medal: "Gold", count: 3 },
  { Sport: "Canoeing", Medal: "Silver", count: 4 },
  { Sport: "Cycling", Medal: "Bronze", count: 10 },
  { Sport: "Cycling", Medal: "Gold", count: 14 },
  { Sport: "Cycling", Medal: "Silver", count: 12 },
  { Sport: "Diving", Medal: "Bronze", count: 4 },
  { Sport: "Diving", Medal: "Gold", count: 3 },
  { Sport: "Diving", Medal: "Silver", count: 2 },
  { Sport: "Equestrianism", Medal: "Bronze", count: 6 },
  { Sport: "Equestrianism", Medal: "Gold", count: 6 },
  { Sport: "Equestrianism", Medal: "Silver", count: 6 },
  { Sport: "Hockey", Medal: "Bronze", count: 2 },
  { Sport: "Hockey", Medal: "Gold", count: 4 },
  { Sport: "Hockey", Medal: "Silver", count: 1 },
  { Sport: "Judo", Medal: "Bronze", count: 3 },
  { Sport: "Judo", Medal: "Silver", count: 1 },
  { Sport: "Rowing", Medal: "Bronze", count: 11 },
  { Sport: "Rowing", Medal: "Gold", count: 11 },
  { Sport: "Rowing", Medal: "Silver", count: 13 },
  { Sport: "Sailing", Medal: "Bronze", count: 8 },
  { Sport: "Sailing", Medal: "Gold", count: 11 },
  { Sport: "Sailing", Medal: "Silver", count: 9 },
  { Sport: "Shooting", Medal: "Bronze", count: 6 },
  { Sport: "Shooting", Medal: "Gold", count: 5 },
  { Sport: "Shooting", Medal: "Silver", count: 5 },
  { Sport: "Swimming", Medal: "Bronze", count: 82 },
  { Sport: "Swimming", Medal: "Gold", count: 60 },
  { Sport: "Swimming", Medal: "Silver", count: 67 },
  { Sport: "Taekwondo", Medal: "Bronze", count: 2 },
  { Sport: "Taekwondo", Medal: "Gold", count: 2 },
  { Sport: "Tennis", Medal: "Bronze", count: 2 },
  { Sport: "Tennis", Medal: "Gold", count: 1 },
  { Sport: "Tennis", Medal: "Silver", count: 2 },
  { Sport: "Triathlon", Medal: "Bronze", count: 3 },
  { Sport: "Triathlon", Medal: "Silver", count: 3 },
  { Sport: "Water Polo", Medal: "Bronze", count: 1 },
  { Sport: "Water Polo", Medal: "Silver", count: 2 },
  { Sport: "Weightlifting", Medal: "Bronze", count: 2 },
  { Sport: "Weightlifting", Medal: "Silver", count: 2 },
  { Sport: "Wrestling", Medal: "Bronze", count: 3 },
  { Sport: "Wrestling", Medal: "Silver", count: 2 },
];
 
const heatmapData = [
  { Sport: "Athletics", decade: "1890s", medal_count: 1 },
  { Sport: "Athletics", decade: "1900s", medal_count: 4 },
  { Sport: "Athletics", decade: "1920s", medal_count: 2 },
  { Sport: "Athletics", decade: "1930s", medal_count: 1 },
  { Sport: "Athletics", decade: "1940s", medal_count: 1 },
  { Sport: "Athletics", decade: "1950s", medal_count: 4 },
  { Sport: "Athletics", decade: "1960s", medal_count: 9 },
  { Sport: "Athletics", decade: "1970s", medal_count: 7 },
  { Sport: "Athletics", decade: "1980s", medal_count: 10 },
  { Sport: "Athletics", decade: "1990s", medal_count: 11 },
  { Sport: "Athletics", decade: "2000s", medal_count: 15 },
  { Sport: "Athletics", decade: "2010s", medal_count: 10 },
  { Sport: "Canoeing", decade: "1980s", medal_count: 2 },
  { Sport: "Canoeing", decade: "1990s", medal_count: 4 },
  { Sport: "Canoeing", decade: "2000s", medal_count: 3 },
  { Sport: "Canoeing", decade: "2010s", medal_count: 3 },
  { Sport: "Cycling", decade: "1900s", medal_count: 1 },
  { Sport: "Cycling", decade: "1920s", medal_count: 1 },
  { Sport: "Cycling", decade: "1950s", medal_count: 2 },
  { Sport: "Cycling", decade: "1960s", medal_count: 2 },
  { Sport: "Cycling", decade: "1970s", medal_count: 1 },
  { Sport: "Cycling", decade: "1980s", medal_count: 2 },
  { Sport: "Cycling", decade: "1990s", medal_count: 8 },
  { Sport: "Cycling", decade: "2000s", medal_count: 9 },
  { Sport: "Cycling", decade: "2010s", medal_count: 10 },
  { Sport: "Diving", decade: "1920s", medal_count: 1 },
  { Sport: "Diving", decade: "2000s", medal_count: 3 },
  { Sport: "Diving", decade: "2010s", medal_count: 5 },
  { Sport: "Equestrianism", decade: "1950s", medal_count: 3 },
  { Sport: "Equestrianism", decade: "1960s", medal_count: 3 },
  { Sport: "Equestrianism", decade: "1970s", medal_count: 2 },
  { Sport: "Equestrianism", decade: "1980s", medal_count: 2 },
  { Sport: "Equestrianism", decade: "1990s", medal_count: 2 },
  { Sport: "Equestrianism", decade: "2000s", medal_count: 3 },
  { Sport: "Equestrianism", decade: "2010s", medal_count: 3 },
  { Sport: "Hockey", decade: "1950s", medal_count: 1 },
  { Sport: "Hockey", decade: "1970s", medal_count: 1 },
  { Sport: "Hockey", decade: "1990s", medal_count: 1 },
  { Sport: "Hockey", decade: "2000s", medal_count: 3 },
  { Sport: "Hockey", decade: "2010s", medal_count: 1 },
  { Sport: "Rowing", decade: "1900s", medal_count: 2 },
  { Sport: "Rowing", decade: "1950s", medal_count: 1 },
  { Sport: "Rowing", decade: "1970s", medal_count: 1 },
  { Sport: "Rowing", decade: "1980s", medal_count: 4 },
  { Sport: "Rowing", decade: "1990s", medal_count: 9 },
  { Sport: "Rowing", decade: "2000s", medal_count: 10 },
  { Sport: "Rowing", decade: "2010s", medal_count: 8 },
  { Sport: "Sailing", decade: "1890s", medal_count: 1 },
  { Sport: "Sailing", decade: "1950s", medal_count: 1 },
  { Sport: "Sailing", decade: "1960s", medal_count: 2 },
  { Sport: "Sailing", decade: "1970s", medal_count: 4 },
  { Sport: "Sailing", decade: "1980s", medal_count: 5 },
  { Sport: "Sailing", decade: "1990s", medal_count: 5 },
  { Sport: "Sailing", decade: "2000s", medal_count: 5 },
  { Sport: "Sailing", decade: "2010s", medal_count: 5 },
  { Sport: "Shooting", decade: "1960s", medal_count: 2 },
  { Sport: "Shooting", decade: "1970s", medal_count: 1 },
  { Sport: "Shooting", decade: "1980s", medal_count: 2 },
  { Sport: "Shooting", decade: "1990s", medal_count: 4 },
  { Sport: "Shooting", decade: "2000s", medal_count: 3 },
  { Sport: "Shooting", decade: "2010s", medal_count: 4 },
  { Sport: "Swimming", decade: "1890s", medal_count: 2 },
  { Sport: "Swimming", decade: "1900s", medal_count: 6 },
  { Sport: "Swimming", decade: "1910s", medal_count: 2 },
  { Sport: "Swimming", decade: "1920s", medal_count: 5 },
  { Sport: "Swimming", decade: "1930s", medal_count: 4 },
  { Sport: "Swimming", decade: "1940s", medal_count: 3 },
  { Sport: "Swimming", decade: "1950s", medal_count: 17 },
  { Sport: "Swimming", decade: "1960s", medal_count: 17 },
  { Sport: "Swimming", decade: "1970s", medal_count: 14 },
  { Sport: "Swimming", decade: "1980s", medal_count: 18 },
  { Sport: "Swimming", decade: "1990s", medal_count: 29 },
  { Sport: "Swimming", decade: "2000s", medal_count: 47 },
  { Sport: "Swimming", decade: "2010s", medal_count: 28 },
  { Sport: "Triathlon", decade: "2000s", medal_count: 3 },
  { Sport: "Triathlon", decade: "2010s", medal_count: 3 },
];
 
const heatmapDecades = [
  "1890s","1900s","1910s","1920s","1930s","1940s","1950s",
  "1960s","1970s","1980s","1990s","2000s","2010s",
];
const heatmapSports = Array.from(new Set(heatmapData.map((d) => d.Sport)));
heatmapSports.sort((a, b) => {
  const sumA = heatmapData.filter((d) => d.Sport === a).reduce((s, d) => s + d.medal_count, 0);
  const sumB = heatmapData.filter((d) => d.Sport === b).reduce((s, d) => s + d.medal_count, 0);
  return sumB - sumA;
});
const heatmapFull = [];
for (const sport of heatmapSports) {
  for (const dec of heatmapDecades) {
    const rec = heatmapData.find((d) => d.Sport === sport && d.decade === dec);
    heatmapFull.push({ Sport: sport, decade: dec, medal_count: rec ? rec.medal_count : 0 });
  }
}
const heatmapFilled = heatmapFull;
 
const sydneyData = [
  { Sport: "Swimming",     sydney_2000: 18, other_games_avg: 7.29 },
  { Sport: "Cycling",      sydney_2000: 6,  other_games_avg: 3.46 },
  { Sport: "Rowing",       sydney_2000: 5,  other_games_avg: 2.69 },
  { Sport: "Sailing",      sydney_2000: 4,  other_games_avg: 2.3  },
  { Sport: "Shooting",     sydney_2000: 3,  other_games_avg: 1.6  },
  { Sport: "Athletics",    sydney_2000: 3,  other_games_avg: 3.32 },
  { Sport: "Canoeing",     sydney_2000: 2,  other_games_avg: 2.2  },
  { Sport: "Equestrianism",sydney_2000: 2,  other_games_avg: 1.43 },
  { Sport: "Diving",       sydney_2000: 2,  other_games_avg: 2.2  },
  { Sport: "Taekwondo",    sydney_2000: 2,  other_games_avg: 0.0  },
  { Sport: "Hockey",       sydney_2000: 2,  other_games_avg: 1.11 },
  { Sport: "Triathlon",    sydney_2000: 1,  other_games_avg: 1.33 },
  { Sport: "Water Polo",   sydney_2000: 1,  other_games_avg: 1.0  },
  { Sport: "Judo",         sydney_2000: 1,  other_games_avg: 1.0  },
];
 
const parisData = [
  { sport: "Swimming",             gold: 7, silver: 5, bronze: 8, total: 20 },
  { sport: "Athletics",            gold: 3, silver: 2, bronze: 2, total: 7  },
  { sport: "Rowing",               gold: 2, silver: 1, bronze: 1, total: 4  },
  { sport: "Cycling",              gold: 2, silver: 1, bronze: 2, total: 5  },
  { sport: "Sailing",              gold: 1, silver: 2, bronze: 1, total: 4  },
  { sport: "Triathlon",            gold: 1, silver: 1, bronze: 0, total: 2  },
  { sport: "Canoe Sprint",         gold: 1, silver: 0, bronze: 1, total: 2  },
  { sport: "Breaking",             gold: 0, silver: 0, bronze: 1, total: 1  },
  { sport: "Artistic Gymnastics",  gold: 0, silver: 1, bronze: 0, total: 1  },
  { sport: "Shooting",             gold: 0, silver: 1, bronze: 1, total: 2  },
  { sport: "Boxing",               gold: 0, silver: 1, bronze: 0, total: 1  },
  { sport: "Surfing",              gold: 0, silver: 0, bronze: 1, total: 1  },
  { sport: "Water Polo",           gold: 0, silver: 0, bronze: 1, total: 1  },
  { sport: "Equestrian",           gold: 1, silver: 0, bronze: 0, total: 1  },
  { sport: "Weightlifting",        gold: 0, silver: 1, bronze: 0, total: 1  },
];
 
const sydneyParis = [
  { Sport: "Swimming",  count: 18, games: "Sydney 2000" },
  { Sport: "Cycling",   count: 6,  games: "Sydney 2000" },
  { Sport: "Rowing",    count: 5,  games: "Sydney 2000" },
  { Sport: "Sailing",   count: 4,  games: "Sydney 2000" },
  { Sport: "Athletics", count: 3,  games: "Sydney 2000" },
  { Sport: "Shooting",  count: 3,  games: "Sydney 2000" },
  { Sport: "Swimming",  count: 20, games: "Paris 2024"  },
  { Sport: "Athletics", count: 7,  games: "Paris 2024"  },
  { Sport: "Cycling",   count: 5,  games: "Paris 2024"  },
  { Sport: "Rowing",    count: 4,  games: "Paris 2024"  },
  { Sport: "Sailing",   count: 4,  games: "Paris 2024"  },
  { Sport: "Shooting",  count: 2,  games: "Paris 2024"  },
];
 
const stateContributions = [
  { state: "New South Wales",              medals: 185 },
  { state: "Victoria",                     medals: 143 },
  { state: "Queensland",                   medals: 89  },
  { state: "Western Australia",            medals: 62  },
  { state: "South Australia",              medals: 48  },
  { state: "Tasmania",                     medals: 12  },
  { state: "Australian Capital Territory", medals: 9   },
  { state: "Northern Territory",           medals: 5   },
];
 
const hostCities = [
  { city: "Moscow",      year: 1980, aus_medals: 9,  host: false },
  { city: "Los Angeles", year: 1984, aus_medals: 24, host: false },
  { city: "Seoul",       year: 1988, aus_medals: 20, host: false },
  { city: "Barcelona",   year: 1992, aus_medals: 23, host: false },
  { city: "Atlanta",     year: 1996, aus_medals: 41, host: false },
  { city: "Sydney",      year: 2000, aus_medals: 58, host: true  },
  { city: "Athens",      year: 2004, aus_medals: 49, host: false },
  { city: "Beijing",     year: 2008, aus_medals: 46, host: false },
  { city: "London",      year: 2012, aus_medals: 35, host: false },
  { city: "Rio",         year: 2016, aus_medals: 29, host: false },
  { city: "Paris",       year: 2024, aus_medals: 53, host: false },
  { city: "Brisbane",    year: 2032, aus_medals: 0,  host: true  },
];
 
const ageStats = [
  { decade: "1890s", min: 18, q1: 20, median: 22, q3: 26, max: 35 },
  { decade: "1900s", min: 16, q1: 20, median: 23, q3: 28, max: 42 },
  { decade: "1920s", min: 16, q1: 20, median: 22, q3: 26, max: 38 },
  { decade: "1930s", min: 17, q1: 21, median: 24, q3: 28, max: 40 },
  { decade: "1940s", min: 18, q1: 22, median: 25, q3: 30, max: 42 },
  { decade: "1950s", min: 14, q1: 18, median: 21, q3: 25, max: 40 },
  { decade: "1960s", min: 15, q1: 19, median: 22, q3: 26, max: 38 },
  { decade: "1970s", min: 15, q1: 19, median: 22, q3: 26, max: 36 },
  { decade: "1980s", min: 15, q1: 20, median: 23, q3: 27, max: 40 },
  { decade: "1990s", min: 15, q1: 20, median: 23, q3: 27, max: 45 },
  { decade: "2000s", min: 16, q1: 21, median: 24, q3: 28, max: 48 },
  { decade: "2010s", min: 16, q1: 21, median: 24, q3: 28, max: 61 },
];
 
// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM IDIOM 1 — SLOPE CHART
// Medal share (%) of each major sport across four defining eras.
// Derived metric: (sport medals / era total) × 100
// Era totals: 1970s = 17, Sydney 2000 = 58, Post-Sydney avg (2004+2008)/2 ≈ 47.5, Paris 2024 = 53
// ─────────────────────────────────────────────────────────────────────────────
const slopeData = [
  { Sport: "Swimming",  era: "1970s",       share: 82.4 },
  { Sport: "Swimming",  era: "Sydney 2000", share: 31.0 },
  { Sport: "Swimming",  era: "Post-Sydney", share: 34.7 },
  { Sport: "Swimming",  era: "Paris 2024",  share: 37.7 },
  { Sport: "Athletics", era: "1970s",       share: 29.4 },
  { Sport: "Athletics", era: "Sydney 2000", share: 5.2  },
  { Sport: "Athletics", era: "Post-Sydney", share: 6.3  },
  { Sport: "Athletics", era: "Paris 2024",  share: 13.2 },
  { Sport: "Cycling",   era: "1970s",       share: 5.9  },
  { Sport: "Cycling",   era: "Sydney 2000", share: 10.3 },
  { Sport: "Cycling",   era: "Post-Sydney", share: 13.7 },
  { Sport: "Cycling",   era: "Paris 2024",  share: 9.4  },
  { Sport: "Rowing",    era: "1970s",       share: 5.9  },
  { Sport: "Rowing",    era: "Sydney 2000", share: 8.6  },
  { Sport: "Rowing",    era: "Post-Sydney", share: 10.5 },
  { Sport: "Rowing",    era: "Paris 2024",  share: 7.5  },
  { Sport: "Sailing",   era: "1970s",       share: 23.5 },
  { Sport: "Sailing",   era: "Sydney 2000", share: 6.9  },
  { Sport: "Sailing",   era: "Post-Sydney", share: 5.3  },
  { Sport: "Sailing",   era: "Paris 2024",  share: 7.5  },
];
 
// ─────────────────────────────────────────────────────────────────────────────
// CUSTOM IDIOM 2 — DIVERGING BAR
// Derived field: delta = sydney_2000 − other_games_avg
// Encodes direction (over/under) via colour + bar direction from zero baseline
// ─────────────────────────────────────────────────────────────────────────────
const divergingData = sydneyData.map((d) => ({
  Sport: d.Sport,
  delta: Math.round((d.sydney_2000 - d.other_games_avg) * 10) / 10,
  sydney: d.sydney_2000,
  avg: d.other_games_avg,
}));
 
const TOPO = "https://cdn.jsdelivr.net/npm/vega-datasets@2/data/world-110m.json";
 
// ════════════════════════════════════════════════════════════════════════════
// MAP 1 — World total medals choropleth
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#map-world", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 420, config: CFG,
  projection: { type: "naturalEarth1" },
  layer: [
    {
      data: { url: TOPO, format: { type: "topojson", feature: "countries" } },
      mark: { type: "geoshape", fill: "#1C2230", stroke: "#0D1117", strokeWidth: 0.5 },
    },
    {
      data: { url: TOPO, format: { type: "topojson", feature: "countries" } },
      transform: [{ lookup: "id", from: { data: { values: worldMedalData }, key: "id", fields: ["total_medals","NOC"] } }],
      mark: { type: "geoshape", stroke: "#0D1117", strokeWidth: 0.5 },
      encoding: {
        color: {
          field: "total_medals", type: "quantitative",
          scale: { domain: [1,2544], type: "log", range: ["#0E4429","#196F3D","#2ECC71","#F0B429","#FF6B35"] },
          legend: { title: "Total medals", orient: "bottom-right", gradientLength: 120 },
        },
        tooltip: [{ field: "NOC", title: "NOC" }, { field: "total_medals", title: "Medals" }],
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// MAP 2 — Per capita choropleth
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#map-per-million", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 420, config: CFG,
  projection: { type: "naturalEarth1" },
  layer: [
    {
      data: { url: TOPO, format: { type: "topojson", feature: "countries" } },
      mark: { type: "geoshape", fill: "#1C2230", stroke: "#0D1117", strokeWidth: 0.5 },
    },
    {
      data: { url: TOPO, format: { type: "topojson", feature: "countries" } },
      transform: [{ lookup: "id", from: { data: { values: perMillionMapData }, key: "id", fields: ["medals_per_million","country_name"] } }],
      mark: { type: "geoshape", stroke: "#0D1117", strokeWidth: 0.5 },
      encoding: {
        color: {
          field: "medals_per_million", type: "quantitative",
          scale: { domain: [0.1,60], type: "log", range: ["#0E3460","#1A6BA0","#2DD4A0","#F0B429","#FF6B35"] },
          legend: { title: "Medals / million", orient: "bottom-right", gradientLength: 120 },
        },
        tooltip: [{ field: "country_name", title: "Country" }, { field: "medals_per_million", title: "Per million", format: ".1f" }],
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 1 — Bar: top 20 nations per capita
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-per-million", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 440, config: CFG,
  data: { values: perMillion },
  mark: { type: "bar", cornerRadiusTopRight: 3, cornerRadiusBottomRight: 3 },
  encoding: {
    y: { field: "country_name", type: "nominal", sort: "-x", axis: { title: null, labelFontSize: 12 } },
    x: { field: "medals_per_million", type: "quantitative", axis: { title: "Medals per million people", grid: true } },
    color: { condition: { test: "datum.NOC == 'AUS'", value: GREEN }, value: "#2A3A4A" },
    tooltip: [
      { field: "country_name", title: "Country" },
      { field: "medals_per_million", title: "Per million", format: ".1f" },
      { field: "total_medals", title: "Total medals" },
    ],
  },
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 2 — Stacked area: trajectory 1896–2016 with Sydney annotation
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-trajectory", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 340, config: CFG,
  data: { values: medalsByYear },
  layer: [
    {
      mark: { type: "area", opacity: 0.9, line: { strokeWidth: 1 } },
      encoding: {
        x: { field: "Year", type: "quantitative", axis: { title: "Year", format: "d", grid: false } },
        y: { field: "count", type: "quantitative", stack: "zero", axis: { title: "Medal count", grid: true } },
        color: {
          field: "Medal", type: "nominal",
          scale: { domain: ["Gold","Silver","Bronze"], range: [GOLD, SILVER, BRONZE] },
          legend: { title: "Medal type" },
        },
        tooltip: [{ field: "Year", type: "quantitative" }, { field: "Medal" }, { field: "count", title: "Count" }],
      },
    },
    // Sydney 2000 annotation rule
    {
      mark: { type: "rule", color: "rgba(240,180,41,0.5)", strokeDash: [4,3], strokeWidth: 1.5 },
      data: { values: [{ Year: 2000 }] },
      encoding: { x: { field: "Year", type: "quantitative" } },
    },
    // AIS founding annotation
    {
      mark: { type: "rule", color: "rgba(45,212,160,0.3)", strokeDash: [4,3], strokeWidth: 1 },
      data: { values: [{ Year: 1981 }] },
      encoding: { x: { field: "Year", type: "quantitative" } },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 3 — Connected dot plot: rank at every Games
// ════════════════════════════════════════════════════════════════════════════
// ── BUMP CHART: Medal tally rank — Australia vs rival nations 1980–2024 ──────
// year stored as STRING so Vega-Lite treats x-axis as ordinal (evenly spaced).
const bumpData = [
  // Australia
  { country: "Australia",   year: "1980", rank: 13 },
  { country: "Australia",   year: "1984", rank: 10 },
  { country: "Australia",   year: "1988", rank: 13 },
  { country: "Australia",   year: "1992", rank: 9  },
  { country: "Australia",   year: "1996", rank: 5  },
  { country: "Australia",   year: "2000", rank: 3  },
  { country: "Australia",   year: "2004", rank: 4  },
  { country: "Australia",   year: "2008", rank: 5  },
  { country: "Australia",   year: "2012", rank: 7  },
  { country: "Australia",   year: "2016", rank: 8  },
  { country: "Australia",   year: "2024", rank: 5  },
  // USA
  { country: "USA",         year: "1984", rank: 1  },
  { country: "USA",         year: "1988", rank: 3  },
  { country: "USA",         year: "1992", rank: 2  },
  { country: "USA",         year: "1996", rank: 1  },
  { country: "USA",         year: "2000", rank: 1  },
  { country: "USA",         year: "2004", rank: 1  },
  { country: "USA",         year: "2008", rank: 2  },
  { country: "USA",         year: "2012", rank: 1  },
  { country: "USA",         year: "2016", rank: 1  },
  { country: "USA",         year: "2024", rank: 1  },
  // China
  { country: "China",       year: "1984", rank: 4  },
  { country: "China",       year: "1988", rank: 11 },
  { country: "China",       year: "1992", rank: 4  },
  { country: "China",       year: "1996", rank: 4  },
  { country: "China",       year: "2000", rank: 3  },
  { country: "China",       year: "2004", rank: 2  },
  { country: "China",       year: "2008", rank: 1  },
  { country: "China",       year: "2012", rank: 2  },
  { country: "China",       year: "2016", rank: 3  },
  { country: "China",       year: "2024", rank: 2  },
  // Great Britain
  { country: "Gr. Britain", year: "1984", rank: 11 },
  { country: "Gr. Britain", year: "1988", rank: 12 },
  { country: "Gr. Britain", year: "1992", rank: 13 },
  { country: "Gr. Britain", year: "1996", rank: 14 },
  { country: "Gr. Britain", year: "2000", rank: 10 },
  { country: "Gr. Britain", year: "2004", rank: 10 },
  { country: "Gr. Britain", year: "2008", rank: 4  },
  { country: "Gr. Britain", year: "2012", rank: 3  },
  { country: "Gr. Britain", year: "2016", rank: 2  },
  { country: "Gr. Britain", year: "2024", rank: 7  },
  // Germany
  { country: "Germany",     year: "1984", rank: 3  },
  { country: "Germany",     year: "1988", rank: 2  },
  { country: "Germany",     year: "1992", rank: 3  },
  { country: "Germany",     year: "1996", rank: 3  },
  { country: "Germany",     year: "2000", rank: 5  },
  { country: "Germany",     year: "2004", rank: 6  },
  { country: "Germany",     year: "2008", rank: 5  },
  { country: "Germany",     year: "2012", rank: 6  },
  { country: "Germany",     year: "2016", rank: 5  },
  { country: "Germany",     year: "2024", rank: 10 },
  // France
  { country: "France",      year: "1984", rank: 9  },
  { country: "France",      year: "1988", rank: 9  },
  { country: "France",      year: "1992", rank: 8  },
  { country: "France",      year: "1996", rank: 6  },
  { country: "France",      year: "2000", rank: 7  },
  { country: "France",      year: "2004", rank: 7  },
  { country: "France",      year: "2008", rank: 7  },
  { country: "France",      year: "2012", rank: 8  },
  { country: "France",      year: "2016", rank: 7  },
  { country: "France",      year: "2024", rank: 4  },
];
 
const YEAR_ORDER = ["1980","1984","1988","1992","1996","2000","2004","2008","2012","2016","2024"];
const COUNTRY_DOMAIN = ["Australia","USA","China","Gr. Britain","Germany","France"];
const COUNTRY_RANGE  = [GOLD, "#E84040", "#E87D40", SILVER, "#9B8EC4", BLUE];
 
vegaEmbed("#chart-rank", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container",
  height: 440,
  config: CFG,
  data: { values: bumpData },
  layer: [
    // Sydney 2000 highlight — rect behind the "2000" ordinal band
    // Use a text-background rect trick: we draw it as a full-height bar on x="2000"
    {
      mark: { type: "bar", width: 32, opacity: 0.10, color: GOLD, clip: false },
      data: { values: [{ year: "2000", lo: 1, hi: 15 }] },
      encoding: {
        x: { field: "year", type: "ordinal", sort: YEAR_ORDER },
        y: { field: "lo",   type: "quantitative", scale: { reverse: true, domain: [1, 15] } },
        y2: { field: "hi" },
      },
    },
    // "Sydney 2000" annotation label at top of that column
    {
      mark: { type: "text", fontSize: 10, fontWeight: 600, fontStyle: "italic", dy: -8 },
      data: { values: [{ year: "2000", rank: 1 }] },
      encoding: {
        x: { field: "year", type: "ordinal", sort: YEAR_ORDER },
        y: { field: "rank", type: "quantitative", scale: { reverse: true, domain: [1, 15] } },
        text: { value: "Sydney 2000" },
        color: { value: GOLD },
      },
    },
    // Lines — one per country, evenly spaced x (ordinal)
    {
      mark: { type: "line", strokeWidth: 2.5, interpolate: "monotone", opacity: 0.9 },
      encoding: {
        x: {
          field: "year", type: "ordinal",
          sort: YEAR_ORDER,
          axis: { title: null, labelFontSize: 12, labelFontWeight: 500, grid: false },
        },
        y: {
          field: "rank", type: "quantitative",
          scale: { reverse: true, domain: [1, 15] },
          axis: { title: "Medal tally rank  (1 = best)", grid: true, tickCount: 8 },
        },
        color: {
          field: "country", type: "nominal",
          scale: { domain: COUNTRY_DOMAIN, range: COUNTRY_RANGE },
          legend: null,
        },
        detail: { field: "country", type: "nominal" },
        tooltip: [
          { field: "country", title: "Nation" },
          { field: "year",    title: "Year" },
          { field: "rank",    title: "Rank" },
        ],
      },
    },
    // Dots at each Games node
    {
      mark: { type: "point", filled: true, size: 80, opacity: 1 },
      encoding: {
        x: { field: "year", type: "ordinal", sort: YEAR_ORDER },
        y: { field: "rank", type: "quantitative", scale: { reverse: true, domain: [1, 15] } },
        color: {
          field: "country", type: "nominal",
          scale: { domain: COUNTRY_DOMAIN, range: COUNTRY_RANGE },
        },
        detail: { field: "country", type: "nominal" },
      },
    },
    // Country name labels pinned at 2024 (rightmost column)
    {
      mark: { type: "text", align: "left", dx: 10, fontSize: 11, fontWeight: 600 },
      transform: [{ filter: "datum.year == '2024'" }],
      encoding: {
        x: { field: "year", type: "ordinal", sort: YEAR_ORDER },
        y: { field: "rank", type: "quantitative", scale: { reverse: true, domain: [1, 15] } },
        text: { field: "country", type: "nominal" },
        color: {
          field: "country", type: "nominal",
          scale: { domain: COUNTRY_DOMAIN, range: COUNTRY_RANGE },
        },
      },
    },
    // Rank number labels on Australia line at every node
    {
      mark: { type: "text", dy: -13, fontSize: 10, fontWeight: 700 },
      transform: [{ filter: "datum.country == 'Australia'" }],
      encoding: {
        x: { field: "year", type: "ordinal", sort: YEAR_ORDER },
        y: { field: "rank", type: "quantitative", scale: { reverse: true, domain: [1, 15] } },
        text: { field: "rank", type: "quantitative" },
        color: { value: GOLD },
      },
    },
  ],
}, O);
 
vegaEmbed("#chart-gold-sport", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 660, config: CFG,
  data: { values: bySport.filter(d => d.Medal === "Gold") },
  layer: [
    // Stem: rule from 0 to count
    {
      mark: { type: "rule", strokeWidth: 2.5, opacity: 0.7 },
      encoding: {
        y: { field: "Sport", type: "nominal", sort: "-x", axis: { title: null, labelFontSize: 13 } },
        x: { field: "count", type: "quantitative", axis: { title: "Gold medals", grid: true }, scale: { domainMin: 0 } },
        x2: { datum: 0 },
        color: { condition: { test: "datum.Sport=='Swimming'", value: GOLD }, value: "#3A5060" },
      },
    },
    // Head: filled circle at value
    {
      mark: { type: "point", filled: true, size: 180, opacity: 1 },
      encoding: {
        y: { field: "Sport", type: "nominal", sort: "-x" },
        x: { field: "count", type: "quantitative" },
        color: { condition: { test: "datum.Sport=='Swimming'", value: GOLD }, value: GREEN },
        tooltip: [{ field: "Sport" }, { field: "count", title: "Gold medals" }],
      },
    },
    // Count labels
    {
      mark: { type: "text", dx: 16, fontSize: 12, fontWeight: 700, align: "left" },
      encoding: {
        y: { field: "Sport", type: "nominal", sort: "-x" },
        x: { field: "count", type: "quantitative" },
        text: { field: "count", type: "quantitative" },
        color: { condition: { test: "datum.Sport=='Swimming'", value: GOLD }, value: TEXT },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 5 — Stacked bar: all medals top 10 sports
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-sport-all", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 380, config: CFG,
  data: {
    values: bySport.filter((d) =>
      ["Swimming","Athletics","Cycling","Rowing","Sailing","Equestrianism","Shooting","Hockey","Canoeing","Diving"].includes(d.Sport)
    ),
  },
  mark: { type: "bar" },
  encoding: {
    y: { field: "Sport", type: "nominal", sort: { field: "count", op: "sum", order: "descending" }, axis: { title: null, labelFontSize: 11 } },
    x: { field: "count", type: "quantitative", stack: "zero", axis: { title: "Medals", grid: true } },
    color: {
      field: "Medal", type: "nominal",
      scale: { domain: ["Gold","Silver","Bronze"], range: [GOLD, SILVER, BRONZE] },
    },
    tooltip: [{ field: "Sport" }, { field: "Medal" }, { field: "count", title: "Medals" }],
  },
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 6 — Donut: summer vs winter
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-summer-winter", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 380, config: CFG,
  data: { values: [{ Season: "Summer", total: 506 }, { Season: "Winter", total: 6 }] },
  layer: [
    {
      mark: { type: "arc", innerRadius: 90, outerRadius: 150 },
      encoding: {
        theta: { field: "total", type: "quantitative" },
        color: { field: "Season", type: "nominal", scale: { domain: ["Summer","Winter"], range: [GREEN, "#2A3A4A"] } },
        tooltip: [{ field: "Season" }, { field: "total", title: "Medals" }],
      },
    },
    {
      mark: { type: "text", radius: 175, fontSize: 13, fontWeight: 500 },
      encoding: {
        theta: { field: "total", type: "quantitative", stack: true },
        text: { field: "Season" },
        color: { value: TEXT },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 7 — HEATMAP with zeros filled, threshold scale, gold peak outlines,
//           and count labels inside cells
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-heatmap", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 420, config: CFG,
  data: { values: heatmapFilled },
  layer: [
    // Base rectangles
    {
      mark: { type: "rect", cornerRadius: 2, stroke: "#0D1117", strokeWidth: 1 },
      encoding: {
        x: {
          field: "decade", type: "ordinal",
          sort: ["1890s","1900s","1910s","1920s","1930s","1940s","1950s","1960s","1970s","1980s","1990s","2000s","2010s"],
          axis: { title: "Decade", labelAngle: -30, labelFontSize: 11 },
        },
        y: {
          field: "Sport", type: "nominal",
          sort: { field: "medal_count", op: "sum", order: "descending" },
          axis: { title: null, labelFontSize: 11 },
        },
        color: {
          condition: { test: "datum.medal_count == 0", value: "#0E2210" },
          field: "medal_count", type: "quantitative",
          scale: {
            type: "threshold",
            domain: [1,3,6,12,24],
            range: ["#1f6b44","#2aa86a","#4fe0a0","#f0c34a","#ff9a5f","#ff6b35"],
          },
          legend: { title: "Medals", orient: "right" },
        },
        tooltip: [{ field: "Sport" }, { field: "decade", title: "Decade" }, { field: "medal_count", title: "Medals" }],
      },
    },
    // Count labels
    {
      mark: { type: "text", fontSize: 10, fontWeight: 500 },
      encoding: {
        x: {
          field: "decade", type: "ordinal",
          sort: ["1890s","1900s","1910s","1920s","1930s","1940s","1950s","1960s","1970s","1980s","1990s","2000s","2010s"],
        },
        y: { field: "Sport", type: "nominal", sort: { field: "medal_count", op: "sum", order: "descending" } },
        text: { condition: { test: "datum.medal_count > 0", field: "medal_count", type: "quantitative" }, value: "" },
        color: { condition: { test: "datum.medal_count >= 24", value: "#1a1a1a" }, value: "rgba(255,255,255,0.8)" },
      },
    },
    // Gold outline on peak decade per sport
    {
      mark: { type: "rect", filled: false, stroke: GOLD, strokeWidth: 2, cornerRadius: 2 },
      transform: [
        { joinaggregate: [{ op: "max", field: "medal_count", as: "max_count" }], groupby: ["Sport"] },
        { filter: "datum.medal_count == datum.max_count && datum.medal_count > 0" },
      ],
      encoding: {
        x: {
          field: "decade", type: "ordinal",
          sort: ["1890s","1900s","1910s","1920s","1930s","1940s","1950s","1960s","1970s","1980s","1990s","2000s","2010s"],
        },
        y: { field: "Sport", type: "nominal", sort: { field: "medal_count", op: "sum", order: "descending" } },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 8 — SLOPE CHART: medal share across four eras  ◀ CUSTOM IDIOM 1
// Derived metric: % share of Australian total per era
// Multi-series line + point overlay + sport labels at Paris 2024 end
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-slope", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
   width: "container", height: 560, padding: {right: 80}, config: CFG,
  data: { values: slopeData },
  layer: [
    // Connection lines
    {
      mark: { type: "line", strokeWidth: 2.5, opacity: 0.85, interpolate: "linear" },
      encoding: {
        x: {
          field: "era", type: "ordinal",
          sort: ["1970s","Sydney 2000","Post-Sydney","Paris 2024"],
          axis: { title: null, labelFontSize: 13, labelFontWeight: 600, grid: false },
        },
        y: {
          field: "share", type: "quantitative",
          axis: { title: "% of Australia's total medals that era", grid: true, format: ".0f", labelFontSize: 11 },
          scale: { domainMin: 0 },
        },
        color: {
          field: "Sport", type: "nominal",
          scale: { domain: ["Swimming","Athletics","Cycling","Rowing","Sailing"], range: [GOLD, GREEN, BLUE, BRONZE, SILVER] },
          legend: { title: "Sport", orient: "top-right" },
        },
        detail: { field: "Sport", type: "nominal" },
        tooltip: [{ field: "Sport" }, { field: "era", title: "Era" }, { field: "share", title: "Medal share %", format: ".1f" }],
      },
    },
    // Nodes (dots at each era)
    {
      mark: { type: "point", filled: true, size: 100, opacity: 1 },
      encoding: {
        x: { field: "era", type: "ordinal", sort: ["1970s","Sydney 2000","Post-Sydney","Paris 2024"] },
        y: { field: "share", type: "quantitative" },
        color: {
          field: "Sport", type: "nominal",
          scale: { domain: ["Swimming","Athletics","Cycling","Rowing","Sailing"], range: [GOLD, GREEN, BLUE, BRONZE, SILVER] },
        },
      },
    },
    // Final value label at Paris 2024 end only — no sport name, just the number
    {
      mark: { type: "text", align: "left", dx: 8, fontSize: 11, fontWeight: 700 },
      transform: [{ filter: "datum.era == 'Paris 2024'" }],
      encoding: {
        x: { field: "era", type: "ordinal", sort: ["1970s","Sydney 2024","Post-Sydney","Paris 2024"] },
        y: { field: "share", type: "quantitative" },
        text: { field: "share", type: "quantitative", format: ".0f" },
        color: {
          field: "Sport", type: "nominal",
          scale: { domain: ["Swimming","Athletics","Cycling","Rowing","Sailing"], range: [GOLD, GREEN, BLUE, BRONZE, SILVER] },
        },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 9 — DIVERGING BAR: Sydney 2000 delta from historical average  ◀ CUSTOM IDIOM 2
// Derived field: delta = sydney_2000 − other_games_avg
// Positive bars (teal) = over-performed; negative (bronze) = under-performed
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-diverging", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 580, padding: { right: 20 }, config: CFG,
  data: { values: divergingData },
  layer: [
    // Zero reference line
    {
      mark: { type: "rule", color: "rgba(255,255,255,0.3)", strokeWidth: 1.5 },
      encoding: { x: { datum: 0 } },
    },
    // Diverging bars
    {
      mark: { type: "bar", cornerRadiusTopRight: 3, cornerRadiusBottomRight: 3, cornerRadiusTopLeft: 3, cornerRadiusBottomLeft: 3 },
      encoding: {
        y: {
          field: "Sport", type: "nominal",
          sort: { field: "delta", order: "descending" },
          axis: { title: null, labelFontSize: 13 },
        },
        x: {
          field: "delta", type: "quantitative",
          axis: { title: "Sydney 2000 medals minus historical average", grid: true, format: "+.1f" },
        },
        color: { condition: { test: "datum.delta >= 0", value: GREEN }, value: BRONZE },
        tooltip: [
          { field: "Sport" },
          { field: "delta", title: "Δ vs average", format: "+.1f" },
          { field: "sydney", title: "Sydney 2000 medals" },
          { field: "avg", title: "Historical avg", format: ".1f" },
        ],
      },
    },
    // Delta value labels — anchored to bar end, offset outward so never on bar
    {
      mark: { type: "text", fontSize: 11, fontWeight: 600, baseline: "middle", align: "left", dx: 6 },
      transform: [{ filter: "datum.delta > 0" }],
      encoding: {
        y: { field: "Sport", type: "nominal", sort: { field: "delta", order: "descending" } },
        x: { field: "delta", type: "quantitative" },
        text: { field: "delta", type: "quantitative", format: "+.1f" },
        color: { value: GREEN },
      },
    },
    {
      mark: { type: "text", fontSize: 11, fontWeight: 600, baseline: "middle", align: "right", dx: -6 },
      transform: [{ filter: "datum.delta < 0" }],
      encoding: {
        y: { field: "Sport", type: "nominal", sort: { field: "delta", order: "descending" } },
        x: { field: "delta", type: "quantitative" },
        text: { field: "delta", type: "quantitative", format: "+.1f" },
        color: { value: BRONZE },
      },
    },
    {
      mark: { type: "text", fontSize: 11, fontWeight: 600, baseline: "middle", align: "left", dx: 6 },
      transform: [{ filter: "datum.delta == 0" }],
      encoding: {
        y: { field: "Sport", type: "nominal", sort: { field: "delta", order: "descending" } },
        x: { datum: 0 },
        text: { value: "+0.0" },
        color: { value: MUTED },
      },
    },
    // Annotation for the largest surge — placed below Swimming bar
    {
      mark: { type: "text", fontSize: 10, fontStyle: "italic", align: "left", dx: 8, dy: 12 },
      data: { values: [{ Sport: "Swimming", delta: 10.71, note: "Largest single-sport home-Games surge" }] },
      encoding: {
        y: { field: "Sport", type: "nominal", sort: { field: "delta", order: "descending" } },
        x: { field: "delta", type: "quantitative" },
        text: { field: "note" },
        color: { value: MUTED },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 10 — Scatter: Sydney 2000 vs average
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-sydney-scatter", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 400, config: CFG,
  data: { values: sydneyData },
  layer: [
    {
      mark: { type: "rule", color: "rgba(255,255,255,0.1)", strokeDash: [4,3] },
      encoding: { x: { datum: 0 }, x2: { datum: 20 }, y: { datum: 0 }, y2: { datum: 20 } },
    },
    {
      mark: { type: "point", filled: true, size: 140, opacity: 0.9 },
      encoding: {
        x: { field: "other_games_avg", type: "quantitative", axis: { title: "Average medals at other Games", grid: true } },
        y: { field: "sydney_2000", type: "quantitative", axis: { title: "Medals at Sydney 2000", grid: true } },
        color: { condition: { test: "datum.sydney_2000>datum.other_games_avg", value: GREEN }, value: "#2A3A4A" },
        tooltip: [
          { field: "Sport" },
          { field: "sydney_2000", title: "Sydney 2000" },
          { field: "other_games_avg", title: "Other Games avg", format: ".1f" },
        ],
      },
    },
    {
      mark: { type: "text", dy: -14, fontSize: 11 },
      encoding: {
        x: { field: "other_games_avg", type: "quantitative" },
        y: { field: "sydney_2000", type: "quantitative" },
        text: { field: "Sport" },
        color: { value: MUTED },
        opacity: { condition: { test: "datum.sydney_2000>=3", value: 1 }, value: 0 },
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// MAP 3 — Australia states choropleth
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#map-australia", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 440, config: CFG,
  projection: { type: "mercator", center: [134,-28], scale: 600 },
  layer: [
    {
      data: { url: "data/STE_2021_AUST_GDA2020.json", format: { type: "topojson", feature: "STE_2021_AUST_GDA2020" } },
      mark: { type: "geoshape", fill: "#1C2230", stroke: "#0D1117", strokeWidth: 1 },
    },
    {
      data: { url: "data/STE_2021_AUST_GDA2020.json", format: { type: "topojson", feature: "STE_2021_AUST_GDA2020" } },
      transform: [{ lookup: "properties.STE_NAME21", from: { data: { values: stateContributions }, key: "state", fields: ["medals"] } }],
      mark: { type: "geoshape", stroke: "#0D1117", strokeWidth: 1 },
      encoding: {
        color: {
          field: "medals", type: "quantitative",
          scale: { domain: [0,200], range: ["#0E2A40","#1A5C80","#2DD4A0","#F0B429"] },
          legend: { title: "Estimated medals", orient: "bottom-right", gradientLength: 120 },
        },
        tooltip: [{ field: "properties.STE_NAME21", title: "State/Territory" }, { field: "medals", title: "Est. medals" }],
      },
    },
  ],
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 11 — Grouped bar: Sydney 2000 vs Paris 2024
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-sydney-paris", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 360, config: CFG,
  data: { values: sydneyParis },
  mark: { type: "bar", cornerRadiusTopRight: 2 },
  encoding: {
    y: { field: "Sport", type: "nominal", sort: { field: "count", op: "sum", order: "descending" }, axis: { title: null, labelFontSize: 12 } },
    x: { field: "count", type: "quantitative", axis: { title: "Medals", grid: true } },
    color: {
      field: "games", type: "nominal",
      scale: { domain: ["Sydney 2000","Paris 2024"], range: [GOLD, GREEN] },
      legend: { title: "Games" },
    },
    yOffset: { field: "games", type: "nominal" },
    tooltip: [{ field: "Sport" }, { field: "games", title: "Games" }, { field: "count", title: "Medals" }],
  },
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 12 — Stacked bar: Paris 2024 breakdown
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-paris", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 400, config: CFG,
  data: {
    values: parisData
      .flatMap((d) => [
        { sport: d.sport, Medal: "Gold",   count: d.gold   },
        { sport: d.sport, Medal: "Silver", count: d.silver },
        { sport: d.sport, Medal: "Bronze", count: d.bronze },
      ])
      .filter((d) => d.count > 0),
  },
  mark: { type: "bar" },
  encoding: {
    y: { field: "sport", type: "nominal", sort: { field: "count", op: "sum", order: "descending" }, axis: { title: null, labelFontSize: 12 } },
    x: { field: "count", type: "quantitative", stack: "zero", axis: { title: "Medals", grid: true } },
    color: {
      field: "Medal", type: "nominal",
      scale: { domain: ["Gold","Silver","Bronze"], range: [GOLD, SILVER, BRONZE] },
    },
    tooltip: [{ field: "sport", title: "Sport" }, { field: "Medal" }, { field: "count", title: "Medals" }],
  },
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// CHART 13 — Box plot: age of medal winners by decade
// ════════════════════════════════════════════════════════════════════════════
vegaEmbed("#chart-ages", {
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  width: "container", height: 400, config: CFG,
  data: { values: ageStats },
  layer: [
    {
      mark: { type: "rule", color: "rgba(255,255,255,0.15)" },
      encoding: {
        x: { field: "decade", type: "ordinal" },
        y: { field: "min", type: "quantitative" },
        y2: { field: "max" },
      },
    },
    {
      mark: { type: "bar", width: 28, cornerRadius: 3 },
      encoding: {
        x: { field: "decade", type: "ordinal", axis: { title: "Decade", labelAngle: -30 } },
        y: { field: "q1", type: "quantitative", axis: { title: "Age", grid: true } },
        y2: { field: "q3" },
        color: { value: GREEN },
        opacity: { value: 0.75 },
      },
    },
    {
      mark: { type: "tick", color: "#fff", width: 28, thickness: 2 },
      encoding: {
        x: { field: "decade", type: "ordinal" },
        y: { field: "median", type: "quantitative" },
        tooltip: [
          { field: "decade" },
          { field: "median", title: "Median age" },
          { field: "q1", title: "Q1" },
          { field: "q3", title: "Q3" },
        ],
      },
    },
  ],
  resolve: { scale: { y: "shared" } },
}, O);
 
// ════════════════════════════════════════════════════════════════════════════
// MAP 4 — Bubble chart: medal haul per Games 1980–2032
// Labels only shown for medals ≥ 40 or home Games to avoid clutter
// City and count labels given different vertical offsets to prevent overlap
// ════════════════════════════════════════════════════════════════════════════
// ── DIVERGING DOT PLOT: Australia's medal haul vs Rio 2016 baseline ──────────
// Each Games shown as a horizontal dot. Stem extends from zero (= Rio 2016 = 29).
// Rightward = better than Rio; leftward = worse. Sydney 2000 and home Games in gold.
vegaEmbed(
  "#map-host-cities",
  {
    $schema: "https://vega.github.io/schema/vega-lite/v5.json",
    width: "container",
    height: 380,
    config: CFG,
    data: {
      values: hostCities.filter(d => d.year !== 2032),
    },
    transform: [
      { calculate: "datum.aus_medals - 29", as: "delta" },
    ],
    layer: [
      // Zero baseline (Rio 2016 = 29 medals)
      {
        mark: { type: "rule", color: "rgba(255,255,255,0.3)", strokeWidth: 1.5 },
        encoding: { x: { datum: 0 } },
      },
      // Positive half shading
      {
        mark: { type: "rect", opacity: 0.04, color: GREEN },
        encoding: {
          x: { datum: 0 },
          x2: { datum: 32 },
          y: { value: 0 },
          y2: { value: 380 },
        },
      },
      // Stem: rule from 0 to delta
      {
        mark: { type: "rule", strokeWidth: 2.5, opacity: 0.6 },
        encoding: {
          y: {
            field: "city",
            type: "nominal",
            sort: { field: "year", order: "ascending" },
            axis: { title: null, labelFontSize: 12, labelFontWeight: 500 },
          },
          x: { datum: 0 },
          x2: { field: "delta", type: "quantitative" },
          color: {
            condition: { test: "datum.host == true", value: GOLD },
            value: GREEN,
          },
        },
      },
      // Head: filled dot at delta
      {
        mark: { type: "point", filled: true, size: 180, opacity: 1 },
        encoding: {
          y: {
            field: "city",
            type: "nominal",
            sort: { field: "year", order: "ascending" },
          },
          x: {
            field: "delta",
            type: "quantitative",
            axis: {
              title: "Medals won  (baseline = Rio 2016, 29 medals)",
              grid: true,
              format: "+d",
              labelFontSize: 11,
            },
          },
          color: {
            condition: { test: "datum.host == true", value: GOLD },
            value: GREEN,
          },
          tooltip: [
            { field: "city", title: "Host city" },
            { field: "year", title: "Year", format: "d" },
            { field: "aus_medals", title: "Medals won" },
            { field: "delta", title: "vs Rio 2016", format: "+d" },
          ],
        },
      },
      // Medal count label — right of dot for positive delta, left of dot for negative
      {
        mark: { type: "text", fontSize: 11, fontWeight: 700, baseline: "middle", align: "left", dx: 14 },
        transform: [{ filter: "datum.delta >= 0" }],
        encoding: {
          y: { field: "city", type: "nominal", sort: { field: "year", order: "ascending" } },
          x: { field: "delta", type: "quantitative" },
          text: { field: "aus_medals", type: "quantitative" },
          color: { value: TEXT },
        },
      },
      {
        mark: { type: "text", fontSize: 11, fontWeight: 700, baseline: "middle", align: "right", dx: -14 },
        transform: [{ filter: "datum.delta < 0" }],
        encoding: {
          y: { field: "city", type: "nominal", sort: { field: "year", order: "ascending" } },
          x: { field: "delta", type: "quantitative" },
          text: { field: "aus_medals", type: "quantitative" },
          color: { value: TEXT },
        },
      },
      // Year label pinned to the far left
      {
        mark: {
          type: "text",
          align: "right",
          dx: -6,
          fontSize: 10,
          fontStyle: "italic",
        },
        encoding: {
          y: {
            field: "city",
            type: "nominal",
            sort: { field: "year", order: "ascending" },
          },
          x: { datum: -22 },
          text: { field: "year", type: "quantitative", format: "d" },
          color: { value: MUTED },
        },
      },
    ],
  },
  O,
);
