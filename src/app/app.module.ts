import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MaterialModule } from "./shared/angularMaterial/MaterialModule.module";
import { SignupComponent } from "./auth/signup/signup.component";
import { LoginComponent } from "./auth/login/login.component";
import { TrainingComponent } from "./training/training.component";
import { NewTariningComponent } from "./training/new-tarining/new-tarining.component";
import { PastTariningComponent } from "./training/past-tarining/past-tarining.component";
import { CurrentTariningComponent } from "./training/current-tarining/current-tarining.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { HeaderComponent } from './navigation/header.component';
import { SidnavComponent } from './navigation/sidnav.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    NewTariningComponent,
    PastTariningComponent,
    CurrentTariningComponent,
    WelcomeComponent,
    HeaderComponent,
    SidnavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
