import { Component } from '@angular/core';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.css']
})
export class DrawerComponent {
  visible = false; // initial visibility

  openDrawer() {
    this.visible = true; // open the drawer
  }

  closeDrawer() {
    this.visible = false; // close the drawer
  }
}