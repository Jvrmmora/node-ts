import "dotenv/config";
import { connect, set } from "mongoose"; //DECLARADO EL PAQUETE

const NODE_ENV = process.env.NODE_ENV;

async function dbConnect(): Promise<void> {
  const DB_URI = <string>process.env.DB_URI;
  set("strictQuery", false);
  await connect(DB_URI);
}

export default dbConnect;
