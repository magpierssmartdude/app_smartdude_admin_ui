import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MegaMenuModule } from 'primeng/megamenu';
import { TableModule } from 'primeng/table';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';
import { AddServiceComponent } from './add-service/add-service.component';
import { CreateQueueComponent } from './create-queues/create-queue.component';
import { MenuModule } from 'primeng/menu';

import { ListUserComponent } from "./list-user/list-user.component";
import { VendorListComponent } from "./vendor-list/vendor-list.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { AddVendorDetailsComponent } from "./add-vendor-details/add-vendor-details.component";
import { UserService } from "./service/user.service";
import { AddService } from "./service/add-service.service";
import { OrderService } from "./service/order.service";
import { SignupComponent } from './signup/signup.component';
import { MessageService } from 'primeng/components/common/messageservice';
import {ToastModule} from 'primeng/toast';


@NgModule({
  declarations: [
    AppComponent,
    CreateQueueComponent,
    LoginComponent,
    ListUserComponent,
    AddServiceComponent,
    VendorListComponent,
    DashboardComponent,
    AddVendorDetailsComponent,
    CreateAdminComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SidebarModule,
    ChartModule,
    PanelModule,
    MegaMenuModule,
    MenuModule,
    RadioButtonModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    ToastModule

  ],
  providers: [AuthenticationService, UserService, OrderService, AddService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
