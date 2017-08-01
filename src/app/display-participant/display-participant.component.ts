import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'redux';
import { AppState } from '../core/AppState';
import { ParticipantActions } from '../core/ParticipantActions';
import { ReviewState } from '../enums/Enums';

@Component( {
  selector   : 'app-display-participant',
  templateUrl: './display-participant.component.html',
  styleUrls  : [ './display-participant.component.css' ]
} )
export class DisplayParticipantComponent implements OnInit {

  @Input()
  store: Store<AppState>;

  reviewOptions = [
    { label: 'Not Accepted', value: ReviewState.NotAccepted },
    { label: 'Not Reviewed', value: ReviewState.NotReviewed },
    { label: 'Accepted', value: ReviewState.Accepted }
  ];

  constructor() {
    console.log( 'DisplayParticipantComponent.constructor' );
  }

  goToPage() {
    this.store.dispatch( ParticipantActions.goToPage( 1 ) );
  }

  onUpdate( participant, reviewState ) {
    participant.reviewState = reviewState;
    this.store.dispatch( ParticipantActions.updateParticipant( participant ) );
  }

  ngOnInit() {
    console.log( 'store', this.store.getState().participants );
  }

}
