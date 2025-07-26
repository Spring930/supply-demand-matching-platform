CREATE TABLE "achievements" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"title" varchar(255) NOT NULL,
	"summary" text NOT NULL,
	"description" text NOT NULL,
	"full_description" text,
	"type" varchar(50) NOT NULL,
	"industry" varchar(100),
	"region" varchar(100),
	"subject" varchar(100),
	"organization" varchar(255),
	"contact" varchar(255) NOT NULL,
	"contact_person" varchar(100) NOT NULL,
	"maturity_level" varchar(50),
	"application_field" text,
	"technical_advantage" text,
	"cooperation_mode" varchar(100),
	"intellectual_property" text,
	"tags" json,
	"attachments" json,
	"is_hot" integer DEFAULT 0,
	"status" varchar(20) DEFAULT 'active' NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"deleted_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "achievements" ADD CONSTRAINT "achievements_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE no action ON UPDATE no action;