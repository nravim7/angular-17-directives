import { Component, signal } from '@angular/core';

interface employeeInterface {
  id : number;
  name : string;
  role: string;
  age : number

};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-directives-new';
  display = true;
  num = -20;

  showVariable:boolean = false;

  show() {
    this.showVariable = !this.showVariable;
  }
  
  fullStackDev = [{
    id: 1,
    name: 'Angular'
  },
  {
    id: 2,
    name: 'React'
  },
  {
    id: 3,
    name: 'Vue'
  },
  {
    id: 4,
    name: 'Node'
  }];

  listItems = [{
    name: 'Ravi',
    age: 22
  },
  {
    name: 'John',
    age: 21
  },
  {
    name: 'Smith',
    age: 25
  },
  {
    name: 'Allen',
    age: 28
  },
  {
    name: 'Morkel',
    age: 26
  }]

  displayList:boolean = false;
  showList() {
    this.displayList = !this.displayList;
  }


  employees = signal<employeeInterface[]>([
    {id: 1, name: 'Employee A', role: 'Admin', age: 35},
    {id: 2, name: 'Employee B', role: 'Manager', age: 40},
    {id: 3, name: 'Employee C', role: 'Developer', age: 25},
    {id: 4, name: 'Employee D', role: 'HR', age: 28}
  ]);

  age = 0;
  isEligible: boolean = false;

  checkEligibility() {
    this.isEligible = this.age >= 18;
  }


}
