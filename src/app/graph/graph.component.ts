import { Component } from '@angular/core';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  graphData = {
    nodes: [
      {
        id: '1',
        label: 'Node 1'
      },
      {
        id: '2',
        label: 'Node 2'
      }
    ],
    edges: [
      {
        source: '1',
        target: '2'
      }
    ]
  };
}