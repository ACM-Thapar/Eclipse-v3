import { app } from "./app";
import { MongooseError } from "mongoose";
import { connectDb } from "./database/connection";
import "dotenv/config";
function checkEnv() {
  const env = ["PORT", "COOKIE_NAME", "JWT_SECRET", "MONGO_URI"];
  env.forEach((data) => {
    if (!process.env[data]) {
      console.log(`${data} env not found`);
      process.exit(1);
    }
  });
  //   console.log(process.env.PORT);
}

async function initServer() {
  checkEnv();

  try {
    await connectDb(process.env.MONGO_URI!);
    console.log("Connected to Mongodb");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
    }
  }

  app.listen(process.env.PORT, () => {
    console.log("Server listening on PORT ", process.env.PORT);
  });
}

initServer();
