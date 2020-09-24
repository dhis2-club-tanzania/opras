import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';

@NgModule({
  declarations: [HomeComponent, GeneralComponent, ProfileComponent],
  imports: [CommonModule, SettingsRoutingModule],
})
export class SettingsModule { }
