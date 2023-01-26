import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {

  show: boolean = false;

  impactos: string[] = ['Selecione um plano','Condição de vesting','Multiplicador de quantidades','Multiplicador de valor da ação'];

  ShowMessengerImpactos (): void{
    this.impactos;
  }

  Apuracoes: string[] = ['Selecione um plano','No vesting','No resgate','Em data específica','Até atingir o vencimento'];

  ShowMessengerApuracoes (): void{
    this.Apuracoes;
  }
  constructor() {}

  ngOnInit(): void {}

}
