import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserPortalComponent } from './profile/user-portal/user-portal.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';
import { ContactDetailsComponent } from './profile/contact-details/contact-details.component';
import { DataDownloadComponent } from './profile/data-download/data-download.component';
import { LanguageComponent } from './profile/language/language.component';

import { AuthGuard } from '../../guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from '../layout/home/home.component';
import { SignupComponent } from './signup/signup.component';
import { AnimalProfileComponent } from '../layout/searches/animal-profile-component/animal-profile.component';
import { DisplayAnimalsComponent } from '../layout/searches/display-animals/display-animals.component';
import { AboutComponent } from '../legal/about/about.component';
import { PrivacyPolicyComponent } from '../legal/privacy-policy/privacy-policy.component';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';

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
  // {
  //   path: 'displayAnimals',
  //   component: DisplayAnimalsComponent,
  //   canActivate: [AuthGuard]
  // },
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
