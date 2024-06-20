export default `INSERT INTO application_meta (
    name, group_name, views, downloads, ratings_count, ratings_sum, created_at, updated_at
) VALUES (
    ?, ?, 0, 0, 0, 0, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
)`;
