import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {
  @Input() dataGrid: any;


  sidebarFlag = false;

  selectedRow: any;

  selectedRowIndex!: number;
  
  constructor() { }

  ngOnInit(): void {
  }

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
