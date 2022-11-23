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

export type AddNodeProps = {
  isVisibleAddNote: boolean;
  setIsVisibleAddNote: Function;
  addNote: (obj: NoteProp) => void;
  addTag: (obj: TagProp) => void;
};

export type AddTagProps = {
  isVisible: boolean;
  setIsVisible: Function;
  addTag: (obj: TagProp) => void;
};

export type DetailProps = {
  notes: NoteProp[];
  setNotes: Function;
  deleteNote: (id: string) => void;
  addTag: (obj: TagProp) => void;
};

export type EditNodeProps = {
  idNote: string;
  notes: NoteProp[];
  setNotes: Function;
  isVisible: boolean;
  setIsVisible: Function;
  addTag: (obj: TagProp) => void;
};

export type NoteProp = {
  id: string;
  title: string;
  text: string;
  tags: string[];
};

export type TagProp = {
  id: string;
  title: string;
};
