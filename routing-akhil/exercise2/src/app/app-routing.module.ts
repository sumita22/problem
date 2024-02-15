import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { StaffsComponent } from './staffs/staffs.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'staffs',component:StaffsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
