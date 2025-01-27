import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookPageComponent } from './admin-book-page.component';

describe('AdminBookPageComponent', () => {
  let component: AdminBookPageComponent;
  let fixture: ComponentFixture<AdminBookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminBookPageComponent]
    });
    fixture = TestBed.createComponent(AdminBookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
