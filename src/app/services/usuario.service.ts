import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class UsuarioService {
  private usuario;
  private nombreUsuario;

  constructor(
    private authService: AuthService
  ) {
    //this.usuario="nulo";
    /*
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.usuario = auth.email;
      } else {
        this.usuario = "";
      }
    });
    */
  }

  setUsuario(val) {
      this.usuario = val;
  }

  getUsuario() {
      return this.usuario ;
  }
  setNombreUsuario(val) {
    this.nombreUsuario = val;
  }

  getNombreUsuario() {
    return this.nombreUsuario ;
  }
}
