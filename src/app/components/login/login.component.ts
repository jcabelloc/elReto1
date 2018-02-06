import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { JugadorService } from '../../services/jugador.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessagesService: FlashMessagesService,
    private usuarioService: UsuarioService,
    private jugadorService: JugadorService,
  ) { }

  ngOnInit() {
  }

  onSubmit(){
    this.authService.login(this.email, this.password)
      .then((res) => {
        this.flashMessagesService.show('Ingreso Correcto', {
          cssClass:'alert-success', timeout: 2500
        });
        this.usuarioService.setUsuario(this.email);
        this.jugadorService.getJugadorByEmail(this.email).subscribe(jugadores => {this.usuarioService.setNombreUsuario (jugadores[0].nombre) } );
        this.router.navigate(['/inicio']);
      })
      .catch((err) => {
        this.flashMessagesService.show(err.message, {
          cssClass:'alert-danger', timeout: 2500
        });
        this.router.navigate(['/login']);
      });
  }

}
