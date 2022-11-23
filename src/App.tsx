import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { NoteProp, TagProp } from './@types/types';

import AddNote from './components/AddNote';
import AddTag from './components/AddTag';
import Header from './components/Header';
import DetailNote from './Pages/DetailNote';
import MainPage from './Pages/MainPage';

import NoteList from './store/NoteList.json';
import TagList from './store/TagList.json';

import './styles/App.scss';

export const App = () => {
  const [notes, setNotes] = useState<NoteProp[]>([]);
  const [tags, setTags] = useState<TagProp[]>([]);
  const [activTag, setActivTag] = useState('0');

  const [isVisibleAddNote, setIsVisibleAddNote] = useState<boolean>(false);
  const [isVisibleAddTag, setIsVisibleAddTag] = useState<boolean>(false);

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

  const deleteTag = (idTag: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== idTag));
  };

  const onChangeTag = (id: string) => {
    setActivTag(id);
  };

  useEffect(() => {
    JSON.stringify(notes, null, 2);
    console.log('данные изменились');
  }, [notes, tags]);

  useEffect(() => {
    setNotes(NoteList);
    setTags(TagList);
  }, []);

  return (
    <div className='wrapper'>
      <AddNote
        addNote={(obj: NoteProp) => addNote(obj)}
        addTag={(obj: TagProp) => addTag(obj)}
        isVisibleAddNote={isVisibleAddNote}
        setIsVisibleAddNote={setIsVisibleAddNote}
      />
      <AddTag
        addTag={(obj: TagProp) => addTag(obj)}
        isVisible={isVisibleAddTag}
        setIsVisible={setIsVisibleAddTag}
      />
      <Header />
      <Routes>
        <Route
          path=''
          element={
            <MainPage
              notes={notes}
              tags={tags}
              activTag={activTag}
              setActivTag={(id) => onChangeTag(id)}
              deleteTag={(id) => deleteTag(id)}
              isVisibleAddNote={isVisibleAddNote}
              setIsVisibleAddNote={setIsVisibleAddNote}
              isVisibleAddTag={isVisibleAddTag}
              setIsVisibleAddTag={setIsVisibleAddTag}
            />
          }
        />
        <Route
          path='/:id'
          element={
            <DetailNote
              notes={notes}
              setNotes={setNotes}
              addTag={(obj: TagProp) => addTag(obj)}
              deleteNote={(id) => deleteNote(id)}
            />
          }
        />
      </Routes>
    </div>
  );
};
