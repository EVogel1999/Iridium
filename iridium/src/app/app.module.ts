import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { EventyrerComponent } from './eventyrer/eventyrer.component';
import { ByggerComponent } from './bygger/bygger.component';
import { HomeComponent } from './eventyrer/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FeaturedComponent } from './eventyrer/home/featured/featured.component';
import { CardComponent } from './shared/card/card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { CardViewComponent } from './eventyrer/card-view/card-view.component';
import { NotFoundComponent } from './auth/not-found/not-found.component';
import { ProfileComponent } from './eventyrer/profile/profile.component';
import { Campaign } from './interfaces/campaign';
import { User } from './interfaces/user'
import { CampaignService } from './services/campaign.service';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: 'auth/sign-in', component: LoginComponent },
  { path: 'auth/sign-up', component: SignUpComponent },
  { path: 'auth/reset-password', component: ResetPasswordComponent },
  { path: 'eventyrer', component: EventyrerComponent },
  { path: 'eventyrer/campaign/:id', component: CardViewComponent },
  { path: 'eventyrer/profile/:username', component: ProfileComponent },
  { path: 'bygger', component: ByggerComponent },
  { path: '', redirectTo: '/eventyrer', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EventyrerComponent,
    ByggerComponent,
    HomeComponent,
    NavbarComponent,
    FeaturedComponent,
    CardComponent,
    FooterComponent,
    AuthComponent,
    LoginComponent,
    SignUpComponent,
    ResetPasswordComponent,
    CardViewComponent,
    NotFoundComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
