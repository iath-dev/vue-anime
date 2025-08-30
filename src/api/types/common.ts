import type { MalEntity } from './base';

// Common entity types
export interface MalLink extends Omit<MalEntity, 'images'> {}
