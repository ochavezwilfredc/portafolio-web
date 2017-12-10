import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( public _is:InformacionService,
               public router:Router) { }

  ngOnInit() {
  }

  public buscar_producto(termino: String){
      //console.log(termino);
      this.router.navigate(['buscar',termino]);
  }

}
