import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { StageAniahComponent } from './stage-aniah/stage-aniah.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { StaffAniahComponent } from './staff-aniah/staff-aniah.component';
import { TeamComponent } from './team/team.component';
import { BioComponent } from './bio/bio.component';

const appRoutes: Routes = [
  { path: 'mon-premier', component: MonPremierComponent },
  { path: 'stage-aniah', component:  StageAniahComponent},
  { path: 'staff-aniah', component: StaffAniahComponent },
  { path: '', component: MonPremierComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    StageAniahComponent,
    StaffAniahComponent,
    TeamComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
