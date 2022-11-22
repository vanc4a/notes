import React from 'react';
import './styles/App.css';
import {Container, List} from '@mui/material';
import NoteItem from './components/NoteItem';

function App() {
  return (
    <Container maxWidth='xs' sx={{backgroundColor:'#f2f2f2'}}>
      <List>
      <NoteItem item={'11343234 34243124 13142141'}/>
      <NoteItem item={'11343234 #sfsf #afs'}/>
      <NoteItem item={'11343234 #fsfs #dgdd'}/>
      </List>
    </Container>
  );
}

export default App;
