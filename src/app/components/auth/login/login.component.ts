import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;

  constructor(private firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = firebaseAuth.authState;

    this.user.subscribe((user) => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  ngOnInit() {
  }

  // signInWithEmailAndPassword(email, password) {
  //   if (this.user) {
  //     console.log(email);
  //     console.log(password);
  //     this.router.navigate(['/home']);
  //   } else {
  //     return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
  //     .catch(function(error) {
  //       error = error.code;
  //       var errorMessage = error.message;
  //     });
  //   }
  // }

  signInWithGithub() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      );
    }
  }

  signInWithTwitter() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      );
    }
   }

   signInWithGoogle() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.firebaseAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    }
   }

  isLoggedIn() {
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/login']))
      .catch((error) => this.router.navigate(['/page-not-found']))
  }

}
