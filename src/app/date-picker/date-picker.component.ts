import { Component } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  date = null; // initial date

  onChange(date: Date) {
    console.log(date); // log the new date
  }
}