import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsMainComponent } from './participants-main.component';

describe('ParticipantsMainComponent', () => {
  let component: ParticipantsMainComponent;
  let fixture: ComponentFixture<ParticipantsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
