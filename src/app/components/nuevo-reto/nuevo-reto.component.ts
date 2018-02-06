import { Component, OnInit } from '@angular/core';
import { JugadorService } from '../../services/jugador.service';
import { Jugador } from '../../models/Jugador';
import { Reto } from '../../models/Reto';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RetoService } from '../../services/reto.service'
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-reto',
  templateUrl: './nuevo-reto.component.html',
  styleUrls: ['./nuevo-reto.component.css']
})
export class NuevoRetoComponent implements OnInit {
  reto: Reto = {
    retador: '',
    retadorNombre: '',
    retadoNombre: '',
    retado: '',
    difPuestos:2, 
    fecha:new Date(), 
    sede: 'Miraflores',
    estado: 'pendiente',
    resultados: new Array(),
    vencedor: '',
    vencedorNombre: '',
    perdedor: '',
    perdedorNombre: '',
    scoreVencedor: 0,
    scorePerdedor: 0,
    }
  jugadores: Jugador[];
  constructor(
    private jugadorService:JugadorService,
    private activatedRoute: ActivatedRoute,
    private retoService: RetoService,
    private flashMessagesService: FlashMessagesService,
    private router: Router,
  ) { 
    this.activatedRoute.params.subscribe( params => {this.setRetador(params)} );

  }

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe(jugadores => {
      this.jugadores = jugadores;
    }); 
  }
  onSubmit({value, valid}: {value: Reto, valid: boolean}){
    this.reto.retado = value.retado.split("-")[0];
    this.reto.retadoNombre = value.retado.split("-")[1];
    this.retoService.addReto(this.reto);
    this.flashMessagesService.show('Nuevo Reto Creado', {
      cssClass:'alert-success', timeout: 4000
    });
    this.router.navigate(['/miMuro']);
  }
  setRetador(val:any) {
    this.reto.retador = val.retador;
    this.reto.retadorNombre = val.retadorNombre;
  }

}
