import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string().min(1),
    NEXTAUTH_URL: z.string().url().optional().default("http://localhost:3000"),
    APP_NAME: z.string().optional().default("My Portfolio Tracker"),

    // ALL THESE ARE NOW OPTIONAL — app will never crash if missing
    ALPHAVANTAGE_API_KEY: z.string().optional(),
    POLYGON_API_KEY: z.string().optional(),
    AUTH_DISCORD_ID: z.string().optional(),
    AUTH_DISCORD_SECRET: z.string().optional(),
    BETTER_AUTH_SECRET: z.string().optional(),
    CLOUDFLARE_ACCESS_KEY_ID: z.string().optional(),
    CLOUDFLARE_SECRET_ACCESS_KEY: z.string().optional(),
    CLOUDFLARE_ACCOUNT_ID: z.string().optional(),
    CLOUDFLARE_BUCKET_NAME: z.string().optional(),
    EMAIL_FROM: z.string().optional(),
    EMAIL_SERVER: z.string().optional(),
    INFLUXDB_BUCKET: z.string().optional(),
    INFLUXDB_ORG: z.string().optional(),
    INFLUXDB_TOKEN: z.string().optional(),
    INFLUXDB_URL: z.string().optional(),
    PASSWORD_PEPPER: z.string().optional(),
  },
  client: {},
  runtimeEnv: process.env,
  skipValidation: !!process.env.SKIP_ENV_VALIDATION, // optional extra safety
});
