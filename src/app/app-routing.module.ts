import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AboutComponent } from './components/legal/about/about.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { DisplayAnimalsComponent } from './components/layout/searches/display-animals/display-animals.component';
import { AnimalProfileComponent } from './components/layout/searches/animal-profile-component/animal-profile.component';
import { UserPortalComponent } from './components/auth/profile/user-portal/user-portal.component';
import { ProfileViewComponent } from './components/auth/profile/profile-view/profile-view.component';
import { ProfilePasswordComponent } from './components/auth/profile/profile-password/profile-password.component';
import { ContactDetailsComponent } from './components/auth/profile/contact-details/contact-details.component';
import { DataDownloadComponent } from './components/auth/profile/data-download/data-download.component';

import { AuthGuard } from './guards/auth.guard';
import { LanguageComponent } from './components/auth/profile/language/language.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'displayAnimals/:id',
    component: AnimalProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'displayAnimals',
    component: DisplayAnimalsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'portal',
    component: UserPortalComponent,
      children: [
        {
          path: '',
          component: ProfileViewComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'profileView',
          component: ProfileViewComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'profilePassword',
          component: ProfilePasswordComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'contactDetails',
          component: ContactDetailsComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'dataDownload',
          component: DataDownloadComponent,
          canActivate: [AuthGuard]
        },
        {
          path: 'language',
          component: LanguageComponent,
          canActivate: [AuthGuard]
        },
        {
          path: '**',
          component: ProfileViewComponent,
          canActivate: [AuthGuard]
        }
      ]
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
