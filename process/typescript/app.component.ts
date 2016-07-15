import { Component } from 'angular2/core';

@Component({
    selector:'my-app',
    template:`
             <h1>Welcome to my app<h1>
             {{title}}
             `
})

export class AppComponent {
  title: string='shubham'
}