import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetoService } from '../../services/reto.service';
import { Reto } from '../../models/Reto';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/Jugador';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-editar-reto',
  templateUrl: './editar-reto.component.html',
  styleUrls: ['./editar-reto.component.css']
})
export class EditarRetoComponent implements OnInit {
  id: string;
  reto: Reto = {
    retador:'',
    retadorNombre:'',
    retado: '',
    retadoNombre:'',
    difPuestos: 0, 
    fecha:null, 
    sede: '',
    estado: '',
    resultados: new Array(),
    vencedor: '',
    vencedorNombre: '',
    perdedor: '',
    perdedorNombre: '',
    scoreVencedor: 0,
    scorePerdedor: 0,
  };
  jugadores: Jugador[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private retoService: RetoService,
    private jugadorService: JugadorService,
    private flashMessagesService: FlashMessagesService,
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.retoService.getReto(this.id).subscribe(reto =>{
      this.reto = reto;
    })
    this.jugadorService.getJugadores().subscribe(jugadores => {
      this.jugadores = jugadores;
    })
  }
  onSubmit({value, valid}: {value: Reto, valid: boolean}){
    console.log(value);
    this.jugadorService.getJugadorByEmail(value.retado).subscribe(jugadores => {
      value.retadoNombre = jugadores[0].nombre;
      this.retoService.updateReto(this.id, value);
      this.flashMessagesService.show('Reto Actualizado', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/miMuro']);
    });
  }
}
