import { Component } from 'angular2/core';

@Component({
    selector:'my-app',
    templateUrl:'templates/app.html'
})

export class AppComponent {
      name = 'shubham chaturvedi';
      subTitle= ['Sachin verma', 'Rishabh tripathi', 'Arpit Tyagi'];
      onClick(itemName){
          this.name =itemName;
          
      }
      addName(myName){
        this.subTitle.push(myName);
      }
    //   addNewFriends(value){
    //     this.subTitle.push(value);
    //   }
}