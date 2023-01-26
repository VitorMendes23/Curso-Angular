import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit{
 public name: string = 'Vitor';
 public age: number = 30;
 hobbies = ["jogoar online","assitir séries", "correr" ];
 car = {
  name: 'Fusca',
  marca: 'VW', 
 };
  
  constructor() {}
  ngOnInit(): void {}

}
