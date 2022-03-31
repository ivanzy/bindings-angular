import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostraPokemonComponent } from './mostra-pokemon.component';

describe('MostraPokemonComponent', () => {
  let component: MostraPokemonComponent;
  let fixture: ComponentFixture<MostraPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostraPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostraPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
