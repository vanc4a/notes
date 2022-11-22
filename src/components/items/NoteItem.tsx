import {ListItem, ListItemText, Box, Chip, IconButton} from '@mui/material';
import {HighlightOff} from '@mui/icons-material';
import Note from '../../interfaces/Note';

type NoteProps = {
    item: Note;
    deleteItem: Function;
};

const NoteItem = ({item,deleteItem} : NoteProps) => {

    const Title = (str: String) => str.includes('#') ? str.slice(0,str.indexOf('#')) : str;
    const Tags = (str: String) => str.includes('#') ? str.slice(str.indexOf('#')).split(' ') : [];

    return(<ListItem sx={{backgroundColor:'white',mb:1}}>
    <ListItemText primary={Title(item.title)} secondary={<Box>{Tags(item.title).map(chip => <Chip label={chip} sx={{mr:1,mt:1}}/>)}</Box>} />
    <IconButton  onClick={() => deleteItem(item.id)}>
    <HighlightOff />
    </IconButton>
  </ListItem>)
}

export default NoteItem;