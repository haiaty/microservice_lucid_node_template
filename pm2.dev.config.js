"use strict";

const path = require("path");
const config = require(path.resolve(process.cwd(), "config"));

module.exports = {
  "apps": [
    {
      "name": `dev:${config.APP_NAME}_static_server`,
      "script": "npm",
      "args": ["run", "dev:http-server"],
      "error_file": path.resolve(__dirname, "logs", "pm2", `dev_${config.APP_NAME}_static_server.error.log`),
      "namespace": config.APP_NAME
    }
  ]
};
