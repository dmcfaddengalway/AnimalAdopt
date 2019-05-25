import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Option } from '../../../models/option.model';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public optionList: Option[] = [
    { name: 'Profile', value: 'profileView'},
    { name: 'Security', value: 'profilePassword'},
    { name: 'Contact Details', value: 'contactDetails'},
    { name: 'Data Download', value: 'dataDownload' },
    { name: 'Language', value: 'language'}
  ];
  public selectedOption: string;

  constructor(private router: Router) {

  }

  ngOnInit() {
    this.selectedOption = 'profileView';
  }

  public updateSelectedOption(profileOption) {
    this.selectedOption = profileOption.trim();
    this.router.navigate([`/portal/${this.selectedOption}`], { queryParamsHandling: 'preserve'});
  }

}
