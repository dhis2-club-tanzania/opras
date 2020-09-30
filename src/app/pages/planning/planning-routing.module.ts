import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ViewGroupComponent } from './pages/view-group/view-group.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '**', component: NotFoundComponent }],
  },
  { path: 'view-group', component: ViewGroupComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}
