import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultadxmateriaComponent } from './facultadxmateria.component';
const routes: Routes = [{path:'',component:FacultadxmateriaComponent}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultadxmateriaRoutingModule { }
