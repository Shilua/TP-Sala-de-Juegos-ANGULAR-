import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { AuthService } from "../../services/auth.service";
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 //user:Jugador
 user:Jugador = new Jugador();
 mensaje:string;

  constructor(private authSvc:AuthService, private router: Router, private context: AngularFireDatabase) {

   }
    
  ngOnInit() {
  }

  async onRegister(){
    this.authSvc.onRegister(this.user).then(response => {

      this.authSvc.getCurrentUser().then((response: any) => {
      this.context.list('usuarios').set(response.uid, { correo:this.user.email, points: 0, id: response.uid });
      this.router.navigate(['/principal']);
    });

  }).catch(error => this.mensaje = error);
  }


  login(){
    this.router.navigate(['/']);
  }
}
