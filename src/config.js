//configurar variable de entorno para conexion de BD
import {config } from "dotenv";

config();

export const MONGODB_URI =process.env.MONGODB_URI;