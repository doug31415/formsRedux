import { Injectable } from '@angular/core';
import { Action, createStore, Reducer, Store } from 'redux';
import { AppState } from './AppState';
import { participantReducer } from './ParticipantReducer';
import { Participant } from '../participant/participant';

@Injectable()
export class ParticipantStore {

  // --------------------
  // vars

  private _reducer: Reducer<AppState>;
  private _initialState: AppState;
  private _store: Store<AppState>;

  // --------------------
  // constructor
  constructor() {
    this._reducer = ( state: AppState, action: Action ) => {
      return participantReducer( state, action );
    };

    this._initialState = {
      participants       : [],
      selectedParticipant: new Participant(),
      editMode           : false
    };

    this._store = createStore<AppState>( this._reducer, this._initialState );

    console.log( 'initial state', this._store.getState() );
  }

  // --------------------
  // functions

  getState() {
    return this._store.getState();
  }

  dispatch( a: Action ) {
    return this._store.dispatch( a );
  }
}
