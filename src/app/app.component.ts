import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  inputType = 'text';

  user = {
    name: 'Hung',
    age: 20,
  };

  handle() {
    console.log('clicked');
  }
}
