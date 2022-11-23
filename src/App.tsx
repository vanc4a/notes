import React from 'react';
import './styles/App.css';
import {Container} from '@mui/material';
import NotesList from './components/NotesList';

function App() {
  return (
    <Container maxWidth='xs'>
        <NotesList />
    </Container>
  );
}

export default App;
