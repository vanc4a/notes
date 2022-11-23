import {useState,useEffect} from 'react';
import {List, Chip, Box} from '@mui/material';
import NoteItem from './items/NoteItem';
import EditItem from './items/EditItem';
import uuid from 'uuid-random';
import NotesRepository from '../repositories/NotesRepository';
import Note from '../interfaces/Note';

const NotesList = () => {
    const [notes,setNotes] = useState<Note[]>([]);
    const [tags,setTags] = useState<string[]>([]);
    const [search,setSearch] = useState<string | null>(null)
    const notesRepository = new NotesRepository();

    useEffect(() => {
        setNotes(notesRepository.get());
        tagSorting();
    },[notes.length, tags.length])  

    const tagSorting = () => {
        let tmp = notes;
        let tagArr : string[] = []
        tmp.map(note => {
            let itemTags = note.title.includes('#') ? note.title.slice(note.title.indexOf('#')).split(' ') : [];
            itemTags.map(tag => tagArr.includes(tag) ? null : tagArr.push(tag))
        });
        setTags(tagArr);
    }

    const deleteItem = (id: string) => {
        console.log(id)
        notesRepository.delete(id);
        setNotes(notes.filter(note => note.id !== id));
    }

    const updateItem = (id: string,title: string) => {
        notesRepository.update(id,title);
        notes.map(note => note.id === id ? note.title = title : null)
        tagSorting();
    }

    const createItem = (title: string) => {
        let item = {title: title, id: uuid()}
        notesRepository.set(item)
        setNotes([...notes,item])
    }

    return(<List>
        <Box>{tags.map(tag => <Chip onClick={() => search === tag ? setSearch(null) :
            setSearch(tag)} color={tag === search ? 'primary' : 'default'} sx={{mr:1,mb:1}} label={tag}/>)}</Box>
        {notes.filter(note => !search ? true : note.title.includes(search))
            .map(item => <NoteItem item={item} deleteItem={deleteItem} updateItem={updateItem}/>)}
        <EditItem createItem={createItem} initial={''}/>
    </List>)
}

export default NotesList;