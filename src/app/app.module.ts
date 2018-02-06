import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';


//
import { RouterModule, Routes } from '@angular/router';
//
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database'; // Added 

//
import { FlashMessagesModule } from 'angular2-flash-messages';
//
import { FormsModule } from '@angular/forms';
//
import { BarraPrincipalComponent } from './components/barra-principal/barra-principal.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MiMuroComponent } from './components/mi-muro/mi-muro.component';
import { RetoPactadoComponent } from './components/reto-pactado/reto-pactado.component';
import { RetoJugadoComponent } from './components/reto-jugado/reto-jugado.component';
import { NuevoRetoComponent } from './components/nuevo-reto/nuevo-reto.component';
import { EditarRetoComponent } from './components/editar-reto/editar-reto.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { TablaRankingComponent } from './components/tabla-ranking/tabla-ranking.component';
import { HistorialComponent } from './components/historial/historial.component';
import { DetalleRetoComponent } from './components/detalle-reto/detalle-reto.component';
import { IngresarResultadoComponent } from './components/ingresar-resultado/ingresar-resultado.component';
import { ResultadoDetalleComponent } from './components/resultado-detalle/resultado-detalle.component';

//
import { AuthService } from './services/auth.service';
import { RetoService } from './services/reto.service';
import { UsuarioService } from './services/usuario.service';
import { JugadorService } from './services/jugador.service';

import { AuthGuard } from './guards/auth.guard';


// Create Routes
const appRoutes: Routes = [
  {path:'', component: LoginComponent},
  {path:'inicio', component: InicioComponent, canActivate:[AuthGuard]},
  {path:'miMuro', component: MiMuroComponent, canActivate:[AuthGuard]},
  {path:'login', component: LoginComponent},
  {path:'nuevoReto', component:NuevoRetoComponent, canActivate:[AuthGuard]},
  {path:'detalleReto/:id', component:DetalleRetoComponent, canActivate:[AuthGuard]},
  {path:'editarReto/:id', component:EditarRetoComponent, canActivate:[AuthGuard]},
  {path:'ingresarResultado/:id', component:IngresarResultadoComponent, canActivate:[AuthGuard]},
  {path:'ranking', component: RankingComponent, canActivate:[AuthGuard]},
  {path:'historial', component: HistorialComponent, canActivate:[AuthGuard]},
];

@NgModule({
  declarations: [
    AppComponent,
    BarraPrincipalComponent,
    LoginComponent,
    InicioComponent,
    MiMuroComponent,
    RetoPactadoComponent,
    RetoJugadoComponent,
    NuevoRetoComponent,
    EditarRetoComponent,
    RankingComponent,
    TablaRankingComponent,
    HistorialComponent,
    DetalleRetoComponent,
    IngresarResultadoComponent,
    ResultadoDetalleComponent
  ],
  imports: [
    BrowserModule,
    //
    AngularFireModule.initializeApp(environment.firebase, 'elReto1'), // imports firebase/app needed for everything
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFireDatabaseModule,// Added 
    //
    FlashMessagesModule.forRoot(),
    //
    FormsModule,
    //    
    RouterModule.forRoot(appRoutes),


  ],
  providers: [
    AuthService,
    RetoService,
    UsuarioService,
    JugadorService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
