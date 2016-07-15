import {Component} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';

@Component({
    moduleId: module.id,
    selector:'my-app',
    template:'<h1>Welcome to my app<h1>'
})

export class AppComponent {
  title = '';
}