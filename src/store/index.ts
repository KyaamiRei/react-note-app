import fs from 'fs';
import { NoteProp, TagProp } from '../@types/types';

export const saveNoteToJSON = (noteList: NoteProp[]) => {
  fs.writeFileSync('src/store/NoteList.json', JSON.stringify(noteList));
};
export const saveTagToJSON = (tagList: TagProp) => {
  fs.writeFileSync('src/store/TagList.json', JSON.stringify(tagList));
};
