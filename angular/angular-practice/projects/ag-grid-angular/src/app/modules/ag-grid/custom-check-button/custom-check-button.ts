import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-custom-check-button',
  standalone: false,
  styleUrl: './custom-check-button.scss',
  templateUrl: './custom-check-button.html',
})
export class CustomCheckButton implements ICellRendererAngularComp {
  params!: ICellRendererParams;
  isElectric!: boolean;

  agInit(params: ICellRendererParams) {
    this.params = params;
    this.isElectric = (params as any).isElectric;
  }
  refresh(params: ICellRendererParams) {
    this.params = params;
    this.isElectric = (params as any).isElectric;
    return true;
  }

  clickButton(): void {
  const currentValue = this.params.data.electric;
  this.params.node.setDataValue(
    'electric',
    !currentValue
  );
  this.isElectric = !currentValue;
}

}
