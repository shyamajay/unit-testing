import { TodosComponent } from './todos.component';
import { TodoService } from './todo.service';
import { from, observable, Observable, throwError } from 'rxjs';
import 'rxjs/add/observable/from';
import { of } from 'rxjs';
import { EMPTY } from 'rxjs/internal/observable/empty';
 
describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;
 
  beforeEach(() => {
    const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
    service = new TodoService(spy)
    component = new TodosComponent(service);
  });
 
  it('should set todos property with the items returned from the server', () => {
    const todos = [1, 2, 3];
   
    spyOn(service, 'getTodos').and.callFake(() => {
      return Observable.from([todos]);
    });
 
    component.ngOnInit();
 
    expect(component.todos).toBe(todos);
  });

  it('should call the add functionality',() =>{
    let spy = spyOn(service,'add').and.callFake((data) =>{
      return EMPTY;
    });

    component.add();
    expect(spy).toHaveBeenCalled();
  });

  it('should added the items to the todos array',() =>{
    const todo = 1;
    spyOn(service, 'add').and.returnValue(from([ todo ]));
 
    component.add();
 
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  });

  it('should throw an error message on failure to add to the array',() =>{
    let error = "failed to add the value"
    spyOn(service, 'add').and.returnValue(throwError(error));
 
    component.add();
 
    expect(component.message).toBe(error);
  });

  it('should call the delete mothod when the user confirms',()=>{
    spyOn(window,'confirm').and.returnValue(true);
    let spy = spyOn(service,'delete').and.returnValue(EMPTY)

    component.delete(1);
    expect(spy).toHaveBeenCalled();
  });

  it('should not call the delete mothod when the user cancels',()=>{
    spyOn(window,'confirm').and.returnValue(false);
    let spy = spyOn(service,'delete').and.returnValue(EMPTY)

    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
  })


});