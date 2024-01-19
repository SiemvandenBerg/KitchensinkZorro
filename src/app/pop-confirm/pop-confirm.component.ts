import { Component } from '@angular/core';

@Component({
  selector: 'app-pop-confirm',
  templateUrl: './pop-confirm.component.html',
  styleUrls: ['./pop-confirm.component.css']
})
export class PopConfirmComponent {
  confirm(): void {
    console.log('User confirmed deletion');
  }

  cancel(): void {
    console.log('User canceled deletion');
  }
}