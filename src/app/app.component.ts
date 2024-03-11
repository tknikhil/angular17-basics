import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import ProfileComponent from './profile.component';
import  EmulatedComponent from './emulated/emulated.component';
import { ChildEmulatedComponent } from './emulated/child-emulated/child-emulated.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent,EmulatedComponent], //ProfileComponent import is from angular 17
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular17-basics';
}
