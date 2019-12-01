import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "../welcome/welcome.component";
import { SignupComponent } from "../auth/signup/signup.component";
import { LoginComponent } from "../auth/login/login.component";
import { TrainingComponent } from "../training/training.component";

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'training', component: TrainingComponent },
  { path: 'signin', component: LoginComponent },
  { path: '**', redirectTo:'' }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}