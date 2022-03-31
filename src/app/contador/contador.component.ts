import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <input
      type="number"
      min="0"
      [max]="numeroMax"
      [value]="numeroMax"
      (input)="controlaValor(campoValor.valueAsNumber)"
      #campoValor
    />
  `,
  styleUrls: ['./contador.component.css'],
})
export class ContadorComponent implements OnInit {
  @Input() numeroMax: number = 0;
  constructor() {}

  ngOnInit(): void {}

  @Output() eventoContador: EventEmitter<number> = new EventEmitter<number>();
  controlaValor(numero: number) {
    this.eventoContador.emit(numero);
    console.log(numero);
  }
}
