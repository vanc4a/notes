import React from 'react';
import './styles/App.css';
import {Container} from '@mui/material';
import NotesList from './components/NotesList';

function App() {
  return (
    <Container maxWidth='xs' sx={{backgroundColor:'#f2f2f2',height:1/2}}>
        <NotesList />
    </Container>
  );
}

export default App;
