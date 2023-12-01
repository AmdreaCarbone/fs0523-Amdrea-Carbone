import { TodoService } from './../../todos.service';
import { Todo } from './../../models/todo';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi',
  templateUrl: './aggiungi.component.html',
  styleUrl: './aggiungi.component.scss'
})
export class AggiungiComponent {

  constructor(
    private todoSvc: TodoService,
    private router:Router){}

  newTodo:Partial<Todo> = {

    completed: '0'

  };




    save(){
      this.newTodo.completed = Boolean(Number(this.newTodo.completed))
      this.todoSvc.create(this.newTodo).then(res => {
          this.router.navigate(['/'])
       ;

    })
  }

}
