CREATE TABLE "demands" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"summary" text NOT NULL,
	"description" text NOT NULL,
	"full_description" text,
	"type" varchar(50) NOT NULL,
	"industry" varchar(100),
	"region" varchar(100),
	"organization" varchar(255),
	"contact" varchar(255) NOT NULL,
	"contact_person" varchar(100) NOT NULL,
	"budget" varchar(100),
	"deadline" varchar(100),
	"requirements" json,
	"tags" json,
	"urgency" varchar(20) DEFAULT 'general' NOT NULL,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "demands" ADD CONSTRAINT "demands_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;