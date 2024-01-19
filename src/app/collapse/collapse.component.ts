import { Component } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent {
  panels = [
    {
      name: 'Panel 1',
      active: true,
      disabled: false
    },
    {
      name: 'Panel 2',
      active: false,
      disabled: false
    },
    // add more panels here
  ];
}