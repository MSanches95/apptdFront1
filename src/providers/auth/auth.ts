// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Http, Headers } from '@angular/http';
// /*
//   Generated class for the AuthProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class AuthProvider {

//   constructor(public http: Http) {
//     console.log('Hello AuthProvider Provider');
//   }

// checkAuthentication(){
 
// return new Promise((resolve, reject) => {
 
// //         //Load token if exists
// //         this.storage.get('token').then((value) => {
 
// //             this.token = value;
 
// //             let headers = new Headers();
// //             headers.append('Authorization', this.token);
 
// //             this.http.get('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/protected', {headers: headers})
// //                 .subscribe(res => {
// //                     resolve(res);
// //                 }, (err) => {
// //                     reject(err);
// //                 });
 
// //         });        
 
// });
 
// }

//    createAccount(details){
 
//      return new Promise((resolve, reject) => {
 
// //         let headers = new Headers();
// //         headers.append('Content-Type', 'application/json');
 
// //         this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/register', JSON.stringify(details), {headers: headers})
// //           .subscribe(res => {
 
// //             let data = res.json();
// //             this.token = data.token;
// //             this.storage.set('token', data.token);
// //             resolve(data);
 
// //           }, (err) => {
// //             reject(err);
// //           });
 
//      });
 
//    }
 
// login(credentials){
 
//      return new Promise((resolve, reject) => {
 
// //         let headers = new Headers();
// //         headers.append('Content-Type', 'application/json');
 
// //         this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/auth/login', JSON.stringify(credentials), {headers: headers})
// //           .subscribe(res => {
 
// //             let data = res.json();
// //             this.token = data.token;
// //             this.storage.set('token', data.token);
// //             resolve(data);
 
// //             resolve(res.json());
// //           }, (err) => {
// //             reject(err);
// //           });
 
//      });
 
//    }
 
//    logout(){
// //     this.storage.set('token', '');
// }


// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpModule } from '@angular/http';
import { Http, Headers } from '@angular/http';
import { Storage } from '@ionic/storage';
//import { IonicStorageModule } from '@ionic/storage';
import 'rxjs/add/operator/map';
 
@Injectable()
export class AuthProvider {
 
  public token: any;
 
  constructor(public http: Http, public storage: Storage) {
 
  }
 
  checkAuthentication(){
 
    return new Promise((resolve, reject) => {
 
        //Load token if exists
        this.storage.get('token').then((value) => {
 
            this.token = value;
 
            let headers = new Headers();
            headers.append('Authorization', 'Bearer ' + this.token);
 
            this.http.get('http://localhost:3000/auth/isAuthenticated', {headers: headers})
                .subscribe(res => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
 
        });        
 
    });
 
  }
 
  createAccount(details){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('http://localhost:3000/auth/signup', JSON.stringify(details), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  login(credentials){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
 
        this.http.post('http://localhost:3000/auth/signin', JSON.stringify(credentials), {headers: headers})
          .subscribe(res => {
 
            let data = res.json();
            this.token = data.token;
            this.storage.set('token', data.token);
            resolve(data);
 
            resolve(res.json());
          }, (err) => {
            reject(err);
          });
 
    });
 
  }
 
  logout(){
    this.storage.set('token', '');
  }
 
}