// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed
import { RouterModule,Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NamelistComponent } from './namelist/namelist.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { StaffsComponent } from './staffs/staffs.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NamelistComponent,
    FooterComponent,
    StaffsComponent,
  
    
  ],
  imports: [BrowserModule, FormsModule,AppRoutingModule,
    RouterModule], // Include FormsModule if needed
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
