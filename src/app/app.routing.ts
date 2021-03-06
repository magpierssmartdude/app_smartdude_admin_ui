import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AddServiceComponent } from './add-service/add-service.component';
import { ListUserComponent } from './list-user/list-user.component';
import { CreateQueueComponent } from './create-queues/create-queue.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddVendorDetailsComponent } from './add-vendor-details/add-vendor-details.component';
import { SignupComponent } from './signup/signup.component';
import { SignUpRequestsComponent } from './sign-up-requests/sign-up-requests.component';
import { AddQueueManagerComponent } from './add-queue-manager/add-queue-manager.component';
import { AddLocationComponent } from './add-location/add-location.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'add-service', component: AddServiceComponent },
  { path: 'create-admin', component: CreateAdminComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'create-queue', component: CreateQueueComponent },
  { path: 'vendor-list', component: VendorListComponent },
  { path: 'add-vendor-details', component: AddVendorDetailsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signup-requests', component: SignUpRequestsComponent },
  { path: '', component: LoginComponent },
  { path: 'add-queue-manager', component: AddQueueManagerComponent },
  { path: 'add-location', component: AddLocationComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
