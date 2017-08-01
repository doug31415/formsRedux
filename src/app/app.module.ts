import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DisplayParticipantComponent } from './display-participant/display-participant.component';
import { AddParticipantComponent } from './add-participant/add-participant.component';

const appRoutes: Routes = [
  { path: 'display', component: DisplayParticipantComponent },
  { path: 'add', component: AddParticipantComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    DisplayParticipantComponent,
    AddParticipantComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
