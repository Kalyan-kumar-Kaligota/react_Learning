import { ChangeDetectionStrategy, Component } from '@angular/core';
import { themeQuartz, ColDef } from 'ag-grid-community';
import { CustomCheckButton } from './custom-check-button/custom-check-button';
import { rowData } from '../../../app/stores/defaults';

@Component({
  selector: 'app-ag-grid',
  standalone: false,
  styleUrl: './ag-grid.scss',
  templateUrl: './ag-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgGrid {
  theme = themeQuartz.withParams({
    spacing: 2,
    foregroundColor: 'rgb(18, 57, 113)',
    backgroundColor: 'rgb(200, 206, 213)',
    headerBackgroundColor: 'rgb(228, 237, 250)',
    rowHoverColor: 'rgb(206, 216, 248)',
  })
  rowData = rowData;

  pagination = true;
  paginationPageSize = 3;
  paginationPageSizeSelector = [5];


  colDefs: ColDef[] = [
    {
      field: "make", flex: 1.3, cellEditor: 'agSelectCellEditor', filter: true,
      headerName: "Brand Names", valueGetter: p => p.data.make + ' ' + p.data.model
    },
    { field: "model", flex: 1 },
    {
      field: "price", flex: 1,
      valueFormatter: p => '₹  ' + (p.value ?? 0).toLocaleString(),
    },
    {
      field: "electric", flex: 1, filter: true, editable: true
    },
    {
      field: "button", cellRenderer: CustomCheckButton,
      cellRendererParams: (params: any) => ({
        isElectric: params.data.electric
      })
    }
  ];
}
