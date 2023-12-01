import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './pages/lista/lista.component';
import { AggiungiComponent } from './pages/aggiungi/aggiungi.component';
import { ModificaComponent } from './pages/modifica/modifica.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { CompletatiComponent } from './pages/completati/completati.component';
import { TodoComponent } from './pages/todo/todo.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    AggiungiComponent,
    ModificaComponent,
    HeaderComponent,
    CompletatiComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
