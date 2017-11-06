import { Component, OnInit, ViewChild } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

import { LoginPage } from "../login/login";
import { SignupPage } from "../signup/signup";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  @ViewChild(Slides) slides: Slides;
  promos: AngularFireList<any>;

  constructor(public navCtrl: NavController, private afDB: AngularFireDatabase) {
    this.promos = this.afDB.list("/promos");
    this.promos.query.on("value", function(snapshots) {
      console.log(snapshots.val(), snapshots.toJSON());
    });
    console.log(this.promos.query.toJSON());
  }

  ngOnInit(): void {
    this.slides.startAutoplay();
  }

  login(): void {
    console.log(this.promos);
    this.navCtrl.push(LoginPage);
  }

  signup():void {
    this.navCtrl.push(SignupPage);
  }

}
