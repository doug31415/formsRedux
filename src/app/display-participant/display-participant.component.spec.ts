import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayParticipantComponent } from './display-participant.component';

describe('DisplayParticipantComponent', () => {
  let component: DisplayParticipantComponent;
  let fixture: ComponentFixture<DisplayParticipantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayParticipantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
