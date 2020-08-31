import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSimplePageComponent } from './character-simple-page.component';

describe('CharacterSimplePageComponent', () => {
  let component: CharacterSimplePageComponent;
  let fixture: ComponentFixture<CharacterSimplePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSimplePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSimplePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
