import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '../core/AppState';
import { Store } from 'redux';
import { ParticipantActions } from '../core/ParticipantActions';
import { ReviewState, YesNo } from '../enums/Enums';
import { Participant } from '../participant/participant';

@Component( {
  selector   : 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls  : [ './add-participant.component.css' ]
} )
export class AddParticipantComponent implements OnInit {

  @Input()
  store: Store<AppState>;

  yesNoOpts = [
    { label: 'Yes', value: YesNo.Yes },
    { label: 'No', value: YesNo.No }
  ];

  reviewOptions = [
    { label: 'Not Accepted', value: ReviewState.NotAccepted },
    { label: 'Not Reviewed', value: ReviewState.NotReviewed },
    { label: 'Accepted', value: ReviewState.Accepted }
  ];

  selectedParticipant: Participant;

  constructor() {
  }

  goToPage() {
    this.store.dispatch( ParticipantActions.goToPage( 0 ) );
  }

  onAdd( participant ) {
    this.store.dispatch( ParticipantActions.addParticipant( participant ) );
  }

  ngOnInit() {
  }

}
