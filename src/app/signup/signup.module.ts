import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/components/common/messageservice';
import { SignupComponent } from './signup.component';
import { ToastModule } from 'primeng/toast';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ToastModule
  ],
  providers: [MessageService],

})
export class SignupModule { }
