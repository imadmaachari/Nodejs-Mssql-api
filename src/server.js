"use strict";
/**
 * SERVER CONFIGURATION
 */
const Hapi = require("hapi");
const routes = require("./routes");
const plugins = require("./plugins");

const app = async config => {
  const { host, port } = config;

  //create an instance of hapi
  const server = Hapi.Server({ host, port });

  //store the config for later use
  server.app.config = config;

  //register plugins
  await plugins.register(server);

  //register routes
  await routes.register(server);

  return server;
};

module.exports = app;
