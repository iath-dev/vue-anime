import type { MalEntity } from './common';

// Person types
export interface Person extends MalEntity {
  given_name: string | null;
  family_name: string | null;
  alternate_names: string[];
  favorites: number;
  about: string | null;
  birthday: string | null;
  website_url: string | null;
}
