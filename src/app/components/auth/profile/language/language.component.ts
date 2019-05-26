import { Component, OnInit } from '@angular/core';
import { InternalisationService } from '../../../../services/internalisation/internalisation.service';
import { Option } from '../../../../models/option.model';

@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  public languages: Option[] = [
    { name: 'English', value: 'en'},
    { name: 'Esperanto', value: 'eo' },
    { name: 'French', value: 'fr' },
    { name: 'Spanish', value: 'es' }
  ];
  public languageCode: string;

  constructor(private internalisationService: InternalisationService) {
  }

  ngOnInit() {
    this.languageCode = 'en';
  }

  public setLanguage() {
    document.cookie = 'userAppLanguage=' + this.languageCode;
    this.internalisationService.setAppLanguage();
  }

}
