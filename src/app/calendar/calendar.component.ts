import { Component } from '@angular/core';
import { NzCalendarMode } from 'ng-zorro-antd/calendar';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  date = new Date(2012, 11, 21);
  mode: NzCalendarMode = 'month';

  panelChange(change: { date: Date; mode: string }): void {
    console.log(change.date, change.mode);
  }

  onDateChange(date: Date): void {
    console.log('Selected date: ', date);
    this.date = date;
  }

  onModeChange(mode: NzCalendarMode): void {
    console.log('Calendar mode: ', mode);
    this.mode = mode;
  }
}
