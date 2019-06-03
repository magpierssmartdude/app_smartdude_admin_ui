import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { VendorListComponent } from './vendor-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule,
        TableModule
    ],
    declarations: [VendorListComponent],
    providers: [DatePipe]
})

export class VendorListModule {

    constructor() {
    }

}
