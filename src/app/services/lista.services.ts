import { Injectable } from '@angular/core';
import { Lista } from '../clases/listas';




@Injectable()
export class ListaServices {
    listas: Lista[] = []; 

    constructor(){
        console.log("Servicio Listo");
        this.cargarData();
    }

    actualizarData(){
        localStorage.setItem("Data", JSON.stringify(this.listas));
    }

    cargarData(){
        if (localStorage.getItem("Data")) {
            this.listas = JSON.parse(localStorage.getItem("Data"));
        }
       
    }

    agragarLista(lista :Lista){
        this.listas.push(lista);
        this.actualizarData();
    }

    eliminarLista(idx :number){
        this.listas.splice(idx,1);
        this.actualizarData();
    }
}