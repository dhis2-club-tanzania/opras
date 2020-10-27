import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { GeneralComponent } from './pages/general/general.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/settings/profile', pathMatch: 'full' },
      {
        path: 'settings/general',
        component: GeneralComponent,
      },
      { path: 'settings/profile', component: ProfileComponent },
      { path: 'settings/about', component: AboutComponent },
      { path: '**', component: ProfileComponent },
    ],
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SettingsRoutingModule {}
