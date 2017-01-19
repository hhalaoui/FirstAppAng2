import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { RouterComponent } from './router/router.component';

const appRoutes:Routes = [{path: 'center', component: RouterComponent}];

@NgModule({
  declarations: [
    AppComponent,
    RouterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
