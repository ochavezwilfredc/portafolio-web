import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  termino: any = undefined;
  constructor(public route: ActivatedRoute,
              public _ps: ProductosService) {

    route.params.subscribe(parametros => {
      this.termino = parametros['termino'];
      //console.log(this.termino);
      _ps.buscar_producto(this.termino);
    });
  }

  ngOnInit() {
  }

}
