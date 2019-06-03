import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { CreateAdminComponent } from './create-admin.component';
import { FileUploadModule } from 'primeng/fileupload';

@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule,
        FileUploadModule
    ],
    declarations: [CreateAdminComponent],
    providers: [DatePipe]
})

export class CreateAdminModule {
    constructor() {
    }

}
