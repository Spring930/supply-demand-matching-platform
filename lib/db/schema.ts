import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  json,
  decimal,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 100 }),
  email: varchar('email', { length: 255 }).notNull().unique(),
  passwordHash: text('password_hash').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const activityLogs = pgTable('activity_logs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  action: text('action').notNull(),
  timestamp: timestamp('timestamp').notNull().defaultNow(),
  ipAddress: varchar('ip_address', { length: 45 }),
  metadata: text('metadata'), // JSON field for additional sharing-related data
});

export const usersRelations = relations(users, ({ many }) => ({
  activityLogs: many(activityLogs),
  demands: many(demands),
  achievements: many(achievements),
}));

export const activityLogsRelations = relations(activityLogs, ({ one }) => ({
  user: one(users, {
    fields: [activityLogs.userId],
    references: [users.id],
  }),
}));

// 需求表
export const demands = pgTable('demands', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  title: varchar('title', { length: 255 }).notNull(),
  summary: text('summary').notNull(),
  description: text('description').notNull(),
  fullDescription: text('full_description'),
  type: varchar('type', { length: 50 }).notNull(),
  industry: varchar('industry', { length: 100 }),
  region: varchar('region', { length: 100 }),
  organization: varchar('organization', { length: 255 }),
  contact: varchar('contact', { length: 255 }).notNull(),
  contactPerson: varchar('contact_person', { length: 100 }).notNull(),
  budget: varchar('budget', { length: 100 }),
  deadline: varchar('deadline', { length: 100 }),
  requirements: json('requirements').$type<string[]>(),
  tags: json('tags').$type<string[]>(),
  urgency: varchar('urgency', { length: 20 }).notNull().default('general'),
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const demandsRelations = relations(demands, ({ one }) => ({
  user: one(users, {
    fields: [demands.userId],
    references: [users.id],
  }),
}));

// 成果表
export const achievements = pgTable('achievements', {
  id: serial('id').primaryKey(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id),
  title: varchar('title', { length: 255 }).notNull(),
  summary: text('summary').notNull(),
  description: text('description').notNull(),
  fullDescription: text('full_description'),
  type: varchar('type', { length: 50 }).notNull(),
  industry: varchar('industry', { length: 100 }),
  region: varchar('region', { length: 100 }),
  subject: varchar('subject', { length: 100 }), // 主体类型（企业、高校、科研院所等）
  organization: varchar('organization', { length: 255 }),
  contact: varchar('contact', { length: 255 }).notNull(),
  contactPerson: varchar('contact_person', { length: 100 }).notNull(),
  maturityLevel: varchar('maturity_level', { length: 50 }), // 成熟度
  applicationField: text('application_field'), // 应用领域
  technicalAdvantage: text('technical_advantage'), // 技术优势
  cooperationMode: varchar('cooperation_mode', { length: 100 }), // 合作方式
  intellectualProperty: text('intellectual_property'), // 知识产权情况
  tags: json('tags').$type<string[]>(),
  attachments: json('attachments').$type<string[]>(), // 附件文件
  isHot: integer('is_hot').default(0), // 是否热门（0/1）
  status: varchar('status', { length: 20 }).notNull().default('active'),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow(),
  deletedAt: timestamp('deleted_at'),
});

export const achievementsRelations = relations(achievements, ({ one }) => ({
  user: one(users, {
    fields: [achievements.userId],
    references: [users.id],
  }),
}));

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
export type ActivityLog = typeof activityLogs.$inferSelect;
export type NewActivityLog = typeof activityLogs.$inferInsert;
export type Demand = typeof demands.$inferSelect;
export type NewDemand = typeof demands.$inferInsert;
export type Achievement = typeof achievements.$inferSelect;
export type NewAchievement = typeof achievements.$inferInsert;

export enum ActivityType {
  SIGN_UP = 'SIGN_UP',
  SIGN_IN = 'SIGN_IN',
  SIGN_OUT = 'SIGN_OUT',
  UPDATE_PASSWORD = 'UPDATE_PASSWORD',
  DELETE_ACCOUNT = 'DELETE_ACCOUNT',
  UPDATE_ACCOUNT = 'UPDATE_ACCOUNT',
  SHARE_CREATED = 'SHARE_CREATED',
  SHARE_ACCESSED = 'SHARE_ACCESSED',
  SHARE_UPDATED = 'SHARE_UPDATED',
  SHARE_DELETED = 'SHARE_DELETED',
}