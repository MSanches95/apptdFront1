import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
//import { UploadPage } from '../upload/upload';

@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html'
})
export class UploadPage {

  constructor(public navCtrl: NavController, public authService: AuthProvider) {

  }

  //logout(){
  //  this.authService.logout();
    //this.navCtrl.setRoot(LoginPage);
    //console.log("Logout");
   //}
}
