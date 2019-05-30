import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignUpModel } from './model/signup.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { VendorSignUpService } from './services/signup.service';
import { takeWhile } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  signUpModel: SignUpModel;
  constructor(private readonly formBuilder: FormBuilder,
    private readonly vendorSignUpService: VendorSignUpService, private readonly toastMessage: MessageService) {
    this.signUpModel = new SignUpModel();
  }

  ngOnInit() {
    this.signupFormInit();
  }
  ngOnDestroy() {
    this.signUpModel.subscriberFlag = false;
  }
  signupFormInit() {
    this.signUpModel.signupForm = this.formBuilder.group({
      vendorName: [''],
      vendorCode: [''],
      OrgName: [''],
      email: [''],
      phoneNumber: [''],
      OrgType: [''],
    });
  }
  signUp() {
    const signUpDto = this.createSignUpDto(this.signUpModel.signupForm.value);
    console.log(JSON.stringify(signUpDto));
    this.vendorSignUpService.setSignUpDetaills(signUpDto)
      .subscribe((data => {
        console.log(data);
        this.toastMessage.clear();
        this.toastMessage.add({
          severity: 'success', summary: 'Sign Up Successful',
          detail: 'You have signed up successfully.'
        });
      }))
  
  }
  createSignUpDto(formValue) {
   return {
      vendorcode: formValue.vendorName,
      vendorname: formValue.vendorCode,
      organizationtype: formValue.OrgType,
      organizationname: formValue.OrgName,
      phonenumber: formValue.phoneNumber,
      status: 0
    }
  }
}
