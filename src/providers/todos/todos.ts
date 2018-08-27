// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// //import { Http, Headers } from '@angular/http';

// /*
//   Generated class for the TodosProvider provider.

//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class TodosProvider {

//   constructor(public http: HttpClient) {
//     console.log('Hello TodosProvider Provider');
//   }

// }


import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { AuthProvider } from '../auth/auth';
import 'rxjs/add/operator/map';
 
@Injectable()
export class TodosProvider {
 
  constructor(public http: Http, public authService: AuthProvider) {
 
  }
 
  getTodos(){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Authorization', this.authService.token);
 
      this.http.get('https://YOUR_HEROKU_APP.herokuapp.com/api/todos', {headers: headers})
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, (err) => {
          reject(err);
        });
    });
 
  }
 
  createTodo(todo){
 
    return new Promise((resolve, reject) => {
 
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');
      headers.append('Authorization', this.authService.token);
 
      this.http.post('https://YOUR_HEROKU_APP.herokuapp.com/api/todos', JSON.stringify(todo), {headers: headers})
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
 
    });
 
  }
 
  deleteTodo(id){
 
    return new Promise((resolve, reject) => {
 
        let headers = new Headers();
        headers.append('Authorization', this.authService.token);
 
        this.http.delete('https://YOUR_HEROKU_APP.herokuapp.com/api/todos/' + id, {headers: headers}).subscribe((res) => {
            resolve(res);
        }, (err) => {
            reject(err);
        });   
 
    });
 
  }
 
}
