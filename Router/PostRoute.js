const express = require("express");
const PostController = require("../Controller/Post");
const route = express.Router();

route.post("/post/create", PostController.createPost);

module.exports = route;
