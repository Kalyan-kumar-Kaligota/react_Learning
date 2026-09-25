import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgGrid } from './ag-grid';

const routes: Routes = [
  {
    path: '' , component: AgGrid
  },
  {path: '**', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgGridRoutingModule {}
