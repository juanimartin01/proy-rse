import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmHomeComponent } from './pages/adm-home/adm-home.component';

const routes: Routes = [
    {
        path:'',
        component: AdmHomeComponent ,
        children:[
        {
            path:'ui',
            component: AdmHomeComponent
        }
    ],
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }