import { Component, OnInit } from '@angular/core';
import { ParticipantActions } from '../core/ParticipantActions';
import { ReviewState } from '../enums/Enums';
import { Participant } from '../participant/participant';
import { ParticipantStore } from '../core/ParticipantStore';
import { Router } from '@angular/router';

@Component( {
  selector   : 'app-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls  : [ './add-participant.component.scss' ]
} )
export class AddParticipantComponent implements OnInit {

  store: ParticipantStore;
  router: Router;

  yesNoOpts = [
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];

  reviewOptions = [
    { label: 'Not Accepted', value: 0 },
    { label: 'Not Reviewed', value: 1 },
    { label: 'Accepted', value: 2 }
  ];

  selectedParticipant: Participant;

  constructor( store: ParticipantStore, router: Router ) {
    this.store               = store;
    this.selectedParticipant = this.store.getState().selectedParticipant;
    this.router              = router;
    console.log( 'addParticipant constructor', this.selectedParticipant );
  }

  goToPage(): void {
    console.log( 'addParticipant goToPage' );
    this.router.navigate( [ '/display' ] );
  }

  onUpdate(): void {
    this.store.dispatch( ParticipantActions.updateParticipant( this.selectedParticipant ) );
    this.goToPage();
  }

  onAdd(): void {
    console.log( 'addParticipant onAdd' );
    this.store.dispatch( ParticipantActions.addParticipant( this.selectedParticipant ) );
    this.goToPage();
  }

  ngOnInit() {
  }

}
