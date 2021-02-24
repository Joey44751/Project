import { Injectable, NgZone } from '@angular/core';
import firebase from 'firebase/app';
import { User } from "../app/user";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any;
  user: any;
  ngFireAuth: any;

  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) { 
     this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user') || '{}')
        JSON.parse(localStorage.getItem('user') || '{}');
      } else {
        localStorage.setItem('user', null!);
        JSON.parse(localStorage.getItem('user') || '{}');
      }
    }) 
  }
   // Sign in with email/password
   SignIn(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log('Logged in')
        this.ngZone.run(() => {
          this.router.navigate(['/playground']);
        });
       this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

   // Sign up with email/password
   SignUp(email: string, password: string) {
   return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        this.SendVerificationMail();
        this.SetUserData(result.user);
      }).catch((error) => {
        window.alert(error.message)
      })
  }

  // Send email verfificaiton when new user sign up
  SendVerificationMail() {
    return this.ngFireAuth.currentUser.then((u: { sendEmailVerification: () => any; }) => u.sendEmailVerification())
    .then(() => {
     // this.router.navigate(['verify-email']); // TODO
    })
  }

  // Reset Forggot password
  ForgotPassword(passwordResetEmail: string) {
    return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
    .then(() => {
      window.alert('Password reset email sent, check your inbox.');
    }).catch((error) => {
      window.alert(error)
    })
  }

  LogConsole(passwordResetEmail: string) {
      window.alert(passwordResetEmail);
  }

  // Returns true when user is logged in and email is verified
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user') || '{}');
    return (user !== null && user.emailVerified !== false) ? true : false;
  }

  
    



  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new firebase.auth.GoogleAuthProvider());
  }  

  // Auth logic to run auth providers
  AuthLogin(provider: firebase.auth.AuthProvider) {
    return this.afAuth.signInWithPopup(provider)
    .then((result) => {
        this.router.navigate(['/playground']);
    }).catch((error) => {
        console.log(error);
    })
  }

  SetUserData(user: firebase.User | null) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user?.uid}`);
    const userData: User = {
      uid: user?.uid || '{}',
      email: user?.email || '{}',
      displayName: user?.displayName || '{}',
      photoURL: user?.photoURL || '{}',
      emailVerified: user?.emailVerified || false
    }
    return userRef.set(userData, {
      merge: true
    })
  } 

  // Sign out
  SignOut() {
    return this.afAuth.signOut().then(() => {
      localStorage.removeItem('user');
      this.router.navigate(['app-login']);
    })
  }


}