import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EventListComponent } from './components/event-list/event-list.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: EventListComponent },
  { path: '**', redirectTo: '' }
];

export class AppRoutingModule {}
