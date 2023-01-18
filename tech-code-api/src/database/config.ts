import { Pool } from "pg";

const connectionString = process.env.CONNECTION_STRING;

const db = new Pool({ connectionString });

export default db;