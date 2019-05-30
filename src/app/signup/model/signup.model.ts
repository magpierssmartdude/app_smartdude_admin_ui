import { FormGroup } from '@angular/forms';

export class SignUpModel {
    signupForm: FormGroup;
    subscriberFlag: boolean
    constructor() {
        this.subscriberFlag = true;
    }
}