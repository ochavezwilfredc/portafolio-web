import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
  productos: any = [];
  cargando :boolean = true;
  constructor(public http:Http) {
    this.cargar_productos();
  }

  public cargar_productos(){

    this.http.get('https://webangular-c5058.firebaseio.com/productos_idx.json').subscribe(
         res =>{
                //setTimeout(()=>{
                //console.log(res.json());
                  this.productos = res.json();
                  this.cargando = false;

                //},1500)
              }
            )
    }

  public cargar_producto(cod:string){
    return this.http.get(`https://webangular-c5058.firebaseio.com/productos/${cod}.json`)
  }

}
