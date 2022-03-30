import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
    <div>
      <input type="text" #campoInput />
      <button type="button" (click)="onClick(campoInput)">CLIQUE</button>
    </div>
  `,
})
export class TerceiroComponent {
  public onClick(campoInput: HTMLInputElement): void {
    console.log(campoInput.value);
  }
}
