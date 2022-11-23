export type MainPageProps = {
  isVisible: boolean;
  setIsVisible: Function;
  notes: NoteProp[];
  tags: TagProp[];
};

export type AddNodeProps = {
  isVisible: boolean;
  setIsVisible: Function;
  addNote: (obj: NoteProp) => void;
  addTag: (obj: TagProp) => void;
};

export type EditNodeProps = {
  idNote: string;
  notes: NoteProp[];
  setNotes: Function;
  isVisible: boolean;
  setIsVisible: Function;
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
