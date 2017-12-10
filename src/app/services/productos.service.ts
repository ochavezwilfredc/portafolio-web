import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
   public productos: any = [];
   public productos_filtrados: any = [];
   public cargando = true;

  constructor(public http: Http) {
    //this.cargando = true;
    this.cargar_productos();
  }

  public cargar_productos() {
    let promesa = new Promise((resolve, reject) => {
      this.http.get('https://webangular-c5058.firebaseio.com/productos_idx.json').subscribe(
        res => {
          // setTimeout(()=>{
          // console.log(res.json());
          this.productos = res.json();
          this.cargando = false;
          // },1500)
          resolve();
        }
      )
    })
    return promesa;

  }

  public cargar_producto(cod: string) {
    return this.http.get(`https://webangular-c5058.firebaseio.com/productos/${cod}.json`)
  }

  public buscar_producto(termino: string) {
    // console.log("Buscar Producto");
    // console.log(this.productos.length);

    if (this.productos.length === 0) {
      this.cargar_productos().then(() => {
        // Aqui me fijo si termino la carga
        this.filtrar_productos(termino);
      });
    } else {
      this.filtrar_productos(termino);
    }
  }

  public filtrar_productos(termino: string) {
    this.productos_filtrados = [];
    termino = termino.toLowerCase();

    this.productos.forEach(prod => {
      if (prod.categoria.indexOf(termino) >= 0 || prod.titulo.toLowerCase().indexOf(termino) >= 0) {
        this.productos_filtrados.push(prod);
        //console.log(prod);
      }
      //console.log(prod);
    })



  }

}
