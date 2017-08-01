import { Component } from '@angular/core';
import { Reducer, Store, createStore, Action } from 'redux';
import { AppState } from './core/AppState';
import { participantReducer } from './core/ParticipantReducer';
import { ParticipantActions } from './core/ParticipantActions';
import { Participant } from './participant/participant';
import { ReviewState } from './enums/Enums';


@Component( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.css' ]
} )

export class AppComponent {

  reducer: Reducer<AppState>;
  initialState: AppState;
  store: Store<AppState>;

  constructor() {
    console.log( 'AppComponent constructor' );

    this.reducer = ( state: AppState, action: Action ) => {
      return participantReducer( state, action );
    };

    this.initialState = { participants: [], currentPage: 0 };
    this.store        = createStore<AppState>( this.reducer, this.initialState );

    console.log( 'initial state', this.store.getState() );

    const p1 = new Participant( 'Bob', 22, false, 'radiation', 'wierdo-12', ReviewState.NotAccepted );
    const p2 = new Participant( 'Alice', 13, true, '', 'muto', ReviewState.NotAccepted );
    const p3 = new Participant( 'Lynn', 59, true, 'none', 'xchrome', ReviewState.NotAccepted );

    this.store.dispatch( ParticipantActions.addParticipant( p1 ) );
    console.log( '1st state', this.store.getState() );

    this.store.dispatch( ParticipantActions.addParticipant( p2 ) );
    console.log( '2nd state', this.store.getState() );

    this.store.dispatch( ParticipantActions.addParticipant( p3 ) );
    console.log( '3nd state', this.store.getState() );
  }
}
