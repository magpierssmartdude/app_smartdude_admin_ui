import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from 'primeng/panel';
import { LoginComponent } from './login.component';
@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
    providers: [DatePipe]
})

export class LoginModule {

    constructor() {
    }

}
