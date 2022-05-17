import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinatorsGetComponent } from './coordinators-get.component';

describe('CoordinatorsGetComponent', () => {
  let component: CoordinatorsGetComponent;
  let fixture: ComponentFixture<CoordinatorsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinatorsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoordinatorsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
