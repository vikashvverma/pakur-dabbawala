import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage implements OnInit{

  constructor(public navCtrl: NavController) {

  }
  ngOnInit(): void {
  }

  signup(): void {
    this.navCtrl.push(SignupPage);
  }
}
