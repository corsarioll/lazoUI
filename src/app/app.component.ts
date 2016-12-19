import { Component } from '@angular/core';
//import {LoginComponent} from './login/login.component';

/*export class Hero {
  id: number;
  name: string;
} */

/*const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives:['LoginComponent']
})
export class AppComponent {
  title;
  imageLink;
  colors;
  
  constructor(){
    this.title = 'Tour of Heroes';
    this.imageLink = "http://lorempixel.com/400/200/";
    this.colors=[
      {code:"#821302",label:"primari"},
      {code:"rgb(68,0,0)",label:"secundari"},
      {code:"#9b4235",label:"secundari"},
    ];
  }
  runClick(){
    console.log("entro en el click");
  }

/*  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }*/

}
