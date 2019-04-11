import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { CreateAdminComponent } from './create-admin.component';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [CreateAdminComponent],
    providers: [DatePipe]
})

export class CreateQueueModule {
    constructor() {
    }

}
