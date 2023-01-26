import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username = "Vitor"; 

  userData = {
    email: 'vitor@gmail.com',
    role: 'Dev ',
  }

  title = 'curso-angular';
}
