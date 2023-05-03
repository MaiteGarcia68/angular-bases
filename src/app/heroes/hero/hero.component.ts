import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age:  number = 45;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroeDescription():string {
    return `${ this.name} - ${ this.age} años`
  }

  changeName():void {
    this.name = 'spiderman';
  }

  changeAge():void {
    this.age = 30
  }

  resetForm():void {
    this.name='iroman';
    this.age=45;
    document.querySelector('h1')!.innerHTML = '<h1>Desde Angular</h1>';

  }

}
