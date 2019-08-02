import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonTypeDetailPage } from './pokemon-type-detail.page';

describe('PokemonTypeDetailPage', () => {
  let component: PokemonTypeDetailPage;
  let fixture: ComponentFixture<PokemonTypeDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonTypeDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonTypeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
