import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Grocery App';
  imports : [
    MatToolbarModule
  ]
}
