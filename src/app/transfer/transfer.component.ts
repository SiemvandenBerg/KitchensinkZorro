import { Component } from '@angular/core';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.css']
})

export class TransferComponent {
  list = [
    { key: '1', title: 'Item 1' },
    { key: '2', title: 'Item 2' },
    { key: '3', title: 'Item 3' },
    { key: '4', title: 'Item 4' },
  ];
  targetKeys = ['3', '4'];

  select(ret: {}): void {
    console.log('nzSelectChange', ret);
  }

  change(ret: any): void {
    console.log('nzChange', ret);
    if (ret.from === 'left' && ret.to === 'right' && ret.list.length > 0) {
      this.targetKeys = [...this.targetKeys, ...ret.list.map((item: { key: string }) => item.key)];
    } else if (ret.from === 'right' && ret.to === 'left' && ret.list.length > 0) {
      this.targetKeys = this.targetKeys.filter(key => !ret.list.map((item: { key: string }) => item.key).includes(key));
    }
  }
}