import { Component, OnInit } from '@angular/core';
import { PointsService } from '../../services/points.service';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  comenzar:boolean = false;
  mensaje:string;
  mostrarMensaje:boolean = false;
  jugadaElegida:string;
  jugadaCpu:string;
  piedra: boolean = false;
  papel: boolean = false;
  tijera: boolean = false;
  puntosJugador:number = 0;
  puntosCpu:number = 0;
  desabilitar:boolean = false;
  spinner:boolean = true;

  constructor(private points: PointsService) { }

  comenzarJuego() {
    this.comenzar = true;
    this.puntosJugador = 0;
    this.puntosCpu = 0;
    this.spinner = false;
    this.mensaje = "eliga su jugada";
  }

  jugar(jugada:string) {
    this.mostrarMensaje = false;
    this.jugadaElegida = jugada;
    this.desabilitar = true;
    this.spinner = true;
    setTimeout(() => this.jugarCpu(), 1000);
  }

  jugarCpu() {
    switch(Math.floor(Math.random() * 3 + 1)) {
      case 1:
        this.jugadaCpu = "piedra";
        break;
      case 2:
        this.jugadaCpu = "papel";
        break;
      case 3:
        this.jugadaCpu = "tijera";
        break;
    }
    this.spinner = false;
    this.desabilitar = false;
    this.verificarGanador();
  }

  verificarGanador() {
    if(this.jugadaElegida == this.jugadaCpu) {
      this.desabilitar = false;
    } else {
      if(this.jugadaElegida == "piedra") {
        if(this.jugadaCpu == "papel") {
          this.jugadorPerdio();
        } else { 
          this.jugadorGano();
        }
      } else if (this.jugadaElegida == "papel") {
        if(this.jugadaCpu == "tijera") {
          this.jugadorPerdio();
        } else { 
          this.jugadorGano();
        }
      } else {
        if(this.jugadaCpu == "piedra") {
          this.jugadorPerdio();
        } else { 
          this.jugadorGano();
        }
      }
    }
  }

  jugadorGano() {
    this.puntosJugador++; 
    if(this.puntosJugador >= 3) {
      this.mensaje = "ganaste";
      this.mostrarMensaje = true;
      this.cargarPuntos(100);
      setTimeout(() => this.reiniciar(), 4000);
    } else {
      this.desabilitar = false;
    }
  }

  jugadorPerdio() {
    this.puntosCpu++;
    if(this.puntosCpu >= 3) {
      this.mensaje = "perdiste";
      this.mostrarMensaje = true;
      setTimeout(() => this.reiniciar(), 4000);
    } else {
      this.desabilitar = false;
    }
  }

  reiniciar() {
    this.mostrarMensaje = false;
    this.comenzar = false;
    this.jugadaElegida = "";
    this.jugadaCpu = "";
  }
  cargarPuntos(point: number){
    this.points.savePoints(point);
  }
 
  ngOnInit() {}
}
