import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { JsonpModule } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  uid: string;
  usuarios: Observable<any[]>;
  listaUsuarios: any[];
  auxUsuarios: any[]
  points: number;
  constructor(private context: AngularFireDatabase, private authservice: AuthService) {
    this.usuarios = this.context.list('usuarios').valueChanges();
    this.usuarios.subscribe(usuarios => this.listaUsuarios = usuarios, error => console.log(error));
   }

   savePoints(points:number){
    this.authservice.getCurrentUser().then((response: any) =>{
      this.auxUsuarios = this.listaUsuarios.filter(u => u.id = response.uid);
      this.uid = response.uid;
      if(this.auxUsuarios != null){
        this.points = this.auxUsuarios[0].points + points;
        this.context.list('usuarios').set(this.uid,{correo: response.email,points: this.points, id: response.uid});
      }
    });
   }

   returnUsersPoints(){
      return this.listaUsuarios;
  }
}
