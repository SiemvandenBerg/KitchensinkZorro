import { Component } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent {
  selectedValue: string = '';
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];

  onSearch(value: string): void {
    // Implement your search logic here
    console.log(value);
  }
}