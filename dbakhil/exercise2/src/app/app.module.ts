// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule if needed

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NamelistComponent } from './namelist/namelist.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NamelistComponent,
    FooterComponent,
  
    
  ],
  imports: [BrowserModule, FormsModule,], // Include FormsModule if needed
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
