import {useState} from 'react';
import {ListItem, ListItemText, Box, Chip, IconButton} from '@mui/material';
import {HighlightOff} from '@mui/icons-material';
import Note from '../../interfaces/Note';
import EditItem from './EditItem';

type NoteProps = {
    item: Note;
    deleteItem: Function;
    updateItem: Function;
};

const NoteItem = ({item,deleteItem,updateItem} : NoteProps) => {
    const [isEditing,setEditing] = useState<boolean>(false)

    const Title = (str: string) => str.includes('#') ? str.slice(0,str.indexOf('#')) : str;
    const Tags = (str: string) => str.includes('#') ? str.slice(str.indexOf('#')).split(' ') : [];
    const Update = (str: string) => {setEditing(false);updateItem(item.id, str)}

    if(isEditing){
      return <EditItem createItem={Update} initial={item.title}/>
    }

    return(<ListItem sx={{backgroundColor:'#f2f2f2',mb:1,borderRadius:4}} onClick={() => setEditing(true)} >
    <ListItemText primary={Title(item.title)} secondary={<Box>{Tags(item.title).map(chip => <Chip label={chip} sx={{mr:1,mt:1}}/>)}</Box>} />
    <IconButton  onClick={() => deleteItem(item.id)}>
    <HighlightOff />
    </IconButton>
  </ListItem>)
}

export default NoteItem;