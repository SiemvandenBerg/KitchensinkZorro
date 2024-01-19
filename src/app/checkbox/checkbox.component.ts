import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  checkboxValue = []; // add this line if it doesn't exist

  onChange(values: any[]) {
    console.log(values);
  }
}