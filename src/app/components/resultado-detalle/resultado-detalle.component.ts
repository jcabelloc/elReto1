import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RetoService } from '../../services/reto.service';

@Component({
  selector: 'app-resultado-detalle',
  templateUrl: './resultado-detalle.component.html',
  styleUrls: ['./resultado-detalle.component.css']
})
export class ResultadoDetalleComponent implements OnInit {
  id: string;
  resultados: any[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private retoService: RetoService,

  ) {
    this.id = this.activatedRoute.snapshot.params['id'];
    console.log(this.id);
   }

  ngOnInit() {
    this.retoService.getReto(this.id).subscribe (reto => {
      this.resultados = reto.resultados;
      console.log (this.resultados);
    })
  }

}
