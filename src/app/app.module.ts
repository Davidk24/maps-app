import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormComponent } from './components/form/form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MainContainerComponent } from './components/main-container/main-container.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
  { path: '', component: MainContainerComponent, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SplashScreenComponent,
    SideBarComponent,
    FormComponent,
    MainContainerComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    GoogleMapsModule,
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
