import { Component } from "@angular/core";

@Component({
  selector:'pm-root',
  template:`
  <nav class="navbar navbar-expand navbar-light bg-light">
  <a href="" class="navar-brand">{{pageTitle}}</a>
  <ul class="nav nav-pills">
      <li><a href="" class="nav-link" routerLink="/welcome">Home</a></li>   
      <li><a href="" class="nav-link" routerLink="/products">Product List</a></li>           
  </ul>
</nav>
<div class='container'>
<router-outlet></router-outlet>
</div>
  `
})
export class AppComponent{
   pageTitle:string = "ACME Product Management";
   message:string = "Hello world!";
   title:string = "Angular: Getting Started"
}