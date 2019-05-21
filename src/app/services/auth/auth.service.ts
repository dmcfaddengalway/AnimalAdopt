import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from 'firebase';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: User;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.user = user;
        localStorage.setItem('user', JSON.stringify(this.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }

  async login(email: string, password: string) {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    } catch (e) {
      alert('Error!' + e.message);
    }
  }

  async logout() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['admin/login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }


  public signInWithEmailAndPassword(email, password) {
    if (this.user) {
      console.log(email);
      console.log(password);
      this.router.navigate(['/home']);
    } else {
      return this.signInWithEmailAndPassword(email, password)
        .catch(error => {
          error = error.code;
        });
    }
  }

  public signInWithGithub() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.GithubAuthProvider()
      );
    }
  }

  public signInWithTwitter() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.TwitterAuthProvider()
      );
    }
  }

  public signInWithGoogle() {
    if (this.user) {
      this.router.navigate(['/home']);
    } else {
      return this.afAuth.auth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      );
    }
  }

}
