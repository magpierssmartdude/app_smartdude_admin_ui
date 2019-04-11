import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { CreateQueueComponent } from './create-queue.component';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [CreateQueueComponent],
    providers: [DatePipe]
})

export class CreateQueueModule {

    constructor() {
    }

}
