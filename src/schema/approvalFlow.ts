import { MySqlTable, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
export const ApprovalFlow = mysqlTable("approvalflow",{
id: serial("id").primaryKey(),
name: varchar("name",{length: 255}),
// flows: c
})