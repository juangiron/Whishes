import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ListaItem, Lista } from '../../app/clases/index';
import { ListaServices } from '../../app/services/lista.services';
import { AlertController } from 'ionic-angular';
@Component({
    selector: 'app-detalle',
    templateUrl: './detalle.component.html'
})
export class DetalleComponent implements OnInit {
    idx:number;
    lista:Lista;

    constructor(public navCtrl:NavController,
                public navParams:NavParams,
                public _listaService:ListaServices,
                public alertCtrl: AlertController
            ) 
                { 
                this.idx = this.navParams.get("i");
                this.lista = this.navParams.get("lista");


                }

    ngOnInit(): void { }

    actualizar(item: ListaItem)
    {
        item.completado = !item.completado;

        let todosMarcados=true;
        let count=0;
        for (let item of this.lista.items) {            
            if (!item.completado) {
                todosMarcados=false; 
                break;
            }
        }

        this.lista.terminada = todosMarcados;
        
        this._listaService.actualizarData();
    }
    
    borrarLista()
    {
        this.showConfirm();
    }

    showConfirm() {
        const confirm = this.alertCtrl.create({
          title: `Borrar ${ this.lista.nombre }?`,
          message: 'Quieres borrar esta lista?',
          buttons: [
            {
              text: 'Disagree',
              handler: () => {
                console.log('Disagree clicked');
              }
            },
            {
              text: 'Agree',
              handler: () => {
                this._listaService.eliminarLista(this.idx);
                this.navCtrl.pop();
              }
            }
          ]
        });
        confirm.present();
      }
}
