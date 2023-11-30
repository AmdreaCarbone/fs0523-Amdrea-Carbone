import { InactiveComponent } from './pages/inactive/inactive.component';
import { ActiveComponent } from './pages/active/active.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'attivi',
    component: ActiveComponent
  },
  {
    path: 'non-attivi',
    component: InactiveComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
