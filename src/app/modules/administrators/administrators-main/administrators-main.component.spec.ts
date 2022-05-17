import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministratorsMainComponent } from './administrators-main.component';

describe('AdministratorsMainComponent', () => {
  let component: AdministratorsMainComponent;
  let fixture: ComponentFixture<AdministratorsMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministratorsMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministratorsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
