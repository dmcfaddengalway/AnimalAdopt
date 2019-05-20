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

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
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
    component: AnimalProfileComponent
  },
  {
    path: 'displayAnimals',
    component: DisplayAnimalsComponent
  },
  {
    path: 'portal',
    component: UserPortalComponent,
      children: [
        {
          path: '',
          component: ProfileViewComponent
        },
        {
          path: 'profileView',
          component: ProfileViewComponent
        },
        {
          path: 'profilePassword',
          component: ProfilePasswordComponent
        },
        {
          path: 'contactDetails',
          component: ContactDetailsComponent
        },
        {
          path: 'dataDownload',
          component: DataDownloadComponent
        },
        {
          path: '**',
          component: UserPortalComponent
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
