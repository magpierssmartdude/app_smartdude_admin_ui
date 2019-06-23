import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpRequestsComponent } from './sign-up-requests.component';
const routes: Routes = [
    { path: '', component: SignUpRequestsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignUpRequestsRoutingModule { }
