import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorsGetComponent } from './administrators-get.component';

describe('AdministratorsGetComponent', () => {
  let component: AdministratorsGetComponent;
  let fixture: ComponentFixture<AdministratorsGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorsGetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorsGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
