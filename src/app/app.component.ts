import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from '@angular/platform-browser';
import { Fn } from '@iapps/function-analytics';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
} from '@angular/material/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  panelOpenState = false;
  sections = [
    { name: 'Dashboard', link: 'dashboard' },
    { name: 'Planning', link: 'planning' },
    {
      name: 'Objectives Agreement',
      link: 'objectives-agreement',
      children: [
        { name: 'My Objectives', link: 'objectives-agreement/my-objectives' },
        {
          name: 'Staff Objectives',
          link: 'objectives-agreement/staff-objectives',
        },
      ],
    },
    {
      name: 'Performance Review',
      link: 'performance-review',
      children: [
        { name: 'Self Review', link: 'performance-review/self-review' },
        { name: 'Staff Review', link: 'performance-review/staff-review' },
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

  constructor(
    private translate: TranslateService,
    private titleService: Title,
    private router: Router,
    private snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    // this language will be used as a fallback when a translation isn't found in the current language
    this.translate.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    this.translate.use('en');

    // Set application title
    this.setTitle('OPRAS');

    if (Fn) {
      Fn.init({
        baseUrl: '../../../',
      });
    }
    // Set tree dataSources
    this.dataSource.data = this.sections;
  }
  ngOnInit(): void {}

  hasChild = (_: number, node: any) => node.expandable;

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
