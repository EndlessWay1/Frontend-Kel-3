import { betterAuth } from "better-auth";
import { admin } from "better-auth/plugins";
import { pool } from "../sql-database/database";



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
