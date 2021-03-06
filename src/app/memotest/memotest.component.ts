import { Component, OnInit } from '@angular/core';
import { PointsService } from '../services/points.service';

@Component({
  selector: 'app-memotest',
  templateUrl: './memotest.component.html',
  styleUrls: ['./memotest.component.css']
})
export class MemotestComponent implements OnInit {

  comenzar:boolean = false;
  cuadrados = ["0","0","1","1","2","2","3","3","4","4","5","5"];
  mensaje:string;
  mostrarMensaje:boolean = false;
  mostrar:boolean[] = new Array(12);
  tarjetaA = null;
  tarjetaB = null;
  indexA:number;
  indexB:number;
  intentos:number;
  desabilitar:boolean = false;

  constructor(private points: PointsService) {}

  comenzarJuego() {
    this.comenzar = true;
    this.inicializarMostrar(); 
    this.cuadrados.sort(function (a, b) { return 0.5 - Math.random()});
    this.intentos = 5;
    setTimeout(() => this.ocultar(), 5000);
  }

  inicializarMostrar() {
    for(let i = 0; i < 12; i++) {
      this.mostrar[i] = true;
    }
  }

  jugar(casillero:number) {
    if(!this.mostrar[casillero]) {
      this.mostrar[casillero] = true;
      if(this.tarjetaA == null) {
        this.tarjetaA = this.cuadrados[casillero];
        this.indexA = casillero;
      } else {
        this.desabilitar=true;
        this.tarjetaB = this.cuadrados[casillero];
        this.indexB = casillero;
        setTimeout(() => {
          if(this.tarjetaA == this.tarjetaB) {
            this.verficiarGanador();
          } else {
            this.intentos--;
            if(this.intentos < 0) {
              this.jugadorPerdio();
            } else {
              this.mostrar[this.indexA] = false;
              this.mostrar[this.indexB] = false;
            }
          }
          this.desabilitar=false;
          this.tarjetaA = null;
          this.tarjetaB = null;
        }, 500);
      }
    }
  }

  ocultar() {
    for(let i = 0; i < 12; i++) {
      this.mostrar[i] = false;
    }
  }

  verficiarGanador() {
    let contador:number = 0;
    for(let i = 0; i < 12; i++) {
      if(this.mostrar[i]) {
        contador++;
      }
    }
    if(contador == 12) {
      this.jugadorGano();
    }
  }

  jugadorGano() {
    this.mostrarMensaje = true;
    this.mensaje = "gano!";
    this.cargarPuntos(100);
    setTimeout(() => this.reiniciar(), 4000);
  }

  jugadorPerdio() {
    this.mostrarMensaje = true;
    this.mensaje = "perdio";
    setTimeout(() => this.reiniciar(), 4000);
  }

  reiniciar() {
    this.mostrarMensaje = false;
    this.comenzar = false;
  }

  cargarPuntos(point: number){
    this.points.savePoints(point);
  }

  ngOnInit() {}

}
