import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { App } from './app';

const routes: Routes = [
  {path:'', component: App,
    children : [
      {
        path: 'grid',
        loadChildren: () => import('./modules/ag-grid/ag-grid-module').then(grid => grid.AgGridModule)
      }
    ]
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
