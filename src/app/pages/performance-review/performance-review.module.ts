import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceReviewRoutingModule } from './performance-review-routing.module';
import { SelfReviewComponent } from './pages/self-review/self-review.component';
import { StaffReviewComponent } from './pages/staff-review/staff-review.component';

@NgModule({
  declarations: [SelfReviewComponent, StaffReviewComponent],
  imports: [CommonModule, PerformanceReviewRoutingModule],
})
export class PerformanceReviewModule {}
