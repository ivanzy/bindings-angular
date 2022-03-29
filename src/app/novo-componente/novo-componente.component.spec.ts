import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoComponenteComponent } from './novo-componente.component';

describe('NovoComponenteComponent', () => {
  let component: NovoComponenteComponent;
  let fixture: ComponentFixture<NovoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
