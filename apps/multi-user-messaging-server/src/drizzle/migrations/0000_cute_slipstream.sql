DO $$ BEGIN
 CREATE TYPE "public"."messageStatus" AS ENUM('sent', 'delivered', 'seen');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."messageType" AS ENUM('text', 'image', 'video');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."role" AS ENUM('admin', 'coadmin', 'customers');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."status" AS ENUM('online', 'sleeping', 'at work', 'out station', 'do not disturb');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "chatRooms" (
	"chatRoomID" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"participants" varchar[],
	"admin" varchar NOT NULL,
	"coAdmins" varchar[],
	"isGroup" boolean DEFAULT false,
	"groupAvatar" varchar,
	"groupDescription" varchar(255)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "messages" (
	"messageID" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"senderID" varchar NOT NULL,
	"receiverID" varchar NOT NULL,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now(),
	"messageType" "messageType" NOT NULL,
	"messageStatus" "messageStatus" DEFAULT 'sent',
	"content" varchar NOT NULL,
	"seenAt" timestamp,
	"deliveredAt" timestamp,
	"sizeOfMessage" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"userID" varchar PRIMARY KEY NOT NULL,
	"username" varchar NOT NULL,
	"email" varchar NOT NULL,
	"status" "status" DEFAULT 'online',
	"archived" varchar[],
	"blocked" varchar[],
	"isOnline" boolean DEFAULT false,
	"role" "role" DEFAULT 'customers',
	"about" varchar(255),
	"lastSeen" timestamp DEFAULT now(),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
