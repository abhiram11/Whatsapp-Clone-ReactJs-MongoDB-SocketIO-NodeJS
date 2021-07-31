import APP from "express";
import connectDB from "./dbConnection";
import configureExpressApp from "./config";
import applyRoutes from "./routes";

const app = new APP(); // now we have express app ready
configureExpressApp(app);

const PORT = 3001; //since project running on port 3000

// const connectDB = () => {};

const startServer = () => {
  //before starting server, we create db server, initiate things..
  //db connection code, queue connections, cron jobs,
  Promise.all([connectDB()]).then(() => {
    app.listen(PORT);
    console.log(`Server started on port ${PORT}`);
    applyRoutes(app);
  });
};

startServer();
