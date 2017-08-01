import { Participant } from '../participant/participant';

export interface AppState {
  participants: Participant[];
  selectedParticipant: Participant;
  editMode: boolean;
}
