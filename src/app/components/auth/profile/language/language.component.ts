import { Component, OnInit } from '@angular/core';
import { InternalisationService } from '../../../../services/internalisation/internalisation.service';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languages = [
    { name: 'English', tag: 'en', default: true},
    { name: 'Esperanto', tag: 'eo' },
    { name: 'French', tag: 'fr' },
    { name: 'Spanish', tag: 'es' }
  ];
  public languageCode: string;

  constructor(private internalisationService: InternalisationService) {
  }

  ngOnInit() {
  }

  public setLanguage() {
    console.log(this.languageCode);
    document.cookie = 'userAppLanguage=' + this.languageCode;
    this.internalisationService.setAppLanguage();
  }

}
