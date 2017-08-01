import { AppState } from './AppState';
import {
  AddParticipantAction, DeleteParticipantAction, EditParticipantAction, GoToPageAction,
  UpdateParticipantAction
} from './ParticipantActions';
import * as _ from 'lodash';
import { Action } from 'redux';

// --------------------
// consts
export const ACTIONS = {
  addParticipant   : 'addParticipant',
  updateParticipant: 'updateParticipant',
  deleteParticipant: 'deleteParticipant',
  editParticipant  : 'editParticipant',
  goToPage         : 'goToPage'
};

// --------------------
// reducer
export function participantReducer( state: AppState, action?: Action ) {

  let idx: number;
  switch ( action.type ) {

    case ACTIONS.addParticipant:
      console.log( 'participantReducer addParticipant' );
      return {
        participants: state.participants.concat(
          (<AddParticipantAction>action).participant
        ),
        selectedParticipant: state.selectedParticipant,
        editMode: false
      };

    case ACTIONS.updateParticipant:
      console.log( 'participantReducer updateParticipant' );
      idx = _.findIndex( state.participants, (<UpdateParticipantAction>action).participant );
      return {
        participants: [
          ...state.participants.slice( 0, idx ),
          (<UpdateParticipantAction>action).participant,
          ...state.participants.slice( idx + 1, state.participants.length )
        ],
        selectedParticipant: state.selectedParticipant,
        editMode: false
      };

    case ACTIONS.deleteParticipant:
      console.log( 'participantReducer deleteParticipant' );
      idx = (<DeleteParticipantAction>action).index;
      return {
        participants: [
          ...state.participants.slice( 0, idx ),
          ...state.participants.slice( idx + 1, state.participants.length )
        ],
        selectedParticipant: state.selectedParticipant,
        editMode: false
      };

    case ACTIONS.editParticipant:
      console.log( 'participantReducer editParticipant' );
      return {
        participants: [...state.participants],
        selectedParticipant:  (<EditParticipantAction>action).participant,
        editMode: true
      };

    default :
      return state;
  }

}
