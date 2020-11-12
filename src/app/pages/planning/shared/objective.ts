import { Review } from '../../performance-review/shared/review';
import { Agreement } from './agreement';

export interface Objective {
  id?: string;
  name: string;
  description?: string;
  orgUnitLevel?: string;
  applicable?: boolean;
  group?: string;
  lastModified: Date;
  agreements?: Agreement[];
  review?: Review[];
}
