import { AppState } from './AppState';
import { AddParticipantAction, DeleteParticipantAction, GoToPageAction, UpdateParticipantAction } from './ParticipantActions';
import * as _ from 'lodash';
import { Action } from 'redux';

// --------------------
// consts
export const ACTIONS = {
  addParticipant   : 'addParticipant',
  updateParticipant: 'updateParticipant',
  deleteParticipant: 'deleteParticipant',
  goToPage: 'goToPage'
};

// --------------------
// reducer
export function participantReducer( state: AppState, action?: Action ) {

  let idx: number;
  switch ( action.type ) {
    case ACTIONS.addParticipant:
      return {
        participants: state.participants.concat(
          (<AddParticipantAction>action).participant
        ),
        currentPage: state.currentPage
      };

    case ACTIONS.updateParticipant:
      idx = _.findIndex( state.participants, (<UpdateParticipantAction>action).participant );
      return {
        participants: [
          ...state.participants.slice( 0, idx ),
          (<UpdateParticipantAction>action).participant,
          ...state.participants.slice( idx + 1, state.participants.length )
        ],
        currentPage: state.currentPage
      };

    case ACTIONS.deleteParticipant:
      idx = (<DeleteParticipantAction>action).index;
      return {
        participants: [
          ...state.participants.slice( 0, idx ),
          ...state.participants.slice( idx + 1, state.participants.length )
        ],
        currentPage: state.currentPage
      };

    case ACTIONS.goToPage:
      idx = (<GoToPageAction>action).page;
      return {
        participants: [
          ...state.participants
        ],
        currentPage: (<GoToPageAction>action).page
      };

    default :
      return state;
  }

}
