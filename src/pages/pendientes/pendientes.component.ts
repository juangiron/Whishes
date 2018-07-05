import { Component, OnInit } from '@angular/core';
import { ListaServices } from '../../app/services/lista.services';
import { NavController } from 'ionic-angular';
import { AgregarComponent } from '../agregar/agregar.component';

@Component({
    selector: 'app-pendientes',
    templateUrl: './pendientes.component.html'
})
export class pendientesComponent implements OnInit {
    constructor(private _listaService: ListaServices,
                private navctrl : NavController) { }

    ngOnInit(): void { }

    irAgregar(){
        this.navctrl.push( AgregarComponent )
    }
}
