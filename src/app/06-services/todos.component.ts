
import { TodoService } from './todo.service'

export class TodosComponent { 
  todos: number[] = [];
  message : any; 

  constructor(private service: TodoService) {}

  ngOnInit() { 
    this.service.getTodos().subscribe(data=>{
      this.todos = data;
    });
  }

  add() { 
    var newTodo = { title: '... ' };
    this.service.add(newTodo).subscribe(
      (t: any) => this.todos.push(t),
      (err: any) => this.message = err);
  }

  delete(id: any) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
