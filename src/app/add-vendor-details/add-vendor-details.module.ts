import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { FileUploadModule } from 'primeng/fileupload';
import { AddVendorDetailsComponent } from './add-vendor-details.component';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        FormsModule,
        ReactiveFormsModule,
        RadioButtonModule,
        FileUploadModule,
        DropdownModule
    ],
    declarations: [AddVendorDetailsComponent],
    providers: [DatePipe]
})

export class AddVendorDetailsModule {

    constructor() {
    }

}
