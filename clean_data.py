import pandas as pd

df = pd.read_csv("athlete_events.csv")
pop_raw = pd.read_csv("population.csv", skiprows=4)

# ── 1. aus_medals.csv ─────────────────────────────────────────────
aus = df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna())]
aus.to_csv("aus_medals.csv", index=False)
print(f"aus_medals.csv: {len(aus)} rows")

# ── 2. world_medal_totals.csv ─────────────────────────────────────
world = (
    df[(df["Season"] == "Summer") & (df["Medal"].notna())]
    .drop_duplicates(subset=["NOC", "Games", "Event", "Medal"])
    .groupby("NOC")
    .size()
    .reset_index(name="total_medals")
)
world.to_csv("world_medal_totals.csv", index=False)
print(f"world_medal_totals.csv: {len(world)} rows")

# ── 3. world_medals_per_million.csv ──────────────────────────────
medal_counts = (
    df[(df["Season"] == "Summer") & (df["Medal"].notna())]
    .drop_duplicates(subset=["NOC", "Games", "Event", "Medal"])
    .groupby("NOC")
    .size()
    .reset_index(name="total_medals")
)

pop = pop_raw[["Country Code", "2016"]].rename(
    columns={"Country Code": "NOC", "2016": "population_2016"}
)
pop = pop[pop["population_2016"].notna()]

merged = medal_counts.merge(pop, on="NOC", how="inner")
merged["medals_per_million"] = (
    merged["total_medals"] / merged["population_2016"] * 1_000_000
).round(2)
merged = merged[merged["total_medals"] >= 10]
merged = merged.sort_values("medals_per_million", ascending=False).head(20)
merged.to_csv("world_medals_per_million.csv", index=False)
print(f"world_medals_per_million.csv: {len(merged)} rows")

# ── 4. aus_medals_by_year.csv ─────────────────────────────────────
aus_by_year = (
    df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna())]
    .drop_duplicates(subset=["Games", "Event", "Medal"])
    .groupby(["Year", "Medal"])
    .size()
    .reset_index(name="count")
)
aus_by_year.to_csv("aus_medals_by_year.csv", index=False)
print(f"aus_medals_by_year.csv: {len(aus_by_year)} rows")

# ── 5. aus_medals_by_sport.csv ────────────────────────────────────
aus_sport = (
    df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna())]
    .drop_duplicates(subset=["Games", "Event", "Medal"])
    .groupby(["Sport", "Medal"])
    .size()
    .reset_index(name="count")
)
aus_sport.to_csv("aus_medals_by_sport.csv", index=False)
print(f"aus_medals_by_sport.csv: {len(aus_sport)} rows")

# ── 6. aus_medals_by_sport_decade.csv ────────────────────────────
aus_heat = df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna())].copy()
aus_heat = aus_heat.drop_duplicates(subset=["Games", "Event", "Medal"])
aus_heat["decade"] = (aus_heat["Year"] // 10 * 10).astype(str) + "s"
aus_heat_grouped = (
    aus_heat.groupby(["Sport", "decade"])
    .size()
    .reset_index(name="medal_count")
)
aus_heat_grouped.to_csv("aus_medals_by_sport_decade.csv", index=False)
print(f"aus_medals_by_sport_decade.csv: {len(aus_heat_grouped)} rows")

# ── 7. sydney2000_vs_average.csv ─────────────────────────────────
aus_dedup = (
    df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna())]
    .drop_duplicates(subset=["Games", "Event", "Medal"])
)

sydney = (
    aus_dedup[aus_dedup["Year"] == 2000]
    .groupby("Sport")
    .size()
    .reset_index(name="sydney_2000")
)

other_avg = (
    aus_dedup[aus_dedup["Year"] != 2000]
    .groupby(["Sport", "Games"])
    .size()
    .reset_index(name="count")
    .groupby("Sport")["count"]
    .mean()
    .round(2)
    .reset_index(name="other_games_avg")
)

sydney_vs = sydney.merge(other_avg, on="Sport", how="outer").fillna(0)
sydney_vs.to_csv("sydney2000_vs_average.csv", index=False)
print(f"sydney2000_vs_average.csv: {len(sydney_vs)} rows")

# ── 8. aus_athlete_ages.csv ───────────────────────────────────────
aus_ages = (
    df[(df["NOC"] == "AUS") & (df["Season"] == "Summer") & (df["Medal"].notna()) & (df["Age"].notna())]
    .copy()
)
aus_ages["decade"] = (aus_ages["Year"] // 10 * 10).astype(str) + "s"
aus_ages[["decade", "Age", "Medal", "Sport", "Name"]].to_csv("aus_athlete_ages.csv", index=False)
print(f"aus_athlete_ages.csv: {len(aus_ages)} rows")

print("\nAll done.")
