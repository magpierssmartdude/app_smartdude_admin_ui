import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddVendorDetailsComponent } from './add-vendor-details.component';

const routes: Routes = [
    { path: 'add-vendor-details', component: AddVendorDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddUserRoutingModule { }
