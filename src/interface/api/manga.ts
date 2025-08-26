import type { MalLink } from "./common";
import type { Content } from './content';

// Manga types
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
  authors: MalLink[];
  serializations: MalLink[];
}
