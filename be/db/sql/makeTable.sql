CREATE TABLE IF NOT EXISTS urls (
  ID            INTEGER         PRIMARY KEY AUTOINCREMENT,
  guid          VARCHAR(1)      GENERATED ALWAYS AS (CHAR((ID % 26) + 97))
                                STORED UNIQUE,
	url           VARCHAR(2000)   NOT NULL,
  date_create   TEXT            NOT NULL,
  date_expire   TEXT            NOT NULL
);

-- (CONCAT(
--   CHAR(((ID / 26) % 26) + 97),
--   CHAR((ID % 26) + 97)
-- ))
