import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProtfolioComponent } from './pages/protfolio/protfolio.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
  {
    path: 'service',
    component: ServiceComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: ProtfolioComponent,
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
