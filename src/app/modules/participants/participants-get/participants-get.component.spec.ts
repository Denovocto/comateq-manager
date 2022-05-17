import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipantsGetComponent } from './participants-get.component';

describe('ParticipantsGetComponent', () => {
  let component: ParticipantsGetComponent;
  let fixture: ComponentFixture<ParticipantsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticipantsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticipantsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
