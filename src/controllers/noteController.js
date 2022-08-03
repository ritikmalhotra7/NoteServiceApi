const note = require("../models/note");

const createNote = async(request,response) =>{
    
    const title = request.body.title;
    const desc = request.body.description;
    console.log(title,desc);
    const newNote = new note({
        title:title,
        description:desc,
        userId:request.userId
    });
    try {
        await newNote.save();
        response.status(201).json(newNote);
    } catch (error) {
        console.log(error);
        response.status(500).json({message:"Something went wrong"});
    }
}
const updateNote = async(request,response)=>{
    const id = request.params.id;
    const title = request.body.title;
    const desc = request.body.description;
    const newNote = {
        title:title,
        description:desc,
        userId:request.id
    }
    try {
        console.log(newNote);
        await note.findByIdAndUpdate(id,newNote,{new:true});
        response.status(200).json(newNote);
    } catch (error) {
        console.log(error);
        response.status(500).json({message:"Something went wrong"});
    }

}
const deleteNote = async(request,response) =>{
    const id = request.params.id;
    try {
        const Deletednote = await note.findByIdAndRemove(id);
        response.status(202).json(Deletednote);
    } catch (error) {
        console.log(error);
        response.status(500).json({message:"Something went wrong"});
    }
}
const getNotes = async(request,response) =>{
    try {
        const notes = await note.find({
            userId:request.userId
        });
        response.status(200).json(notes);
    } catch (error) {
        console.log(error);
        response.status(500).json({message:"Something went wrong"});
    }
}
module.exports = {createNote,
    updateNote,deleteNote,getNotes
}
