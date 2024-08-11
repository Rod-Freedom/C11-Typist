import { readFileSync, writeFileSync } from 'fs';
import Note from './note.js';

export const saveNotes = (note) => {
    const notes = readFileSync('./db/db.json');
    const notesArr = JSON.parse(notes);

    notesArr.push(new Note(note));

    writeFileSync('./db/db.json', JSON.stringify(notesArr, null, 4));
};

export const getNotes = () => {
    const notes = readFileSync('./db/db.json');
    const notesArr = JSON.parse(notes);

    return notesArr
};

export const deleteNote = (id) => {
    const notes = readFileSync('./db/db.json');
    const notesArr = JSON.parse(notes);

    notesArr.forEach((note, index) => {
        if (note.id === id) notesArr.splice(index, 1)
    });

    writeFileSync('./db/db.json', JSON.stringify(notesArr, null, 4));
};