import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerformanceReviewRoutingModule } from './performance-review-routing.module';
import { SelfReviewComponent } from './pages/self-review/self-review.component';
import { StaffReviewComponent } from './pages/staff-review/staff-review.component';
import { MidYearReviewComponent } from './pages/mid-year-review/mid-year-review.component';

// Material Imports
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { AddReviewComponent } from './pages/add-review/add-review.component';

@NgModule({
  declarations: [
    SelfReviewComponent,
    StaffReviewComponent,
    MidYearReviewComponent,
    AddReviewComponent,
  ],
  imports: [
    CommonModule,
    PerformanceReviewRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
  ],
})
export class PerformanceReviewModule {}
