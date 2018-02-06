import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/usuario.service';
import { RetoService } from '../../services/reto.service';


@Component({
  selector: 'app-reto-jugado',
  templateUrl: './reto-jugado.component.html',
  styleUrls: ['./reto-jugado.component.css']
})
export class RetoJugadoComponent implements OnInit {
  usuario: Usuario = {
    email: '',
    nombre: '',
  };
  retos: any[];
  constructor(
    private usuarioService: UsuarioService,
    private retoService: RetoService,

  ) {
    this.usuario.email = this.usuarioService.getUsuario();
    this.usuario.nombre = this.usuarioService.getNombreUsuario();
   }

  ngOnInit() {
    this.retoService.getRetosJugadosAsRetador(this.usuario.email).subscribe(retos => {
      this.retos = retos;
    });
    this.retoService.getRetosJugadosAsRetado(this.usuario.email).subscribe(retos => {
      this.retos = this.retos.concat(retos);
    });
  }
}
