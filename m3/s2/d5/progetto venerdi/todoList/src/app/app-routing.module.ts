import { TodoComponent } from './pages/todo/todo.component';
import { CompletatiComponent } from './pages/completati/completati.component';
import { AggiungiComponent } from './pages/aggiungi/aggiungi.component';
import { ListaComponent } from './pages/lista/lista.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

{
  path: '',
  component: ListaComponent
},
{
  path: 'crea-todo',
  component: AggiungiComponent
},
{
path: 'completati',
component: CompletatiComponent
},
{
  path: 'da-fare',
component: TodoComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
