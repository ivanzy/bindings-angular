import { Component } from '@angular/core';

@Component({
  selector: 'app-terceiro',
  template: `
    <input type="text" #campoSenha />
    <input
      type="text"
      #campoVerificaSenha
      (blur)="verificadorDeSenha(campoSenha.value, campoVerificaSenha.value)"
    />
    <div>{{ textoSenha }}</div>


  `,
})
export class TerceiroComponent {
  public textoSenha: string = '';
  public verificadorDeSenha(senha: string, verificaSenha: string): void {
    if (senha !== verificaSenha)
      this.textoSenha = 'Senhas digitadas não coincidem';
    else this.textoSenha = '';
  }
}
