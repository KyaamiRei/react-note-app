import fs from 'fs';

const note = [
  {
    id: '10',
    title: 'Название для заметки',
    text: 'Ну это , просто текст как то вот так вот ага',
    tags: ['#shop', '#music', '#world'],
  },
  {
    id: '1qwe9',
    title: 'Название для заметки',
    text: 'Ну это , просто текст как то вот так вот ага',
    tags: ['#shop', '#music', '#world'],
  },
];

fs.writeFile('src/store/NoteList.json', JSON.stringify(note), (error: any) => {
  if (error) console.log(error);
});
