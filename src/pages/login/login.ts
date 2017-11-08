import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { SignupPage } from "../signup/signup";
import { ResetPage } from "../reset/reset";

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

  reset():void{
    this.navCtrl.push(ResetPage);
  }
}
