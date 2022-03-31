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
    <div *ngIf="senhaDiferente; then apareceTrue; else apareceFalse">
      <h1>Senhas não coincidem</h1>
    </div>

    <ng-template #apareceTrue>
      Senhas não coicidem. DENTRO DE UM NG-TEMPLATE
    </ng-template>

    <ng-template #apareceFalse>
      Senhas coicidem ou não foi digitado. DENTRO DE UM NG-TEMPLATE
    </ng-template>
  `,
})
export class TerceiroComponent {
  public senhaDiferente: boolean = false;
  public verificadorDeSenha(senha: string, verificaSenha: string): void {
    this.senhaDiferente = senha !== verificaSenha;
  }
}
