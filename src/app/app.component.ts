import { Component } from '@angular/core';
import { ParticipantActions } from './core/ParticipantActions';
import { Participant } from './participant/participant';
import { ReviewState } from './enums/Enums';
import { ParticipantStore } from './core/ParticipantStore';


@Component( {
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
} )

export class AppComponent {

  store: ParticipantStore;

  constructor( participantStore: ParticipantStore ) {
    console.log( 'AppComponent constructor' );

    this.store = participantStore;

    console.log( 'initial state', this.store.getState() );

    const p1 = new Participant( 'Bob', 22, false, 'radiation', 'wierdo-12', 0 );
    const p2 = new Participant( 'Alice', 13, false, '', 'muto', 1 );
    const p3 = new Participant( 'Lynn', 59, false, 'none', 'xchrome', 2 );

    this.store.dispatch( ParticipantActions.addParticipant( p1 ) );
    console.log( '1st state', this.store.getState() );

    this.store.dispatch( ParticipantActions.addParticipant( p2 ) );
    console.log( '2nd state', this.store.getState() );

    this.store.dispatch( ParticipantActions.addParticipant( p3 ) );
    console.log( '3nd state', this.store.getState() );
  }
}
