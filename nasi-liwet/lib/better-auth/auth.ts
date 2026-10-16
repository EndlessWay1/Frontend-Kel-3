import { betterAuth } from "better-auth";
import pg from "pg";
import { admin } from "better-auth/plugins";

const pool = new pg.Pool({
  // connectionString: process.env.DATABASE_URL,

  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  ssl: true,
});

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  emailAndPassword: {
    enabled: true,
  },
  plugins: [admin()],
  database: pool,
  advanced: {
    database: {
      validateSchema: false,
    },
  },
});
