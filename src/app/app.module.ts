import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderModule } from 'primeng/slider';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavMenuComponent } from './component/nav-menu/nav-menu.component';
import { PrimengModule } from './primeng.module';
import { HomeComponent } from './component/home/home.component';
import { MemberListComponent } from './component/member-list/member-list.component';
import { MemberFormComponent } from './component/member-form/member-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { UserNameComponent } from './component/user-name/user-name.component';
import { PasswordComponent } from './component/password/password.component';
import { ErrorsComponent } from './component/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    MemberListComponent,
    MemberFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SliderModule,
    FormsModule,
    ReactiveFormsModule,
    PrimengModule,
    CommonModule,
    HttpClientModule,
    SignUpComponent,
    UserNameComponent,
    PasswordComponent,
    ErrorsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SignUpComponent,
    UserNameComponent,
    PasswordComponent,
    ErrorsComponent,
  ],
})
export class AppModule {}
