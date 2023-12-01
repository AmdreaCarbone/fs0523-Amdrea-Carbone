import { ITodo } from "./itodo";

export class Todo implements ITodo {

  constructor(
    public title: string,
    public completed: boolean|string, public id:number
  ){}
}
