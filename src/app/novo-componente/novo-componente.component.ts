import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
//TODO: Crie um botão que quando é pressionado, desabilita um elemento de input
//TODO: Se for pressionado novamente, habilita o elemento de input
export class NovoComponenteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
