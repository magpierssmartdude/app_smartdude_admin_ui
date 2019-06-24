import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddQueueManagerComponent } from './add-queue-manager.component';
const routes: Routes = [
    { path: '', component: AddQueueManagerComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AddQueueManagerRoutingModule {
}
