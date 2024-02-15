import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { JoblistComponent } from './joblist/joblist.component';

const routes: Routes = [
  {path:'about',component:AboutComponent},
  {path:'home',component:HomeComponent},
  {path:'report',component:ReportComponent},
  {path:'joblist',component:JoblistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
