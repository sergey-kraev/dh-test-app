export type File = {
  id: number;
  title: string;
  level: number;
};

export type Folder = {
  id: number;
  title: string;
  children?: (Folder | File)[];
  level: number;
};
