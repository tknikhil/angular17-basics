import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-emulated',
  standalone: true,
  imports: [],
  templateUrl: './child-emulated.component.html',
  styleUrl: './child-emulated.component.css',
  encapsulation:ViewEncapsulation.Emulated  //angular 17 feature
})
export class ChildEmulatedComponent {

}
