import { FormGroup } from '@angular/forms';

export class SignUpModel {
    signupForm: FormGroup;
    subscriberFlag: boolean
    checkboxValue: boolean ;
    constructor() {
        this.subscriberFlag = true;
        this.checkboxValue = false;
    }
}