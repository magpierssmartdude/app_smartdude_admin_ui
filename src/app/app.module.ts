import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing";
import { AuthenticationService } from "./service/auth.service";
import { ReactiveFormsModule, FormsModule  } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { PanelModule } from 'primeng/panel';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MegaMenuModule } from 'primeng/megamenu';
import { FileUploadModule } from 'primeng/fileupload';
import { SidebarModule } from 'primeng/sidebar';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';

import { UserService } from "./service/user.service";
import { AddService } from "./service/add-service.service";
import { OrderService } from "./service/order.service";
import { MessageService } from 'primeng/components/common/messageservice';

import { AddServiceModule } from './add-service/add-service.module';
import { AddVendorDetailsModule } from './add-vendor-details/add-vendor-details.module';
import { CreateQueueModule } from './create-queues/create-queue.module';
import { CreateAdminModule } from './create-admin/create-admin.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ListUserModule } from './list-user/list-user.module';
import { LoginModule } from './login/login.module';
import { SignupModule } from './signup/signup.module';
import { VendorListModule } from './vendor-list/vendor-list.module';
@NgModule({
  declarations: [
    AppComponent
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
    FileUploadModule,
    HttpClientModule,
    DropdownModule,
    AddServiceModule,
    AddVendorDetailsModule,
    CreateQueueModule,
    CreateAdminModule,
    DashboardModule,
    ListUserModule,
    LoginModule,
    SignupModule,
    VendorListModule,
    FormsModule 

  ],
  providers: [AuthenticationService, UserService, OrderService, AddService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
