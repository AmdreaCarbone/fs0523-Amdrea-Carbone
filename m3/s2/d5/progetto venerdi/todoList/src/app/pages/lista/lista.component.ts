import { Component } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../todos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent {

  todos:Todo[]=[];


  constructor(private todoSvc: TodoService){
  }


  ngOnInit(){
    this.todoSvc.getAll().then(todos => this.todos = todos)
  }

  delete(id:number|undefined){
    if(!id) return
  this.todoSvc.delete(id).then( res =>{

  this.todos = this.todos.filter(t => t.id != id)
})


  }

}
