import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataNavbarComponent } from './data-navbar.component';

describe('DataNavbarComponent', () => {
  let component: DataNavbarComponent;
  let fixture: ComponentFixture<DataNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
