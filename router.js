const express = require("express");

const routes = new express.Router();

const userController = require("./controllers/userController");
const noteController = require("./controllers/noteController");

routes.post("/user/register", userController.addUserController);
routes.post("/user/login", userController.loginUserController);
routes.post("/user/addNote/:id", noteController.addNotesController);
routes.get("/user/getNote/:id", noteController.getNotesController);
routes.delete("/user/deleteNote/:id", noteController.deleteNotesController);
routes.get("/user/getANote/:id", noteController.getANoteController);
routes.put("/user/updateNote/:id", noteController.updateNoteController);

module.exports = routes;
