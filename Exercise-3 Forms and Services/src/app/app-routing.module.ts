import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {path:'content',component:ContentComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
