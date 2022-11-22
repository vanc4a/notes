import {useState,useEffect} from 'react';
import {List} from '@mui/material';
import NoteItem from './items/NoteItem';
import EditItem from './items/EditItem';
import uuid from 'uuid-random';

const NotesList = () => {
    const [notes,setNotes] = useState([{title: '1123 #12',id: '1234'},{title: '1123 #12121',id: '123445'}]);
    const [tags,setTags] = useState([]);

    const deleteItem = (id: string) => {
        setNotes(notes.filter(note => note.id !== id));
    }

    const updateItem = (id: string,title: string) => {
        notes.map(note => note.id === id ? note.title = title : null)
    }

    const createItem = (title: string) => {
        let item = {title: title, id: uuid()}
        setNotes([...notes,item])
    }

    return(<List>
        {notes.map(item => <NoteItem item={item} deleteItem={deleteItem} updateItem={updateItem}/>)}
        <EditItem createItem={createItem} initial={''}/>
    </List>)
}

export default NotesList;