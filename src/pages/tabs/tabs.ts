import { Component } from '@angular/core';


import { pendientesComponent } from '../pendientes/pendientes.component';
import { terminadosComponent } from '../terminados/terminados.component';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = pendientesComponent;
  tab2Root = terminadosComponent;

  constructor() {

  }
}
