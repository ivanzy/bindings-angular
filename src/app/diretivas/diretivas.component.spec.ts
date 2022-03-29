import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivasComponent } from './diretivas.component';

describe('DiretivasComponent', () => {
  let component: DiretivasComponent;
  let fixture: ComponentFixture<DiretivasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
