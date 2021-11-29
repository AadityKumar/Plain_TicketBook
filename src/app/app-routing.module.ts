import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AirasiaComponent } from './airasia/airasia.component';
import { AirindiaComponent } from './airindia/airindia.component';
import { GoairComponent } from './goair/goair.component';
import { IndigoComponent } from './indigo/indigo.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserinfoComponent } from './pages/userinfo/userinfo.component';

const routes: Routes = [
  {path:"", redirectTo:"/login", pathMatch:"full"},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"userinfo", component:UserinfoComponent},
  {path:"airindia", component:AirindiaComponent},
  {path:"airasia", component:AirasiaComponent},
  {path:"goindia", component:GoairComponent},
  {path:"indigo", component:IndigoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
