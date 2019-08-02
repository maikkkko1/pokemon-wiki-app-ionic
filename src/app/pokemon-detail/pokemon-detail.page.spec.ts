import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetailPage } from './pokemon-detail.page';

describe('PokemonDetailPage', () => {
  let component: PokemonDetailPage;
  let fixture: ComponentFixture<PokemonDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
