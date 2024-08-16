CREATE TABLE IF NOT EXISTS "user" (
	"$userId" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"userName" varchar(16) NOT NULL
);
