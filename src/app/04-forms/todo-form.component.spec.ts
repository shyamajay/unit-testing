import { FormBuilder } from '@angular/forms';
import { TodoFormComponent } from './todo-form.component'; 

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
    component = new TodoFormComponent(new FormBuilder())
  });

  it('should contain two fields', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('should contain validator as mandatory', () => {
     let control = component.form.get('name')
     control?.setValue('');
     expect(control?.valid).toBeFalsy();
  });
});