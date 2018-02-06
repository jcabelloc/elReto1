import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetoService } from '../../services/reto.service';
import { Reto } from '../../models/Reto';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-detalle-reto',
  templateUrl: './detalle-reto.component.html',
  styleUrls: ['./detalle-reto.component.css']
})
export class DetalleRetoComponent implements OnInit {
  esJugado: boolean = false;
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
  id: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private retoService: RetoService,
    private flashMessagesService: FlashMessagesService,
  ) { 
    this.id = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.params.subscribe( params => {this.esJugado = params.esJugado?params.esJugado:false; console.log(this.esJugado)} );
  }

    /*
    this.acttivateRoute.params.subscribe( params => {this.setRetador(params)} );

  }

  ngOnInit() {
    this.jugadorService.getJugadores().subscribe(jugadores => {
      this.jugadores = jugadores;
    }); 
  }


    */
  ngOnInit() {
    this.retoService.getReto(this.id).subscribe (reto => {
      this.reto = reto; 
    })
  }
  eliminarReto(){
    if(confirm("Seguro de eliminar el reto?")){
      this.retoService.eliminarReto(this.id);
      this.flashMessagesService.show('Reto Eliminado', {
        cssClass:'alert-success', timeout: 4000
      });
      this.router.navigate(['/miMuro']);
    }
  }

}
