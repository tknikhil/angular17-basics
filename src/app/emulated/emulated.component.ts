import { Component, ViewEncapsulation } from '@angular/core';
import { ChildEmulatedComponent } from './child-emulated/child-emulated.component';

@Component({
  selector: 'ang17-emulated',
  standalone: true,
  imports: [ChildEmulatedComponent],
  templateUrl: './emulated.component.html',
  styleUrl: './emulated.component.css',

  encapsulation:ViewEncapsulation.None  //angular 17 feature
  // encapsulation: ViewEncapsulation.Emulated //angular 17 feature
  // encapsulation:ViewEncapsulation.ShadowDom  //angular 17 feature
})
export default class EmulatedComponent {

}
