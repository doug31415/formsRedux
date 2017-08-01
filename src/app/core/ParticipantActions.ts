import { ACTIONS } from './ParticipantReducer';
import { Action } from 'redux';
import { Participant } from '../participant/participant';

// --------------------
// interfaces
export interface AddParticipantAction extends Action {
  participant: Participant;
}

export interface UpdateParticipantAction extends Action {
  participant: Participant;
}

export interface DeleteParticipantAction extends Action {
  index: number;
}

export interface GoToPageAction extends Action {
  page: number;
}

// --------------------
// all actions
export class ParticipantActions {
  static addParticipant( participant: Participant ): AddParticipantAction {
    return {
      type   : ACTIONS.addParticipant,
      participant: participant
    };
  }

  static updateParticipant( participant: Participant ): UpdateParticipantAction {
    return {
      type   : ACTIONS.updateParticipant,
      participant: participant
    };
  }

  static deleteParticipant( index: number ): DeleteParticipantAction {
    return {
      type : ACTIONS.deleteParticipant,
      index: index
    };
  }



  static goToPage( page: number ): GoToPageAction {
    return {
      type : ACTIONS.goToPage,
      page: page
    };
  }
}
