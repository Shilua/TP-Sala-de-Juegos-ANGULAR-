import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../services/points.service';
import { JuegoServiceService } from '../../servicios/juego-service.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public listadoParaCompartir: any;
 

  constructor(private points:PointsService) {
    this.listadoParaCompartir = this.points.returnUsersPoints();
    
  }
  
  ngOnInit() {
    
  }
}
