import { Participant } from '../participant/participant';

export interface AppState {
  participants: Participant[];
  currentPage: number;
}
