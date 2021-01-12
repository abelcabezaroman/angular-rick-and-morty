import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailPageComponent } from './character-detail-page.component';

describe('CharacterDetailPageComponent', () => {
  let component: CharacterDetailPageComponent;
  let fixture: ComponentFixture<CharacterDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
