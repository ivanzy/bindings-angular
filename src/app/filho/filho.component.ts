import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filho',
  template: ` {{ mensagem }} <br />`,
  styleUrls: ['./filho.component.css'],
})
export class FilhoComponent {
  @Input() mensagem: string ="";
}
