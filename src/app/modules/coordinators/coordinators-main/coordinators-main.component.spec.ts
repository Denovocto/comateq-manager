import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsMainComponent } from './coordinators-main.component';

describe('CoordinatorsMainComponent', () => {
  let component: CoordinatorsMainComponent;
  let fixture: ComponentFixture<CoordinatorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
