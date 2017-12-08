import { Component, OnInit } from '@angular/core';
import { InformacionService } from '../../services/informacion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public anio: number;
  constructor(public _is:InformacionService) { }

  ngOnInit() {
    this.anio = new Date().getFullYear();
  }

}
