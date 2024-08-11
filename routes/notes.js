import { Router } from "express";
import { getNotes, saveNotes, deleteNote } from "../modules/data.js";

const nRouter = Router();

export default nRouter;

nRouter.get('/', (req, res) => {
    const notes = getNotes();
    res.json(notes);
});

nRouter.post('/', (req, res) => {
    const { body: note, body: { title, text } } = req; 
    
    if (!title || !text) return res.status(400).json('Wrong format received.')
    
    saveNotes(note);
    res.status(200).json('Note added succesfully');
});

nRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const errMsg = 'Can\'t delete the demo note';

    if (id === '5363') return res.status(400).send({ error: errMsg });

    deleteNote(id);
    res.status(200).json('Note deleted succesfully');
});