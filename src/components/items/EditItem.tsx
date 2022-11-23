import {useState} from 'react';
import {ListItem, ListItemText, Box, Chip, IconButton,TextField} from '@mui/material';
import {AddCircleOutline} from '@mui/icons-material'


type Props = {
    createItem: Function;
    initial: string
}

const EditItem = ({createItem,initial} : Props) => {
    const [title,setTitle] = useState<string>(initial);

    const Tags = (str: String) => str.includes('#') ? str.slice(str.indexOf('#')).split(' ') : [];

    return(<ListItem sx={{backgroundColor:'#f2f2f2',mb:1,borderRadius:4}}>
    <ListItemText 
    primary={<TextField 
        fullWidth
        sx={{alignSelf:'stretch'}}
        id="outlined-basic" 
        label="Title" 
        variant="outlined"  
        value={title} 
        onChange={text => {setTitle(text.target.value)}}/>} 
    secondary={<Box>{Tags(title).map(chip => <Chip label={chip} sx={{mr:1,mt:1}}/>)}</Box>} 
    />
    {title.length >= 1 ?  <IconButton onClick={() => {createItem(title); setTitle('')}}>
    <AddCircleOutline/>
    </IconButton> : null}
  </ListItem>)
}

export default EditItem;