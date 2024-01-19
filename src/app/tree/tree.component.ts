import { Component } from '@angular/core';
import { NzTreeNodeOptions } from 'ng-zorro-antd/tree';

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
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