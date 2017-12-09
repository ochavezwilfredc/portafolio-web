import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {
  productos: any = [];
  cargando :boolean = false;
  constructor(public http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.http.get('https://webangular-c5058.firebaseio.com/productos_idx.json').subscribe(
         res =>{
        console.log(res.json());
        this.productos = res.json();
        this.cargando = true;
     }
   )

    }
}
