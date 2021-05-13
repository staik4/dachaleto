import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CottageDescriptionComponent } from './cottage-description.component';

describe('CottageDescriptionComponent', () => {
  let component: CottageDescriptionComponent;
  let fixture: ComponentFixture<CottageDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CottageDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CottageDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
