import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';
import { LaunchsListComponent } from './launchs-list/launchs-list.component';

const routes: Routes = [
  { path:'' , component:LaunchsListComponent},
  { path:'launch/:id' , component:LaunchDetailsComponent},
  { path:'**' , component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
