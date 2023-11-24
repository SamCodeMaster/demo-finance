import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-comercializacion',
  templateUrl: './comercializacion.component.html',
  styleUrls: ['./comercializacion.component.css']
})
export class ComercializacionComponent implements OnInit {

  constructor() { }

  @Input() dataGrid: any;

  @Output() aproveEvent = new EventEmitter<any>();

  sidebarFlag = false;

  selectedRow: any;

  selectedRowIndex!: number;

  ngOnInit(): void {
    //console.log(this.dataGrid);
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
    if(this.selectedRow.estado == 'Aprobado'){
      this.aproveEvent.emit({
        "id": 1,
        "estado": 'Pendiente',
        "comercializacion": this.selectedRow,
        "documentos": {
          "dni": null,
          "certificado_laboral": null,
          "Extracto_bancario": null,
          "pagare": null
        }
      })
    }
  }

  

}
