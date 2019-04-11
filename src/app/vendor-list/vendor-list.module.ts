import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { VendorListComponent } from './vendor-list.component';
@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule
    ],
    declarations: [VendorListComponent],
    providers: [DatePipe]
})

export class ListUserModule {

    constructor() {
    }

}
