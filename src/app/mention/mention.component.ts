import { Component } from '@angular/core';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';

@Component({
  selector: 'app-mention',
  templateUrl: './mention.component.html',
  styleUrls: ['./mention.component.css']
})

export class MentionComponent {
  inputValue: string = '';
  suggestions: string[] = ['apples', 'bananas', 'cherries'];

  onSelect(value: string): void {
    console.log('select', value);
  }

  onSearchChange({ value, prefix }: MentionOnSearchTypes): void {
    console.log('search', value);
  }
}