import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})
export class UserDetailPage {

  userDetail = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl : ToastController, public viewCtrl : ViewController) {
    let data = navParams.get('userData');
    this.userDetail = data;

    this.checkValidDate(data.fechaNacimiento);
    this.checkValidRut(data.rut);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

  checkValidDate(date){
    let data = date.split('/');

    var day = Number.parseInt(data[0]);
    var month = Number.parseInt(data[1]);
    var year = Number.parseInt(data[2]);

    var validDay = day => 1  && day <= 31 ? true : false; 
    var validMonth = month >=1 && month <= 12 ? true : false; 
    var validYear = year >= 1900 && year <= 2019 ? true : false; 

    var valid = validDay && validMonth && validYear ? true : false;

    console.log(valid);

    let toast = this.toastCtrl.create({
      message: 'Fecha de nacimiento Invalida',
      duration: 1000,
      position: 'bottom'
    });

    if(!valid){
      toast.present();
    }
  }

  checkValidRut(rut){
    let data = rut.split('-');
    console.log(data);
    var init = data[0];
    var dv = data[1];

    var validInit = init.length <= 9 ? true : false;
    console.log(validInit);

    var validDv = Number.parseInt(dv) >= 0 && Number.parseInt(dv) <= 9 ? true : false;

    var valid = validInit && validDv;

    let toast = this.toastCtrl.create({
      message: 'Rut Invalido',
      duration: 1000,
      position: 'bottom'
    });

    if(!valid){
      toast.present();
    }

  }


  closeModal(){
    this.viewCtrl.dismiss();
  }

}
