//use once, apply routes to apps

const applyRoutes = (app) => {
  //first api
  app.get("/", (req, res) => res.send(`API is running fine`));

  //create-user api, login-user, channel creation, search user for channel, channel list, send message api
  // can also add seen, read, etc...

  //creating a user, post type api,
  app.post("/user", (req, res) => res.send(`create user`));
  //login
  app.post("/login", (req, res) => res.send(`login`));
  //   channel
  app.post("/channel", (req, res) => res.send(`channel`));
  //search user
  app.get("/search-user", (req, res) => res.send(`search user`));

  //channel list
  app.get("/channel-list", (req, res) => res.send(`channel-list`));

  //   send messages
  app.post("/message", (req, res) => res.send(`message`));
};

export default applyRoutes;
