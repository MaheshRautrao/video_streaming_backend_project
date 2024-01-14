import mongoose from "mongoose";
import { DATABASE_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.DB_CONNECTION_URL_before_db_name + DATABASE_NAME + process.env.DB_CONNECTION_URL_after_db_name}`
    );
    console.log(
      `\n mongodb connected || DB host: ${connectionInstance.connection.host} || DB name: ${connectionInstance.connection.name}`
    );
  } catch (error) {
    console.log("Error in dbConnection : ", error);
    process.exit(1);
  }
};

export default connectDB;
