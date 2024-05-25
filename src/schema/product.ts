import { MySqlTable, mysqlTable, serial, int, varchar } from "drizzle-orm/mysql-core";
export const product = mysqlTable("product", {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 255 }),
    description: varchar("description", { length: 255 }),
    price: varchar("price", { length: 255 }),
    image: varchar("image", { length: 255 }),
    sku: int("sku"),
    createdAt: varchar("createdAt", { length: 255 })
})

// Product Type 
export type ProductType = {
    id: number;
    name: string;
    description: string;
    price: string;
    image: string;
    sku: number;
    createdAt: string;
};
