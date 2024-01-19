import { Component } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  constructor(private message: NzMessageService) {}

  createBasicMessage(): void {
    this.message.info('This is a normal message');
  }
}