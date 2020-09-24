import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyObjectivesComponent } from './pages/my-objectives/my-objectives.component';
import { StaffObjectivesComponent } from './pages/staff-objectives/staff-objectives.component';
import { ObjectiveAgreementRoutingModule } from './objective-agreement-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    MyObjectivesComponent,
    StaffObjectivesComponent,
  ],
  imports: [CommonModule, ObjectiveAgreementRoutingModule],
})
export class ObjectiveAgreementModule {}
