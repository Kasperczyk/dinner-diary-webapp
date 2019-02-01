import {Course} from './course';

export interface Menu {
  cookedOn: Date;
  description: string;
  partners: string[];
  guests: string[];
  courses: Course[];
}
