// Core imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components imports
import { HomeComponent } from './home/home.component';
import { MyObjectivesComponent } from './pages/my-objectives/my-objectives.component';
import { StaffObjectivesComponent } from './pages/staff-objectives/staff-objectives.component';
import { ObjectiveAgreementRoutingModule } from './objective-agreement-routing.module';
import { AddAgreementComponent } from './pages/add-agreement/add-agreement.component';

// Material imports
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ViewStaffObjectiveComponent } from './pages/view-staff-objective/view-staff-objective.component';

@NgModule({
  declarations: [
    HomeComponent,
    MyObjectivesComponent,
    StaffObjectivesComponent,
    AddAgreementComponent,
    ViewStaffObjectiveComponent,
  ],
  imports: [
    CommonModule,
    ObjectiveAgreementRoutingModule,
    MatSnackBarModule,
    MatTableModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatSortModule,
    MatPaginatorModule,
  ],
})
export class ObjectiveAgreementModule {}
