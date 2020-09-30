import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routing Module
import { PlanningRoutingModule } from './planning-routing.module';

// Angular Material imports
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';

// Components
import { HomeComponent } from './home/home.component';
import { ViewGroupComponent } from './pages/view-group/view-group.component';
import { EditGroupComponent } from './pages/edit-group/edit-group.component';

@NgModule({
  declarations: [HomeComponent, ViewGroupComponent, EditGroupComponent],
  imports: [
    CommonModule,
    PlanningRoutingModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
    MatRippleModule,
    MatTabsModule,
    MatTableModule,
  ],
})
export class PlanningModule {}
