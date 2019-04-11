import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MegaMenuModule } from 'primeng/megamenu';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { ListUserComponent } from './list-user.component';
@NgModule({
    imports: [
        CommonModule,
        MegaMenuModule,
        PanelModule,
        TableModule
    ],
    declarations: [ListUserComponent],
    providers: [DatePipe]
})

export class ListUserModule {

    constructor() {
    }

}
