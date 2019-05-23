import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { InternalisationService } from '../app/services/internalisation/internalisation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'AnimalAdopt';
  chosenLanguage = 'en';

  constructor(protected translateService: TranslateService, protected internalisationService: InternalisationService) {
    translateService.setDefaultLang('fr');
    document.cookie = 'userAppLanguage=' + this.internalisationService.setAppLanguage();
  }

  public switchAppLanguage(languageChoice) {
    this.chosenLanguage = languageChoice;
  }

}
