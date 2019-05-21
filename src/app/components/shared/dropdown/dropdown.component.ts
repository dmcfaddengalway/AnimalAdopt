import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  public optionList = ['Profile', 'Security', 'Contact Details', 'Data Download', 'Language'];

  constructor() { }

  ngOnInit() {

  }

}
