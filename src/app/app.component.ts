import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MenuItem } from 'primeng/api';
import { MainMenuItem } from "./model/menu.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  display = true;
  showMenu = true;
  menuItems: MainMenuItem[];
  items: MenuItem[];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = [
      { label: 'New', icon: 'pi pi-fw pi-plus' },
      { label: 'Open', icon: 'pi pi-fw pi-download' },
      { label: 'Undo', icon: 'pi pi-fw pi-refresh' }
    ];
    this.menuItems = [
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

  toggleMenu(event) {
    this.display = !this.display;
  }

  menuToggle(event) {
    this.showMenu = !this.showMenu;
  }

  logout() {
    this.router.navigate(['/login/'], { relativeTo: this.route });
  }
}
