import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterviewListComponent } from './interview-list/interview-list.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  {path:'jobs',component:JobsComponent},
  {path:'interview-list',component:InterviewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
