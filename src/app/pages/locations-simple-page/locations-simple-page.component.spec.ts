import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsSimplePageComponent } from './locations-simple-page.component';

describe('LocationsSimplePageComponent', () => {
  let component: LocationsSimplePageComponent;
  let fixture: ComponentFixture<LocationsSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationsSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationsSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
