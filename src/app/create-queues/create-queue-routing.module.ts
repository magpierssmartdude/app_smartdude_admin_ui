import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateQueueComponent } from './create-queue.component';

const routes: Routes = [
    { path: 'add-service', component: CreateQueueComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddUserRoutingModule { }
