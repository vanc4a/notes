import {useState,useEffect} from 'react';
import {List} from '@mui/material';
import NoteItem from './items/NoteItem';
import EditItem from './items/EditItem';
import uuid from 'uuid-random';
import NotesRepository from '../repositories/NotesRepository';

const NotesList = () => {
    const [notes,setNotes] = useState([]);
    const [tags,setTags] = useState([]);
    const notesRepository = new NotesRepository();

    useEffect(() => {
        setNotes(notesRepository.get())
    })  

    const deleteItem = (id: string) => {
        console.log(notes)
        notesRepository.delete(id);
    }

    const updateItem = (id: string,title: string) => {
        notesRepository.update(id,title);
    }

    const createItem = (title: string) => {
        let item = {title: title, id: uuid()}
        notesRepository.set(item)
    }

    return(<List>
        {notes.map(item => <NoteItem item={item} deleteItem={deleteItem} updateItem={updateItem}/>)}
        <EditItem createItem={createItem} initial={''}/>
    </List>)
}

export default NotesList;