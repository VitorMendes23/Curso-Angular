import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
 @Input() name!: string; // usa a explamação ou então inicia logo a variável com algo dentro
 @Input() userData!: {email: string, role: string} 
  constructor() {}

  ngOnInit(): void {}
}
