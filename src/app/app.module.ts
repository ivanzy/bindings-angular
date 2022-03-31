import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PrimeiroComponent } from './primeiro/primeiro.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceiroComponent } from './terceiro/terceiro.component';
import { NovoComponenteComponent } from './novo-componente/novo-componente.component';
import { QuartoComponent } from './quarto/quarto.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { ComponenteFilhoComponent } from './componente-filho/componente-filho.component';
import { PaiComponent } from './pai/pai.component';
import { FilhoComponent } from './filho/filho.component';
import { MostraPokemonComponent } from './mostra-pokemon/mostra-pokemon.component';
import { ContadorComponent } from './contador/contador.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PrimeiroComponent,
    SegundoComponent,
    TerceiroComponent,
    NovoComponenteComponent,
    QuartoComponent,
    DiretivasComponent,
    ComponenteFilhoComponent,
    PaiComponent,
    FilhoComponent,
    MostraPokemonComponent,
    ContadorComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [PokemonService],
  bootstrap: [AppComponent],
})
export class AppModule {}
