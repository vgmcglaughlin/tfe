import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantPromptComponent } from './participant-prompt.component';

describe('ParticipantPromptComponent', () => {
  let component: ParticipantPromptComponent;
  let fixture: ComponentFixture<ParticipantPromptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParticipantPromptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantPromptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
