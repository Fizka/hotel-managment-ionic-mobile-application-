import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  zalogowany: boolean;
  titlePage = 'Zaloguj';
  url = 'login';

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkLog() {
    return JSON.parse(sessionStorage.getItem('zalogowany'));
  }

  logOut() {
    if (this.checkLog()) {
      sessionStorage.clear();
      sessionStorage.setItem('login', JSON.stringify(null));
      sessionStorage.setItem('zalogowany', JSON.stringify(false));
    }
  }

  changePage() {
    console.log(this.checkLog());
    if (this.checkLog()) {
      this.titlePage = 'Wyloguj';
      this.url = 'room';
    } else {
      this.titlePage = 'Zaloguj';
      this.url = 'login';
    }
  }

  getActionLog(){
    this.logOut();
    this.changePage();
  }

}
