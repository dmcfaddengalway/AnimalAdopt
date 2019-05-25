import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactDetailsComponent } from './profile/contact-details/contact-details.component';
import { DataDownloadComponent } from './profile/data-download/data-download.component';
import { LanguageComponent } from './profile/language/language.component';
import { ProfilePasswordComponent } from './profile/profile-password/profile-password.component';
import { ProfileViewComponent } from './profile/profile-view/profile-view.component';
import { UserPortalComponent } from './profile/user-portal/user-portal.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../layout/generic/header/header.component';
import { FooterComponent } from '../layout/generic/footer/footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UsersRoutingModule } from './users-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { DropdownComponent } from '../shared/dropdown/dropdown.component';
import { ButtonComponent } from '../shared/button/button.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { HomeComponent } from '../layout/home/home.component';
import { DogHighlightComponent } from '../layout/home/dog-highlight/dog-highlight.component';
import { CatHighlightComponent } from '../layout/home/cat-highlight/cat-highlight.component';
import { FeaturedAnimalComponent } from '../layout/home/featured-animal/featured-animal.component';
import { NewsletterComponent } from '../layout/home/newsletter/newsletter.component';
import { DisplayAnimalsComponent } from '../layout/searches/display-animals/display-animals.component';
import { FiltersComponent } from '../layout/searches/filters/filters.component';
import { ProfileSquaresComponent } from '../layout/searches/profile-squares/profile-squares.component';
import { AnimalProfileComponent } from '../layout/searches/animal-profile-component/animal-profile.component';

@NgModule({
  declarations: [
    HomeComponent,
    DogHighlightComponent,
    CatHighlightComponent,
    FeaturedAnimalComponent,
    NewsletterComponent,
    ContactDetailsComponent,
    DataDownloadComponent,
    LanguageComponent,
    ProfilePasswordComponent,
    ProfileViewComponent,
    UserPortalComponent,
    DropdownComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    DisplayAnimalsComponent,
    FiltersComponent,
    ProfileSquaresComponent,
    AnimalProfileComponent,
  ],
  imports: [
    BrowserModule,
    UsersRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: true,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      isolate: true
    })
  ]
})
export class UsersModule { }
