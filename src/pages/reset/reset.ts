import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html'
})
export class ResetPage implements OnInit{
  email: string;
  constructor(public navCtrl: NavController, private afAuth: AngularFireAuth) {

  }
  ngOnInit(): void {
  }

  reset(): void {
    this.afAuth.auth.app.auth().sendPasswordResetEmail(this.email).then((success) => {
      console.log(success);
    }, (error) => {
      console.log(error);
    })
  }
}
