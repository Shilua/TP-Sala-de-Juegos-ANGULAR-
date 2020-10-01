import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { AuthService } from "../../services/auth.service";

import {Subscription} from "rxjs";
import {TimerObservable} from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:Jugador = new Jugador();
  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onLogin(){
    this.authSvc.onLogin(this.user).then(res => {
      this.router.navigate(['/Principal']);
    }).catch(err => alert('Usuario o Contraseña incorrectas'))
  }
}
