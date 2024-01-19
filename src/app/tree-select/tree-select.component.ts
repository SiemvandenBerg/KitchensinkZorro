import { Component } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-tree-select',
  templateUrl: './tree-select.component.html',
  styleUrls: ['./tree-select.component.css']
})
export class TreeSelectComponent {
  nodes: NzTreeNodeOptions[] = [
    {
      title: 'parent 1',
      key: '100',
      children: [
        {
          title: 'child 1',
          key: '1001',
        },
        {
          title: 'child 2',
          key: '1002',
        }
      ]
    }
  ];
}