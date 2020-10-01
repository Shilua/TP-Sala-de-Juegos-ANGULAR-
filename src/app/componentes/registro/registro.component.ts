import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Jugador } from '../../clases/jugador';
import { AuthService } from "../../services/auth.service";
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
  constructor(private authSvc:AuthService, private router: Router) { }

  ngOnInit() {
  }

  async onRegister(){
    const user = await this.authSvc.onRegister(this.user);
    if (user) {
      this.router.navigateByUrl('/Principal');
    }
  }

  login(){
    this.router.navigate(['/']);
  }
}
