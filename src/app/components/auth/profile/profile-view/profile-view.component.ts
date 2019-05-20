import { Component, OnInit } from '@angular/core';
import { UserSettingsService } from 'src/app/services/user-settings/user-settings.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  public user: User[];

  constructor(private userSettingsService: UserSettingsService) { }

  ngOnInit() {
    this.userSettingsService.getUser(8)
      .subscribe(person => {
        this.user.push(person);
        console.log(this.user);
      });
  }

}
