import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/dashboard/dashboard.module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: 'planning',
        loadChildren: () =>
          import('./pages/planning/planning.module').then(
            (m) => m.PlanningModule
          ),
      },
      {
        path: 'objectives-agreement',
        loadChildren: () =>
          import('./pages/objective-agreement/objective-agreement.module').then(
            (m) => m.ObjectiveAgreementModule
          ),
      },
      {
        path: 'performance-review',
        loadChildren: () =>
          import('./pages/performance-review/performance-review.module').then(
            (m) => m.PerformanceReviewModule
          ),
      },
    ],
  },
  {
    path: 'settings',
    loadChildren: () =>
      import('./pages/settings/settings.module').then((m) => m.SettingsModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class RoutingModule {}
