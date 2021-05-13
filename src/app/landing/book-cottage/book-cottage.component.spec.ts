import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCottageComponent } from './book-cottage.component';

describe('BookCottageComponent', () => {
  let component: BookCottageComponent;
  let fixture: ComponentFixture<BookCottageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookCottageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCottageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
