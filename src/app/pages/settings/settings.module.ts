import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material imports
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

// Components
import { HomeComponent } from './home/home.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { AboutComponent } from './pages/about/about.component';

@NgModule({
  declarations: [
    HomeComponent,
    GeneralComponent,
    ProfileComponent,
    AboutComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
  ],
})
export class SettingsModule {}
