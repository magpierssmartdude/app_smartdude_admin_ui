import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpRequestsComponent } from './sign-up-requests.component';
import { ButtonModule } from 'primeng/button';
@NgModule({
  declarations: [SignUpRequestsComponent],
  imports: [
    CommonModule,
    ButtonModule
  ]
})
export class SignUpRequestsModule { }
