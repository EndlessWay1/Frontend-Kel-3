import pg from "pg";

console.log(process.env.DATABASE_URL);

const pool = new pg.Pool({
  // connectionString: process.env.DATABASE_URL,

  host: "nasi-liwetdb-apt-clasp.sage.cloud.layerbase.dev",
  port: 5432,
  user: "layerbase",
  password: "jxjAZsk7A4RCIK3MiEx3PEEx",
  database: "nasi_liwetdb",
  ssl: true,
});

const { rows } = await pool.query(
  "SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%';",
);
console.log(rows);
