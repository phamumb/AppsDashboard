import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardTileComponent } from './components/dashboard-tile/dashboard-tile.component';
import { DashboardHomePageComponent } from './pages/dashboard-home-page/dashboard-home-page.component';
import { DashboardNavComponent } from './components/dashboard-nav/dashboard-nav.component';
import { DashboardContainerComponent } from './containers/dashboard-container/dashboard-container.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardTileComponent,
    DashboardHomePageComponent,
    DashboardNavComponent,
    DashboardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
