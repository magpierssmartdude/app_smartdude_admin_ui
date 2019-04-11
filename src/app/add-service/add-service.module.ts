import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { ReactiveFormsModule } from "@angular/forms";
import { AddServiceComponent } from './add-service.component';
@NgModule({
    imports: [
        CommonModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [AddServiceComponent],
    providers: [DatePipe]
})

export class AddServiceModule {

    constructor() {
    }

}
