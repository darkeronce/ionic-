import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { TestProvider } from '../../providers/test/test'
import { UserDetailPage } from '../user-detail/user-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  userList : any = [];
  filterUserList : any = [];
  termino = '';

  constructor(public navCtrl: NavController, private test : TestProvider, private modal : ModalController) {

  }

  ionViewDidLoad(){
    this.fillUser();
  }

  userDetail(user){
    let modal = this.modal.create(UserDetailPage, {userData: user});
    modal.present();
    console.log(user);
  }

  fillUser(){
    this.test.getUsers().then(res => {
      console.log(res);
      this.userList = res;
      this.filterUserList = res;
    }, err => {
      console.log('err');
    })
  }


  userFilter(ev){
    this.userList = this.filterUserList.filter((item) => {
      return item.nombre.toLowerCase().includes(this.termino.toLowerCase());
  });  
  }

}
