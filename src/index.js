import dotenv from "dotenv";
import connectDB from "./db/dbConnection.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server is running on port : ${process.env.PORT}`);
    })
  )
  .catch((error) => {
    console.log("Mongo db connection failed", error);
  });
