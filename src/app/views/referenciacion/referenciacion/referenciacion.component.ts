import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-referenciacion',
  templateUrl: './referenciacion.component.html',
  styleUrls: ['./referenciacion.component.css']
})
export class ReferenciacionComponent implements OnInit {

  @Input() dataGrid: any = [];

  @Output() aproveEvent = new EventEmitter<any>();

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
    console.log(this.selectedRow);
    this.dataGrid[this.selectedRowIndex] =  Object.assign({}, this.selectedRow);
    if(this.selectedRow.estado == 'Aprobado'){
      let listaCobranza = [];
      for(let i = 1; i < this.selectedRow.comercializacion.numero_total_cuotas + 1; i++){
        let fechaActual = new Date();
        listaCobranza.push({
          "id": i,
          "nombre_credito": this.selectedRow.comercializacion.credito.nombre_credito,
          "monto_credito": this.selectedRow.comercializacion.monto_credito,
          "fecha_pago": new Date(fechaActual.setMonth(fechaActual.getMonth() + i)),
          "estado": 'Pendiente',
          "numero_cuota": i,
          "valor": (this.selectedRow.comercializacion.monto_credito / this.selectedRow.comercializacion.numero_total_cuotas) * 1.12
        });
      }
      this.aproveEvent.emit(listaCobranza);
    }
  }

  fileChange(evento: any, field: string){
    console.log(evento.target.files[0].name);
    switch(field){
      case 'dni':
        this.selectedRow.documentos.dni = evento.target.files[0].name;
        break;

      case 'certificado_laboral':
        this.selectedRow.documentos.certificado_laboral = evento.target.files[0].name;
        break;

      case 'extraxto_bancario':
        this.selectedRow.documentos.Extracto_bancario = evento.target.files[0].name;
        break;

      case 'pagare':
        this.selectedRow.documentos.pagare = evento.target.files[0].name;
        break;
    }
    console.log(this.selectedRow.documentos);
  }

}
