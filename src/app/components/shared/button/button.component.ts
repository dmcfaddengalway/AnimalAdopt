import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Output() click = new EventEmitter<MouseEvent>();
  @Input() buttonType: string;

  constructor() { }

  ngOnInit() {

  }

  public onButtonClick(event) {
    this.click.emit(event);
  }

}
