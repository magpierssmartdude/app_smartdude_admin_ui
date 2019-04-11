import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddServiceComponent } from './add-service.component';

const routes: Routes = [
    { path: 'add-service', component: AddServiceComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddUserRoutingModule { }
