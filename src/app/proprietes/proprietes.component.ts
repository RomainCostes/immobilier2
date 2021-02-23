import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proprietes',
  templateUrl: './proprietes.component.html',
  styleUrls: ['./proprietes.component.scss']
})
export class ProprietesComponent implements OnInit {

  @Input()
  proprieteId!: number;
  @Input()
  proprieteNom!: string;
  @Input() proprieteAdresse!: string;
  @Input() proprietePrix!: number;
  @Input() proprieteProprio!: string;
  constructor() { }

  ngOnInit(): void {
  }
}
