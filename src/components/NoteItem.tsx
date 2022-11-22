import {ListItem, ListItemText, Box, Chip, IconButton} from '@mui/material';
import {Delete} from '@mui/icons-material';

type NoteProps = {
    item: string;
};

const NoteItem = ({item} : NoteProps) => {

    const Title = (str: String) => str.slice(0,str.indexOf('#'));
    const Tags = (str: String) => str.includes('#') ? str.slice(str.indexOf('#')).split(' ') : [];

    return(<ListItem sx={{backgroundColor:'white'}}>
    <ListItemText primary={Title(item)} secondary={<Box>{Tags(item).map(chip => <Chip label={chip} sx={{mr:1,mt:1}}/>)}</Box>} />
    <IconButton>
    <Delete />
    </IconButton>
  </ListItem>)
}

export default NoteItem;