import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent], //ProfileComponent import is from angular 17
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17-basics';
}
