import { Component, OnInit } from '@angular/core';
import { PointsService } from '../services/points.service';
@Component({
  selector: 'app-preguntas',
  templateUrl: './preguntas.component.html',
  styleUrls: ['./preguntas.component.css']
})
export class PreguntasComponent implements OnInit {

  arrayPreguntas = [
    ["¿Cual es la capital de Buenos Aires?:","Rosario", "La Plata", "CABA","2"], ["¿en que año fue la independencia de Argentina? :","1904", "1810", "1816" ,"3"],
    ["¿A que hora se toma el te en Inglaterra? :","5PM", "11AM", "7PM","1"], ["¿Como se llama la primer perra que fue enviada al espacio? :","Scooby", "Laika", "Patan","2"],
    ["¿Cuantos premios novel de matematicas se entregaron? :","4", "35", "Ninguno","3"] 
  ];
  pregunta:string;
  respuesta1:string;
  respuesta2:string;
  respuesta3:string;
  contador:number;
  mensaje:string;
  radio:string;
  puntos:number;
  finJuego:boolean;
  constructor(private points : PointsService) {
    this.contador = 0;
    this.puntos = 0;
    this.pregunta = '';
    this.respuesta1 = '';
    this.respuesta2 = '';
    this.respuesta3 = '';
    this.finJuego = false;
   }
   handleChange(e:any){
    this.radio = e.target.value;
   }

  comenzarJuego(){
    this.pregunta = this.arrayPreguntas[this.contador][0];
    this.respuesta1 = this.arrayPreguntas[this.contador][1];
    this.respuesta2 = this.arrayPreguntas[this.contador][2];
    this.respuesta3 = this.arrayPreguntas[this.contador][3];
    this.contador++;
  }

  responder(){
    switch (this.contador) {
      case 1:
        console.log(this.arrayPreguntas[this.contador][4]);
        if (this.radio == this.arrayPreguntas[this.contador-1][4]) {
          this.mensaje = "correcto";
          this.puntos++;
        }else {
          this.mensaje = "incorrecto";
        }
        this.pregunta = this.arrayPreguntas[this.contador][0];
        this.respuesta1 = this.arrayPreguntas[this.contador][1];
        this.respuesta2 = this.arrayPreguntas[this.contador][2];
        this.respuesta3 = this.arrayPreguntas[this.contador][3];
        this.contador++;
        break;
      case 2:
        if (this.radio == this.arrayPreguntas[this.contador-1][4]) {
          this.mensaje = "correcto";
          this.puntos++;
        }else {
          this.mensaje = "incorrecto";
        }
        this.pregunta = this.arrayPreguntas[this.contador][0];
        this.respuesta1 = this.arrayPreguntas[this.contador][1];
        this.respuesta2 = this.arrayPreguntas[this.contador][2];
        this.respuesta3 = this.arrayPreguntas[this.contador][3];
        this.contador++;
        break;
      case 3:
        if (this.radio == this.arrayPreguntas[this.contador-1][4]) {
          this.mensaje = "correcto";
          this.puntos++;
        }else {
          this.mensaje = "incorrecto";
        }
        this.pregunta = this.arrayPreguntas[this.contador][0];
        this.respuesta1 = this.arrayPreguntas[this.contador][1];
        this.respuesta2 = this.arrayPreguntas[this.contador][2];
        this.respuesta3 = this.arrayPreguntas[this.contador][3];
        this.contador++;
        break;
      case 4:
        if (this.radio == this.arrayPreguntas[this.contador-1][4]) {
          this.mensaje = "correcto";
          this.puntos++;
        }else {
          this.mensaje = "incorrecto";
        }
        this.pregunta = this.arrayPreguntas[this.contador][0];
        this.respuesta1 = this.arrayPreguntas[this.contador][1];
        this.respuesta2 = this.arrayPreguntas[this.contador][2];
        this.respuesta3 = this.arrayPreguntas[this.contador][3];
        this.contador++;
        
        break;
      case 5:
          if (this.radio == this.arrayPreguntas[this.contador-1][4]) {
            this.mensaje = "correcto";
            this.puntos++;
          }else {
            this.mensaje = "incorrecto";
          }this.finJuego = true;
          this.calcularPuntaje();
          break;
      default:
        break;
    }
  }

  calcularPuntaje(){
    switch (this.puntos) {
      case 1:
        this.cargarPuntos(100);
        break;
      case 2:
        this.cargarPuntos(200);
        break;
      case 3:
        this.cargarPuntos(300);
        break;
      case 4:
        this.cargarPuntos(400);
        break;
      case 5:
        this.cargarPuntos(500);
        break;
      default:
        break;
    }
  }

  cargarPuntos(point: number){
    this.points.savePoints(point);
  }


  ngOnInit(): void {
  }

}
