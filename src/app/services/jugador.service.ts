import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Jugador } from '../models/Jugador';


@Injectable()
export class JugadorService {
  private jugadoresCollection: AngularFirestoreCollection<Jugador>;
  jugadores: Observable<Jugador[]>;
  jugador: Observable<Jugador>;
  constructor(
    private readonly afs: AngularFirestore
  ) 
  {
    this.jugadoresCollection = afs.collection<Jugador>('jugadores');
    this.jugadores = this.jugadoresCollection.valueChanges();
  }
  getJugadores(){
    this.jugadoresCollection = this.afs.collection<Jugador>('jugadores');
    return this.jugadores = this.jugadoresCollection.valueChanges();
    //return this.jugadores;
  }
  getJugadorByEmail(email:string){
    this.jugadoresCollection = this.afs.collection<Jugador>('jugadores', ref => ref.where('email', '==', email));
    return this.jugadores = this.jugadoresCollection.valueChanges();

  }

}
