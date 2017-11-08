import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';


import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage implements OnInit {
  email: string;
  password: string;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {

  }

  ngOnInit(): void {
  }

  signup(): void {
    this.afAuth.auth.app.auth().createUserWithEmailAndPassword(this.email, this.password);

  }
}
