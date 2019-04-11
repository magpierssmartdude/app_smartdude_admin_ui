import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { ReactiveFormsModule } from "@angular/forms";
import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';
import { DashboardComponent } from './dashboard.component';
@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule,
        ChartModule,
        ReactiveFormsModule
    ],
    declarations: [DashboardComponent],
    providers: [DatePipe]
})

export class DashboardModule {

    constructor() {
    }

}
