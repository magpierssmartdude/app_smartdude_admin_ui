import { Component, OnInit } from '@angular/core';
import { AddQueueManagerModel } from './model/add-queue-manager.model';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import * as utils from 'lodash';

@Component({
  selector: 'app-add-queue-manager',
  templateUrl: './add-queue-manager.component.html',
  styleUrls: ['./add-queue-manager.component.css']
})
export class AddQueueManagerComponent implements OnInit {
  addQueueManagerModel: AddQueueManagerModel;
  cardGrid;
  constructor( private formBuilder: FormBuilder) {
    this.addQueueManagerModel = new AddQueueManagerModel();
   }

  ngOnInit() {
    this.cardGrid = [{ name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }];
    this.addQueueFormInit();
  }
  addQueueFormInit() {
    this.addQueueManagerModel.addQueueForm = this.formBuilder.group({

    });
  }
}
