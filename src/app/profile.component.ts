import { Component } from "@angular/core";

@Component({
    standalone: true,//angular 17 changes
    // selector: 'app-profile',  //noraml selctor angular 17
    //selector: '[app-profile]',      //tag attribute selector angular 17
    //selector: '[app-profile]:not(p)', //tag attribute selector works for every tag execept the paragaph tag selector angular 17
    selector: '[nikhil-profile],app-profile', //tag attribute selector and normal selector angular 17

    // template:'<h1>Profile Component</h1>',
    templateUrl: './profile.component.html',
    // styles: ['h1 { color: green; background-color:yellow}']
    styleUrls: ['./profile.component.css']
})
export default class ProfileComponent{}