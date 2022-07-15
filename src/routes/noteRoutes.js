const express = require("express");
const { getNotes, createNote, deleteNote, updateNote } = require("../controllers/noteController");
const noteRouter = express.Router();
const auth = require("../middleware/auth");

noteRouter.post("/createNote",auth,createNote);
noteRouter.get("/getNotes",auth,getNotes);
noteRouter.delete("/deleteNote/:id",auth,deleteNote); 
noteRouter.put("/updateNotes/:id",auth, updateNote);

module.exports = noteRouter;