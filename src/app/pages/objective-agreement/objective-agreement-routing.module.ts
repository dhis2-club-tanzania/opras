import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { MyObjectivesComponent } from './pages/my-objectives/my-objectives.component';
import { StaffObjectivesComponent } from './pages/staff-objectives/staff-objectives.component';
import { ViewStaffObjectiveComponent } from './pages/view-staff-objective/view-staff-objective.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/my-objectives',
    pathMatch: 'full',
  },
  { path: 'my-objectives', component: MyObjectivesComponent },
  {
    path: 'staff-objectives',
    component: StaffObjectivesComponent,
    children: [
      { path: '', component: ViewStaffObjectiveComponent },
      { path: 'view-staff', component: MyObjectivesComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObjectiveAgreementRoutingModule {}
