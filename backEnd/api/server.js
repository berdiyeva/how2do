const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const restrict = require("../auth/restrict");
const welcomeRouter = require("../welcomeRouter/welcome");
const usersRouter = require("../auth/auth-router");
const postsRouter = require("../howTo/posts-router");
const ratesRouter = require("../howTo/rate-router");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use(welcomeRouter);
server.use("/api/users", usersRouter);
server.use("/api/posts", restrict, postsRouter);
server.use("/api/rates", restrict, ratesRouter);

module.exports = server;
