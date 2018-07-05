import { Component, OnInit } from '@angular/core';
import { ListaItem, Lista } from '../../app/clases/index';
import { AlertController,NavController } from 'ionic-angular';
import { ListaServices } from '../../app/services/lista.services';


@Component({
    selector: 'app-agregar',
    templateUrl: './agregar.component.html'
})
export class AgregarComponent implements OnInit {
    nombreLista:string = "";
    nombreItem:string = "";

    items:ListaItem[] = [];
    

    constructor(public alertCtrl: AlertController,
                public navCtrl: NavController,
                private _listaService:ListaServices) { }

    ngOnInit(): void { }

    agregar( ){
        if (this.nombreItem.length == 0) {
            return;            
        }
    let item = new ListaItem();
    item.nombre= this.nombreItem;
    this.items.push(item);
    this.nombreItem = "";
    }

    borrar( index:number ){
    
    let item = this.items[index];
    this.items.splice(index,1);
    }

    guardarLista(){
        if (this.nombreLista.length == 0) {
            this.showAlert("Error","La Lista debe tener un nombre!");
            return;            
        }

        let lista = new Lista(this.nombreLista);
        lista.items= this.items

       // this._listaService.listas.push( lista );
       this._listaService.agragarLista( lista );

        this.navCtrl.pop();   
    }

    showAlert(tittle:string,content:string) {
        const alert = this.alertCtrl.create({
          title: tittle,
          subTitle: content,
          buttons: ['OK']
        });
        alert.present();
      }
    
}
