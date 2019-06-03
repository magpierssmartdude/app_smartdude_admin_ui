import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { CreateQueueComponent } from './create-queue.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule,
        FileUploadModule
    ],
    declarations: [CreateQueueComponent],
    providers: [DatePipe]
})

export class CreateQueueModule {

    constructor() {
    }

}
