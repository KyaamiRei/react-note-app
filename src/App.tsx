import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

// import { saveNoteToJSON, saveTagToJSON } from './store';

import { NoteProp, TagProp } from './@types/types';

import AddNote from './components/AddNote';
import AddTag from './components/AddTag';
import Header from './components/Header';
import DetailNote from './Pages/DetailNote';
import MainPage from './Pages/MainPage';

import NoteList from './store/NoteList.json';
import TagList from './store/TagList.json';

import './styles/App.scss';

// основной компонент приложения
export const App = () => {
  // хук для редиректа со страницы заметки, при ее удалении
  const navigate = useNavigate();

  const [notes, setNotes] = useState<NoteProp[]>([]); // состояния для наших заметок
  const [tags, setTags] = useState<TagProp[]>([]); // состояние для тегов
  const [activTag, setActivTag] = useState('0'); // состояние выбранного тега, для сортировки

  const [isVisibleAddNote, setIsVisibleAddNote] = useState<boolean>(false); // состояние для показа окна добавления заметки
  const [isVisibleAddTag, setIsVisibleAddTag] = useState<boolean>(false); // состояние для показа окна добавления тега

  // добавление заметки
  const addNote = (obj: NoteProp) => {
    setNotes((prev) => [...prev, obj]);
  };

  // добавление тега, если такой уже существует, то ничего не происходит
  const addTag = (obj: TagProp) => {
    const findItem = tags.find((item) => item.title === obj.title);
    if (findItem) {
    } else {
      setTags((prev) => [...prev, obj]);
    }
  };

  // удаление заметки
  const deleteNote = (idNote: string) => {
    navigate('/');
    setNotes((prev) => prev.filter((note) => note.id !== idNote));
  };

  // удаление тега
  const deleteTag = (idTag: string) => {
    setTags((prev) => prev.filter((tag) => tag.id !== idTag));
  };

  // выбор тега для сортировки
  const onChangeTag = (id: string) => {
    // saveNoteToJSON(notes);
    // saveTagToJSON(tags);
    setActivTag(id);
  };

  // при изменении состояния записок или тега, сохраняет изменения в JSON
  useEffect(() => {
    console.log('данные изменились');
  }, [notes, tags]);

  // при первом запуске приложения данный из JSON загружаются в состояние
  useEffect(() => {
    try {
      setNotes(NoteList);
      setTags(TagList);
    } catch (error) {
      alert('Ошибка при загрузке данных');
      console.log(error);
    }
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
