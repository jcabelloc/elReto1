import { Component, OnInit } from '@angular/core';
import { RetoService } from '../../services/reto.service';
import { Reto } from '../../models/Reto';
import { RetoId } from '../../models/Reto';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/Usuario';



@Component({
  selector: 'app-reto-pactado',
  templateUrl: './reto-pactado.component.html',
  styleUrls: ['./reto-pactado.component.css']
})
export class RetoPactadoComponent implements OnInit {
  retos: any[];
  mostrarDetalle : boolean = false;
  usuario: Usuario = {
    email: '',
    nombre: '',
  };
  constructor(
    private retoService: RetoService,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    this.usuario.email = this.usuarioService.getUsuario();
    this.usuario.nombre = this.usuarioService.getNombreUsuario();
   }


  ngOnInit() {
    this.retoService.getRetosPactadosAsRetador(this.usuario.email).subscribe(retos => {
      this.retos = retos;
      if (this.retos != null && this.retos.length > 0 ) this.mostrarDetalle = true;
    });
    this.retoService.getRetosPactadosAsRetado(this.usuario.email).subscribe(retos => {
      this.retos = this.retos.concat(retos);
      if (this.retos != null && this.retos.length > 0 ) this.mostrarDetalle = true;
    });
  }

  agregarReto(){
    this.router.navigate(['/nuevoReto',{retador:this.usuario.email, retadorNombre: this.usuario.nombre}]);
  }
}
