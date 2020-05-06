import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
  
import { ContactusComponent } from "./contactus/contactus.component";
import { WelcomeComponent } from './welcome/welcome.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



const routes: Routes = [

  { path: "welcome", component: WelcomeComponent },
  { path: "contactus", component: ContactusComponent },
  { path: "", component: WelcomeComponent},
  { path: "**", component: PagenotfoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
