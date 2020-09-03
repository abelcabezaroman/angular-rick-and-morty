import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterSimpleDetailPageComponent } from './character-simple-detail-page.component';

describe('CharacterSimpleDetailPageComponent', () => {
  let component: CharacterSimpleDetailPageComponent;
  let fixture: ComponentFixture<CharacterSimpleDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterSimpleDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterSimpleDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
