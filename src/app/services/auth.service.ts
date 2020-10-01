import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLogged: any = false;
  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));

   }

   async onLogin(user:Jugador){
     try {
       return await this.afAuth.signInWithEmailAndPassword(user.email,user.password);
     } catch (error) {
       console.log("error", error);
     }
   }

   async onRegister(user:Jugador){
     try {
       return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
     } catch (error) {
       console.log('error', error);
     }
   }
}
