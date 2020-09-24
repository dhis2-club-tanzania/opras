import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';
import { Section2Component } from './pages/section2/section2.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'dashboard', component: MyDashboardComponent },
      // { path: 'section1', component: Section1Component, pathMatch: 'full' },
      { path: 'section2', component: Section2Component, pathMatch: 'full' },
      { path: '**', component: NotFoundComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
