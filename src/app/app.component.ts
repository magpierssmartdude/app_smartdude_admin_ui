import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuItem } from "./model/menu.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard', icon: 'fa fa-fw fa-dashboard', routerLink: ['/dashboard']
      },
      {
        label: 'Add Service', icon: 'fa fa-fw fa-circle', routerLink: ['/add-service']
      },
      {
        label: 'Create Queue', icon: 'fa fa-fw fa-group', routerLink: ['/create-queue']
      },
      {
        label: 'Vendor SignUp', icon: 'fa fa-fw fa-cubes', routerLink: ['/add-vendor-details']
      },
      {
        label: 'Create Admin', icon: 'fa fa-fw fa-user', routerLink: ['/create-admin']
      }
    ];
  }

  logout() {
    this.router.navigate(['/login/'], { relativeTo: this.route });
  }
}
