import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from 'primeng/panel';
@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [],
    providers: [DatePipe]
})

export class LoginModule {

    constructor() {
    }

}
