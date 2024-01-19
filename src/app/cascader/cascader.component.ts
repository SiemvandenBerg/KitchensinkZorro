import { Component } from '@angular/core';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.css']
})
export class CascaderComponent {
  nzOptions = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake'
            }
          ]
        }
      ]
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men'
            }
          ]
        }
      ]
    }
  ];
  values: string[] = ['zhejiang', 'hangzhou', 'xihu'];

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }

  changeNzOptions(): void {
    this.nzOptions = [
      {
        value: 'fujian',
        label: 'Fujian',
        children: [
          {
            value: 'xiamen',
            label: 'Xiamen',
            children: [
              {
                value: 'gulangyu',
                label: 'Gulangyu'
              }
            ]
          }
        ]
      }
    ];
  }

  onOptionClick(option: any): void {
    console.log('Option clicked:', option);
  }

  onChildClick(child: any): void {
    console.log('Child clicked:', child);
  }

  onGrandchildClick(grandchild: any): void {
    console.log('Grandchild clicked:', grandchild);
  }
}