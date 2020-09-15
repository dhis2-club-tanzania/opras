import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InstructorRoutingModule } from './instructor-routing.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, InstructorRoutingModule],
})
export class InstructorModule {}
