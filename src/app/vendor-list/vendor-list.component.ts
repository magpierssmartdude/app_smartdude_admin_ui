import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../service/user.service";
import { User } from "../model/user.model";
import { MenuItem } from "../model/menu.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  verdors: User[];
  items: MenuItem[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe(data => {
        this.verdors = data;
      });

    this.items = [
      {
        label: 'Add User', icon: 'fa fa-fw fa-check', routerLink: ['/add-user']
      },
      {
        label: 'Edit User', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: ['/pagename']
      },
      {
        label: 'Delete User', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: ['/pagename']
      },
      {
        label: 'Admin', icon: 'fa fa-fw fa-soccer-ball-o', routerLink: ['/pagename']
      }
    ];

  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id)
      .subscribe(data => {
        this.verdors = this.verdors.filter(u => u !== user);
      })
  };

  editUser(user: User): void {
    localStorage.removeItem("editUserId");
    localStorage.setItem("editUserId", user.id.toString());
    this.router.navigate(['edit-user']);
  };

  addUser(): void {
    this.router.navigate(['add-user']);
  };

  navigateToPages(event) {
    console.log(event);
  }
}
