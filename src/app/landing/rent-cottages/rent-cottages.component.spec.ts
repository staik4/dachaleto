import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentCottagesComponent } from './rent-cottages.component';

describe('RentCottagesComponent', () => {
  let component: RentCottagesComponent;
  let fixture: ComponentFixture<RentCottagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentCottagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentCottagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
