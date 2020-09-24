import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { Section2Component } from './pages/section2/section2.component';
import { MyDashboardComponent } from './pages/my-dashboard/my-dashboard.component';

import { MatTabsModule } from '@angular/material/tabs';
import { DepartmentDashboardComponent } from './pages/department-dashboard/department-dashboard.component';

@NgModule({
  declarations: [HomeComponent, Section2Component, MyDashboardComponent, DepartmentDashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, MatTabsModule],
})
export class DashboardModule {}
