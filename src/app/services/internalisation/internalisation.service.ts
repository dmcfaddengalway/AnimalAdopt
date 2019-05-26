import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { CookieService } from '../cookie-service/cookie-service.service';

@Injectable({
  providedIn: 'root'
})
export class InternalisationService {

  public languageTag: string;
  public defaultLanguage = 'en';
  private translatedLocales = ['en', 'eo', 'fr', 'es'];

  constructor(private cookieService: CookieService, private translateService: TranslateService) {}

  public setAppLanguage(): void {
    this.translateService.setDefaultLang('en');
    this.translateService.use(this.getUserPreferredLanguage());
  }

  public getAppLanguage() {
    return this.getUserPreferredLanguage();
  }

  private getUserPreferredLanguage(): string {
    this.languageTag = this.findLanguageInCookie() || this.findLanguageInBrowser();

    return this.translatedLocales.includes(this.languageTag) ? this.languageTag : this.defaultLanguage;
  }

  private findLanguageInCookie(): string {
    return this.cookieService.get('userAppLanguage');
  }

  private findLanguageInBrowser(): string {
    return 'en';
  }

}
