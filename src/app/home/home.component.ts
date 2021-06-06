import { FlatTreeControl } from '@angular/cdk/tree';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  mobileQuery: MediaQueryList;
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

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    // Set tree dataSources
    this.dataSource.data = this.sections;

    // Media Querying
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  hasChild = (_: number, node: any) => node.expandable;
}
