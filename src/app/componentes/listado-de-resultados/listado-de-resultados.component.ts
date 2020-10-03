
import { Component, OnInit , Input, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-listado-de-resultados',
  templateUrl: './listado-de-resultados.component.html',
  styleUrls: ['./listado-de-resultados.component.css']
})
export class ListadoDeResultadosComponent implements OnInit {
  @Input() 
  listado:any;


  constructor(private router: Router) {
       
  }

  ngOnInit() {

  }



}
