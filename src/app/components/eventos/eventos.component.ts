import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = false;

  planos: string[] = ['Selecione um plano','plano 2000','plano 2001','plano 2002','plano 2003'];

  ShowMessenger (): void{
    this.planos;
  }
  constructor() {}

  ngOnInit(): void {}

}
