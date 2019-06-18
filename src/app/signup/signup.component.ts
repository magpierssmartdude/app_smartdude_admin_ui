import { Component, OnInit, OnDestroy } from '@angular/core';
import { SignUpModel } from './model/signup.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { VendorSignUpService } from './services/signup.service';
import { takeWhile } from 'rxjs/operators';
import { MessageService } from 'primeng/components/common/messageservice';
import * as utils from 'lodash';

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
      vendorName: ['', Validators.required],
      vendorCode: ['', Validators.required],
      OrgName: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]],
      phoneNumber: ['', Validators.required],
      OrgType: ['', Validators.required],
    });
  }
  signUp() {
    console.log(this.signUpModel.signupForm.valid);
    this.signUpModel.signUpClicked = true;
    this.checkFormFields();
    if (this.signUpModel.checkboxValue && this.signUpModel.signupForm.valid) {
      const signUpDto = this.createSignUpDto(this.signUpModel.signupForm.value);
      this.vendorSignUpService.setSignUpDetaills(signUpDto)
        .subscribe((data => {
          console.log(data);
          this.toastMessage.clear();
          this.toastMessage.add({
            severity: 'success', summary: 'Sign Up Successful',
            detail: 'You have signed up successfully.'
          });
        }));
    }
  }
  createSignUpDto(formValue) {
    return {
      vendorcode: formValue.vendorName,
      vendorname: formValue.vendorCode,
      organizationtype: formValue.OrgType,
      organizationname: formValue.OrgName,
      phonenumber: formValue.phoneNumber,
      status: 0
    };
  }
  validateVendorName(usertyped: string, formControlName: string) {
    const userEntry = usertyped.trim();
    if (formControlName === 'email') {
      this.validateEmail(usertyped);
    } else {
      if (utils.isEmpty(userEntry)) {
        this.signUpModel.signupForm.controls[formControlName].setErrors({ 'fieldMandatory': 'provide a value' });
      }
    }
  }
  validateEmail(usertyped: string) {
    const status = this.signUpModel.signupForm.controls.email.status;
    const value = this.signUpModel.signupForm.controls.email.value.trim();
    if (status === 'INVALID' && utils.isEmpty(value)) {
      this.signUpModel.signupForm.controls['email'].setErrors({ 'fieldMandatory': 'provide an email' });
    } else if (status === 'INVALID' && !utils.isEmpty(value)) {
      this.signUpModel.signupForm.controls['email'].setErrors({ 'inValidMail': 'Please provide a valid email' });
    }
  }
  checkFormFields() {
    utils.forIn(this.signUpModel.signupForm.controls, (value: any, name: string, object: any) => {
      this.signUpModel.signupForm.controls[name].markAsTouched();
      if (utils.isEmpty(this.signUpModel.signupForm.controls[name].value)) {
        this.signUpModel.signupForm.controls[name].setErrors({ 'fieldMandatory': 'Select an Equipment Type' });
      }
    });
  }
  checkBoxValue() {
    this.signUpModel.checkboxValue = !this.signUpModel.checkboxValue;
  }
}
