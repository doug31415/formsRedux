import { Component, OnInit } from '@angular/core';
import { ParticipantActions } from '../core/ParticipantActions';
import { ReviewState } from '../enums/Enums';
import { ParticipantStore } from '../core/ParticipantStore';
import { Router } from '@angular/router';

@Component( {
  selector   : 'app-display-participant',
  templateUrl: './display-participant.component.html',
  styleUrls  : [ './display-participant.component.scss' ]
} )
export class DisplayParticipantComponent implements OnInit {

  store: ParticipantStore;
  router: Router;

  reviewOptions = [
    { label: 'Not Accepted', value: 0 },
    { label: 'Not Reviewed', value: 1 },
    { label: 'Accepted', value: 2 }
  ];


  constructor( store: ParticipantStore, router: Router ) {
    console.log( 'DisplayParticipantComponent.constructor' );
    this.store  = store;
    this.router = router;
  }

  goToPage() {
    this.router.navigate( [ '/add' ] );
  }

  onUpdate( participant, reviewState ) {
    console.log( 'onUpdate' );
    participant.reviewState = reviewState;
    this.store.dispatch( ParticipantActions.updateParticipant( participant ) );
  }

  onEdit( participant ){
    this.store.dispatch( ParticipantActions.editParticipant( participant ) );
    this.goToPage();
  }

  ngOnInit() {
    console.log( 'store', this.store.getState().participants );
  }

}
