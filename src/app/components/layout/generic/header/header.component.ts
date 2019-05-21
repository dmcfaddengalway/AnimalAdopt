import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  public isLoggedIn = false;

  constructor(private authService: AuthService) {
    this.isLoggedIn = authService.isLoggedIn;
  }

  ngOnInit() {

  }

}
