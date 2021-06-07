
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

export class TodoService { 
  constructor(private http: HttpClient) { 
  }

  add(todo: { title: string; }):Observable<number> {
    return this.http.post<number>('...', todo);
  }

  getTodos() { 
    return this.http.get<number[]>('...');
  }

  delete(id: any) {
    return this.http.delete('...');
  }
}