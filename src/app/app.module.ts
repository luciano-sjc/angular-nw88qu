import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { TabelaComponent } from './tabela/tabela.component';
import { ServicoService } from './servico.service';
import { CarroComponent } from './carro/carro.component';
import { CaminhaoComponent } from './caminhao/caminhao.component';
import { NumeroDirective } from './numero.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, FormComponent, TabelaComponent, CarroComponent, CaminhaoComponent, NumeroDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ServicoService]
})
export class AppModule { }
