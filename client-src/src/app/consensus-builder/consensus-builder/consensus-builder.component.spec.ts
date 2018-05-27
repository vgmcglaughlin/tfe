import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsensusBuilderComponent } from './consensus-builder.component';

describe('ConsensusBuilderComponent', () => {
  let component: ConsensusBuilderComponent;
  let fixture: ComponentFixture<ConsensusBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsensusBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsensusBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
