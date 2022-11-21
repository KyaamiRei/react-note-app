import { useState } from 'react';

import AddNote from './components/AddNote';
import Header from './components/Header';
import MainPage from './Pages/MainPage';

import './styles/App.scss';

export const App = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <div className='wrapper'>
      <AddNote
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
      <Header />
      <MainPage
        isVisible={isVisible}
        setIsVisible={setIsVisible}
      />
    </div>
  );
};
