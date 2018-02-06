import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Reto } from '../../models/Reto';
import { RetoService} from '../../services/reto.service';
import { Jugador } from '../../models/Jugador';
import { JugadorService } from '../../services/jugador.service';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-ingresar-resultado',
  templateUrl: './ingresar-resultado.component.html',
  styleUrls: ['./ingresar-resultado.component.css']
})
export class IngresarResultadoComponent implements OnInit {
  id: string;
  set: number = 1;
  vencedor: string;
  perdedor: string;
  scoreVencedor: number = 15;
  scorePerdedor: number = 13;
  jugadores:Jugador[] = new Array();
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

  }
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private retoService: RetoService,
    private jugadorService: JugadorService,
    private flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.retoService.getReto(this.id).subscribe(reto => {
      this.reto = reto;
      this.vencedor = this.reto.retador;
      this.perdedor = this.reto.retado;
      this.jugadores.push({email: this.reto.retador,nombre:this.reto.retadorNombre});
      this.jugadores.push({email: this.reto.retado,nombre:this.reto.retadoNombre});
      this.set = this.reto.resultados.length + 1;
    });
  }
  onSubmit({value, valid}){
    console.log (this.reto);
    this.reto.resultados.push({set: value.set, 
                              vencedor: value.vencedor, 
                              perdedor: value.vencedor == this.jugadores[0].email? this.jugadores[1].email : this.jugadores[0].email,//value.perdedor, 
                              scoreVencedor: value.scoreVencedor, 
                              scorePerdedor: value.scorePerdedor,
                              vencedorNombre: value.vencedor == this.jugadores[0].email? this.jugadores[0].nombre : this.jugadores[1].nombre,
                              perdedorNombre: value.vencedor == this.jugadores[0].email? this.jugadores[1].nombre : this.jugadores[0].nombre,
                             });
    let setsRetador: number = 0;
    let setsRetado: number = 0;
    for (let set of this.reto.resultados) {
      set.vencedor == this.reto.retador?  setsRetador++: setsRetado++;
    }
    if (setsRetador > setsRetado) {
      this.reto.vencedor = this.reto.retador;
      this.reto.vencedorNombre = this.reto.retadorNombre;
      this.reto.perdedor = this.reto.retado;
      this.reto.perdedorNombre = this.reto.retadoNombre;
      this.reto.scoreVencedor = setsRetador;
      this.reto.scorePerdedor = setsRetado;
    }else {
      this.reto.vencedor = this.reto.retado;
      this.reto.vencedorNombre = this.reto.retadoNombre;
      this.reto.perdedor = this.reto.retador;
      this.reto.perdedorNombre = this.reto.retadorNombre;
      this.reto.scoreVencedor = setsRetado;
      this.reto.scorePerdedor = setsRetador;
    }                             
    this.retoService.updateReto(this.id, this.reto);
    this.flashMessagesService.show('Reto Actualizado', {
      cssClass:'alert-success', timeout: 4000
    });
  }
  finalizarReto() {
    //console.log("Reto Cerrado");
    this.reto.estado="jugado";
    this.retoService.updateReto(this.id, this.reto);
    this.flashMessagesService.show('Reto Finalizado', {
      cssClass:'alert-success', timeout: 4000
    });
    this.router.navigate(['/miMuro']);
  }

}
