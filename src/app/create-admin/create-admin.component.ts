import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AddService } from "../service/add-service.service";
import { first } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private router: Router, private addService: AddService) { }

  addForm: FormGroup;

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

  }

  onSubmit() {
    this.addService.createUser(this.addForm.value)
      .subscribe(data => {
        this.router.navigate(['list-user']);
      });
  }

}
