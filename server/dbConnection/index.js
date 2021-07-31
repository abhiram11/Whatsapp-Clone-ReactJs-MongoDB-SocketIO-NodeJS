//have connection code
import mongoose from "mongoose";

//2 approaches, have mogodb installed, connect by 'mongodb://localhost:27017/test'
//or the other is below
// const DB_CONNECTION_URL = "mongodb://localhost:27017/test";

//responsible for connection btwn mongoose
const connectDB = () => {
  console.log("DB trying to connect on " + new Date());
  const options = {
    keepAlive: 1, // keep connection alive
    autoReconnect: true,
    poolSize: 10,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  return mongoose.connect(DB_CONNECTION_URL, options); // this is a promise
};

export default connectDB;
