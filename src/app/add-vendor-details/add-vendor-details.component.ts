import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "../service/user.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";
// import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-add-vendor-details',
  templateUrl: './add-vendor-details.component.html',
  styleUrls: ['./add-vendor-details.component.css']
})
export class AddVendorDetailsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private userService: UserService) { }
  // serviceFieldOptions: SelectItem[];
  addForm: FormGroup;

  ngOnInit() {

    // this.serviceFieldOptions = [
    //   { label: 'Select Service Field', value: null },
    //   { label: 'Electrical', value: { id: 1, name: 'Electrical', code: 'NY' } },
    //   { label: 'Painting', value: { id: 2, name: 'Painting', code: 'RM' } },
    //   { label: 'Plumbing', value: { id: 3, name: 'Plumbing', code: 'LDN' } },
    //   { label: 'AC', value: { id: 4, name: 'AC', code: 'IST' } },
    //   { label: 'Others', value: { id: 5, name: 'Others', code: 'PRS' } }
    // ];

    this.addForm = this.formBuilder.group({
      id: [],
      vendorName: ['', Validators.required],
      address: ['', Validators.required],
      serviceField: ['', Validators.required],
      academic: ['', Validators.required],
      technical: ['', Validators.required],
      contactNumber: ['', Validators.required],
      alternateNumber: ['', Validators.required],
      email: ['', Validators.required],
      whatsapp: ['', Validators.required],
      twoWheeler: ['', Validators.required],
      drivingLicense: ['', Validators.required],
      servicePreferred: ['', Validators.required],
      preferredCharges: ['', Validators.required],
      language: ['', Validators.required],
      bankDetails: ['', Validators.required],
      verification: ['', Validators.required],
      suggestion: ['', Validators.required]
    });

  }

  onSubmit() {
    this.userService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }

}
