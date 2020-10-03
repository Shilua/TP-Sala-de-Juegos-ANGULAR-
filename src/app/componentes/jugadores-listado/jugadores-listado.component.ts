import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PointsService } from '../../services/points.service';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {

  listado:any

  constructor(points: PointsService,
    private router: Router) {
    this.listado = points.returnUsersPoints();    
  }
  
  ngOnInit() {
  }

}
