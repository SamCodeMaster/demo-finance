import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cobranza',
  templateUrl: './cobranza.component.html',
  styleUrls: ['./cobranza.component.css']
})
export class CobranzaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() dataGrid: any = [];

  @Output() aproveEvent = new EventEmitter<any>();

  sidebarFlag = false;

  selectedRow: any;

  selectedRowIndex!: number;

  onRowClick(index: number){
    console.log(this.dataGrid[index]);
    this.sidebarFlag = true;
    this.selectedRow = Object.assign({}, this.dataGrid[index]);
    this.selectedRowIndex = index;
  }

  onCloseRow(){
    this.sidebarFlag = false;
    this.selectedRow = null;
    this.selectedRowIndex = -1;
  }

  onSaveInfo(){
    this.dataGrid[this.selectedRowIndex] =  Object.assign({}, this.selectedRow);
  }

}
