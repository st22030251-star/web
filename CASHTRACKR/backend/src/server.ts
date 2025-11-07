import express from "express";
import colors from "colors";
import morgan from "morgan";
import { db } from "./config/db";

async function connectDB() {
  try {
    await db.authenticate();
    await db.sync();
    console.log(colors.blue.bold("Conexion exitosa con la DB"));
  } catch (error) {
    console.log(colors.blue.bold("Conexion Fallida"));
  }
}
const app = express();

app.use(morgan("dev"));

app.use(express.json());

export default app;