import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent {
  constructor(private notification: NzNotificationService) {}

  createBasicNotification(): void {
    this.notification.blank(
      'Notification Title',
      'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    );
  }
}