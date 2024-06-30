import { Component } from '@angular/core';

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
  

}
