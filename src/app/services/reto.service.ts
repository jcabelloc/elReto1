import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Reto } from '../models/Reto';
import { RetoId } from '../models/Reto';
import { UsuarioService } from '../services/usuario.service';
import { AngularFirestoreDocument } from 'angularfire2/firestore'

@Injectable()
export class RetoService {
  private retoCollection: AngularFirestoreCollection<Reto>;
  //retos: Observable<RetoId[]>;
  //retosRetado: Observable<RetoId[]>;
  //retosRetador: Observable<RetoId[]>;
  private retoDoc: AngularFirestoreDocument<Reto>;
   
  constructor(
    private readonly afs: AngularFirestore,
    private usuarioService: UsuarioService,
  ) { 
  }
  getRetosPactadosAsRetador(retador : String) {
    this.retoCollection = this.afs.collection<Reto>('retos', ref => ref.where('retador', '==', retador).where('estado','==','pendiente'));
    return this.retoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Reto;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  getRetosPactadosAsRetado(retado : String) {
    this.retoCollection = this.afs.collection<Reto>('retos', ref => ref.where('retado', '==', retado).where('estado','==','pendiente'));
    return this.retoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Reto;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  getRetosJugadosAsRetador(jugador: String) {
    this.retoCollection = this.afs.collection<Reto>('retos', ref => ref.where('retador', '==', jugador).where('estado','==','jugado'));
    return this.retoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Reto;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  getRetosJugadosAsRetado(jugador: String) {
    this.retoCollection = this.afs.collection<Reto>('retos', ref => ref.where('retado', '==', jugador).where('estado','==','jugado'));
    return this.retoCollection.snapshotChanges().map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data() as Reto;
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    });
  }
  //getRetos(){
  //  return this.retos;
 // }
  addReto(reto: Reto) {
    this.afs.collection<Reto>('retos').add(reto);
  }
  getReto(id: string){
    this.retoDoc = this.afs.doc<Reto>('retos/'+id);
    return this.retoDoc.valueChanges();
  }
  eliminarReto(id: string){
    return this.afs.doc<Reto>('retos/'+id).delete();
  }
  updateReto(id: string, reto: Reto) {
    return this.afs.doc<Reto>('retos/'+id).update(reto);

  }

  

}
