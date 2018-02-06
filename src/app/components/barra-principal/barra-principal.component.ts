import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { JugadorService } from '../../services/jugador.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';


@Component({
  selector: 'app-barra-principal',
  templateUrl: './barra-principal.component.html',
  styleUrls: ['./barra-principal.component.css']
})
export class BarraPrincipalComponent implements OnInit {
  isLogged: boolean;
  usuarioLogged: string;
  constructor(    
    private authService: AuthService,
    private usuarioService: UsuarioService,
    private jugadorService: JugadorService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth => {
      if(auth){
        this.isLogged = true;
        this.usuarioService.setUsuario(auth.email);
        this.jugadorService.getJugadorByEmail(auth.email).subscribe(jugadores => {
          this.usuarioService.setNombreUsuario (jugadores[0].nombre); 
          this.usuarioLogged = jugadores[0].nombre;
        } );
      } else {
        this.isLogged = false;
      }
    });
  }
  logout(){
    this.authService.logout();
    this.flashMessagesService.show('Usted ha cerrado su sesion', {
      cssClass:'alert-success', timeout: 2500
    });
    this.router.navigate(['/login']);
  }

}
