import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { users } from "./schema";

const connectionString = "";
const client = postgres(connectionString);
const db = drizzle(client);

const allUsers = await db.select().from(users);
