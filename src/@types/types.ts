// типы props компонентов и объектов

// Основная страницы
export type MainPageProps = {
  isVisibleAddNote: boolean;
  setIsVisibleAddNote: (isVisible: boolean) => void;
  isVisibleAddTag: boolean;
  setIsVisibleAddTag: (isVisible: boolean) => void;
  deleteTag: (id: string) => void;
  notes: NoteProp[];
  tags: TagProp[];
  activTag: string;
  setActivTag: (id: string) => void;
};

// модальное окно для добавление заметки
export type AddNodeProps = {
  isVisibleAddNote: boolean;
  setIsVisibleAddNote: Function;
  addNote: (obj: NoteProp) => void;
  addTag: (obj: TagProp) => void;
};

// модальное окно для добавление тега
export type AddTagProps = {
  isVisible: boolean;
  setIsVisible: Function;
  addTag: (obj: TagProp) => void;
};

// страница детального просмотра заметки
export type DetailProps = {
  notes: NoteProp[];
  setNotes: Function;
  deleteNote: (id: string) => void;
  addTag: (obj: TagProp) => void;
};

// модальное окно для редактирования заметки
export type EditNodeProps = {
  idNote: string;
  notes: NoteProp[];
  setNotes: Function;
  isVisible: boolean;
  setIsVisible: Function;
  addTag: (obj: TagProp) => void;
};

// типы для компонента тегов
export type TagProps = {
  tagList: TagProp[];
  activTag: string;
  setActivTag: (id: string) => void;
  deleteTag: (id: string) => void;
};

// типы для можели заметки
export type NoteProp = {
  id: string;
  title: string;
  text: string;
  tags: string[];
};

// типы для можели тега
export type TagProp = {
  id: string;
  title: string;
};
