import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridRoutingModule } from './ag-grid-routing-module';

import { AgGrid } from './ag-grid';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';
import { CustomCheckButton } from './custom-check-button/custom-check-button';

ModuleRegistry.registerModules([AllCommunityModule]);

@NgModule({
  declarations: [AgGrid, CustomCheckButton],
  imports: [CommonModule, AgGridRoutingModule, AgGridAngular],
})
export class AgGridModule {}
