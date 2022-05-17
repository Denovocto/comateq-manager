import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsAddComponent } from './participants-add.component';

describe('ParticipantsAddComponent', () => {
  let component: ParticipantsAddComponent;
  let fixture: ComponentFixture<ParticipantsAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
