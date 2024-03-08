import mongoose from "mongoose";

const mongoDbUrl = process.env.MONGODB_URL;

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDb = async () => {
  console.log("HELLO")
  if (cached.conn) return cached.conn;

  if (!mongoDbUrl) throw new Error("MONGODB_URL is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(mongoDbUrl, {
      dbName: "eventEase",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;

  return cached.conn;
};
