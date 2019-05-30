import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AuthService } from './services/auth/auth.service';
import { DisplayAdoptablesService } from './services/display-adoptables/display-adoptables.service';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { AboutComponent } from './components/legal/about/about.component';
import { PrivacyPolicyComponent } from './components/legal/privacy-policy/privacy-policy.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { DogHighlightComponent } from './components/layout/home/dog-highlight/dog-highlight.component';
import { CatHighlightComponent } from './components/layout/home/cat-highlight/cat-highlight.component';
import { FeaturedAnimalComponent } from './components/layout/home/featured-animal/featured-animal.component';
import { NewsletterComponent } from './components/layout/home/newsletter/newsletter.component';
import { DisplayAnimalsComponent } from './components/layout/searches/display-animals/display-animals.component';
import { FiltersComponent } from './components/layout/searches/filters/filters.component';
import { ProfileSquaresComponent } from './components/layout/searches/profile-squares/profile-squares.component';
import { AnimalProfileComponent } from './components/layout/searches/animal-profile-component/animal-profile.component';
import { InternalisationService } from './services/internalisation/internalisation.service';
import { UsersModule } from './components/auth/users.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    SignupComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UsersModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: true,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    AngularFireModule.initializeApp(environment.firebase, 'angular-auth-firebase'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ],
  providers: [
    AuthService,
    InternalisationService,
    DisplayAdoptablesService
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
