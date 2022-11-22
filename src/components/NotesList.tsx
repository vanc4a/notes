import {useState,useEffect} from 'react';
import {List} from '@mui/material';
import NoteItem from './items/NoteItem';
import AddItem from './items/AddItem';
import uuid from 'uuid-random';

const NotesList = () => {
    const [notes,setNotes] = useState([{title: '1123 #12',id: '1234'},{title: '1123 #12121',id: '123445'}]);

    const deleteItem = (id: string) => {
        setNotes(notes.filter(note => note.id != id));
    }

    const updateItem = (item: any) => {

    }

    const createItem = (title: string) => {
        let item = {title: title, id: uuid()}
        setNotes([...notes,item])
        console.log(notes)
    }

    return(<List>
        {notes.map(item => <NoteItem item={item} deleteItem={deleteItem}/>)}
        <AddItem createItem={createItem}/>
    </List>)
}

export default NotesList;