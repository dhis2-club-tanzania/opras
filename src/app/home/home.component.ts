import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  sections = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'Planning', link: '/planning' },
    {
      name: 'Objectives Agreement',
      link: '/objectives-agreement',
      children: [
        { name: 'My Objectives', link: '/objectives-agreement/my-objectives' },
        {
          name: 'Staff Objectives',
          link: '/objectives-agreement/staff-objectives',
        },
      ],
    },
    {
      name: 'Performance Review',
      link: '/performance-review',
      children: [
        { name: 'Self Review', link: '/performance-review/self-review' },
        { name: 'Staff Review', link: '/performance-review/staff-review' },
      ],
    },
  ];
  private _transformer = (node: any, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      link: node.link,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<any>(
    (node) => node.level,
    (node) => node.expandable
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    (node) => node.level,
    (node) => node.expandable,
    (node) => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    // Set tree dataSources
    this.dataSource.data = this.sections;
  }

  ngOnInit(): void {}

  hasChild = (_: number, node: any) => node.expandable;
}
