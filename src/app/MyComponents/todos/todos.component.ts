import { Component } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1)
  }
  todos: Todo[]
  
  constructor(){
    this.todos=[
      {
        sno:1,
        title:"First tile",
        desc:"Description",
        active:true
      },
      {
        sno:2,
        title:"Sec tile",
        desc:"Description",
        active:true
      },
      {
        sno:3,
        title:"thi tile",
        desc:"Description",
        active:true
      }
    ]
  }
}
