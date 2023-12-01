import { Injectable } from '@angular/core';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})


export class TodoService {

  constructor() { }

  apiUrl:string = 'http://localhost:3000/todos';

  getAll():Promise<Todo[]>{

    return fetch(this.apiUrl).then(res => res.json())
   }




   getById(id:number):Promise<Todo>{
    return fetch(this.apiUrl +`${id}` ).then(res => res.json())
   }


   getCompletato(completed: boolean): Promise<Todo> {
    return fetch ( this.apiUrl + (completed ? 'paginaA' : 'paginaB')).then(res => res.json())}

   create(Todo:Partial<Todo>):Promise<Todo>{
    return fetch(this.apiUrl,{
      method:'POST',
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify(Todo)
    }).then(res => res.json())
   }

   update(Todo:Todo):Promise<Todo>{
    return fetch(this.apiUrl + `/${Todo.id}`,{
      method:'PUT',
      headers:{
          'Content-Type':'application/json'
      },
      body: JSON.stringify(Todo)
    }).then(res => res.json())
   }

   delete(id:number):Promise<Todo>{
    return fetch(this.apiUrl + `/${id}`,{
      method:'DELETE',
      headers:{
          'Content-Type':'application/json'
      }
    }).then(res => res.json())
   }

}
