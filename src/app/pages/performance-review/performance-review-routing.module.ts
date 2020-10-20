import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { MidYearReviewComponent } from './pages/mid-year-review/mid-year-review.component';
import { SelfReviewComponent } from './pages/self-review/self-review.component';
import { StaffReviewComponent } from './pages/staff-review/staff-review.component';
import { ViewStaffReviewComponent } from './pages/view-staff-review/view-staff-review.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/self-review',
    pathMatch: 'full',
  },
  { path: 'self-review', component: SelfReviewComponent, pathMatch: 'full' },
  {
    path: 'staff-review',
    component: StaffReviewComponent,
    children: [
      { path: '', component: ViewStaffReviewComponent },
      { path: 'view-staff', component: MidYearReviewComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerformanceReviewRoutingModule {}
