-- ASSUMED schema for the recipes table. Check with whoever owns the shared database
-- before running this, and adjust the INSERT in app/api/recipes/route.ts if a table already exists.
-- "user"(id) is better-auth's default user table; change it if yours is named differently.
CREATE TABLE IF NOT EXISTS recipes (
  id                  SERIAL PRIMARY KEY,
  user_id             TEXT NOT NULL REFERENCES "user"(id) ON DELETE CASCADE,
  title               TEXT NOT NULL,
  category            TEXT NOT NULL CHECK (category IN ('sunda', 'solo')),
  method              TEXT NOT NULL CHECK (method IN ('rice-cooker', 'tradisional')),
  image               TEXT NOT NULL DEFAULT '',
  cook_time           TEXT NOT NULL,
  servings            TEXT NOT NULL,
  source              TEXT NOT NULL,
  description         TEXT NOT NULL,
  general_ingredients JSONB NOT NULL,  -- string[]
  ingredients         JSONB NOT NULL,  -- { group, items[] }[]
  instructions        JSONB NOT NULL,  -- string[]
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);
