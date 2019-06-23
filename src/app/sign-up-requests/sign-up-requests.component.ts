import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up-requests',
  templateUrl: './sign-up-requests.component.html',
  styleUrls: ['./sign-up-requests.component.css']
})
export class SignUpRequestsComponent implements OnInit {
  cardGrid;
  constructor() { }

  ngOnInit() {
    this.cardGrid = [{ name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }, { name: 'name' }];
  }

}
