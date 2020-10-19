import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerformanceReviewRoutingModule } from './performance-review-routing.module';
import { SelfReviewComponent } from './pages/self-review/self-review.component';
import { StaffReviewComponent } from './pages/staff-review/staff-review.component';
import { MidYearReviewComponent } from './pages/mid-year-review/mid-year-review.component';
import { AddReviewComponent } from './pages/add-review/add-review.component';
import { AnnualReviewComponent } from './pages/annual-review/annual-review.component';

// Material Imports
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    SelfReviewComponent,
    StaffReviewComponent,
    MidYearReviewComponent,
    AddReviewComponent,
    AnnualReviewComponent,
  ],
  imports: [
    CommonModule,
    PerformanceReviewRoutingModule,
    MatTabsModule,
    MatIconModule,
    MatExpansionModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSliderModule,
  ],
})
export class PerformanceReviewModule {}
