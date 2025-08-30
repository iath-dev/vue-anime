import type { Content, Demographic } from './base';

export interface Manga extends Content {
  chapters: number | null;
  volumes: number | null;
  status: string;
  publishing: boolean;
  published: {
    from: string | null;
    to: string | null;
    string: string;
  };
  authors: Demographic[];
  serializations: Demographic[];
}
