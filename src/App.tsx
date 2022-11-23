import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NoteProp, TagProp } from './@types/types';

import AddNote from './components/AddNote';
import Header from './components/Header';
import DetailNote from './Pages/DetailNote';
import MainPage from './Pages/MainPage';

import NoteList from './store/NoteList.json';
import TagList from './store/TagList.json';

import './styles/App.scss';

export const App = () => {
  const [notes, setNotes] = useState<NoteProp[]>(NoteList);
  const [tags, setTags] = useState<TagProp[]>(TagList);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const addNote = (obj: NoteProp) => {
    setNotes((prev) => [...prev, obj]);
  };

  const addTag = (obj: TagProp) => {
    const findItem = tags.find((item) => item.title === obj.title);
    if (findItem) {
    } else {
      setTags((prev) => [...prev, obj]);
    }
  };

  const deleteNote = (idNote: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== idNote));
  };

  return (
    <div className='wrapper'>
      <AddNote
        addNote={(obj: NoteProp) => addNote(obj)}
        addTag={(obj: TagProp) => addTag(obj)}
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Header />
      <Routes>
        <Route
          path=''
          element={
            <MainPage
              notes={notes}
              tags={tags}
              isVisible={isVisible}
              setIsVisible={setIsVisible}
            />
          }
        />
        <Route
          path='/:id'
          element={
            <DetailNote
              notes={notes}
              setNotes={setNotes}
              deleteNote={deleteNote}
            />
          }
        />
      </Routes>
    </div>
  );
};
