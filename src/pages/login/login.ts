import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { SecurityApiProvider } from '../../providers/security-api/security-api.service';
import { SecurityUser } from '../../providers/security-api/security-api.model';
import { TabsPage } from '../../pages/tabs/tabs';

import { AppContext } from '../../providers/feritual-api/feritual-api.model';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public context : AppContext;
  username : string = '';
  password : string = '';
  error : string;

  constructor(public navCtrl: NavController,
    public api : SecurityApiProvider,
    public loadingCtrl : LoadingController,
    public navParams: NavParams) {
      this.context = AppContext;  // need this access static vars in html template
  }

  ionViewDidLoad() {
    this.isUserLoggedIn();
  }

  isUserLoggedIn() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });

    loader.present();

    this.api.getLoggedInUser()
      .then(data => {
        if(data!=null) {
          AppContext.user = data;
          console.log('AppContext.user', data);
          this.navCtrl.push(TabsPage);
        }
        loader.dismiss();
      });
  }


  login() {
    let loader = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    loader.present();

    this.api.authenticate(this.username, this.password).subscribe(data => {
        console.log('authenticate', data);

        var user : SecurityUser  = data;
        if(user!=null && user.userId != null && user.userId>0) {
          this.api.storeLoggedInUser(user)
            .then(data => {
              AppContext.user = data;
              this.navCtrl.push(TabsPage);
            });
          }
        else {
          this.error = 'Login failed for the login name and password combination';
          console.log(data);
          loader.dismiss();
          //alert('login failed');
        }
      },
      error =>
      {
        this.error = 'Login failed for the login name and password combination';
        console.log(error);
        loader.dismiss();
        }
      );
  }

}
