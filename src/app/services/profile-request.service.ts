import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileComponent } from '../components/profile/profile.component';
import { User } from '../user'
// import { resolve } from 'dns';
import { rejects } from 'assert';

import { environment } from '../../environments/environment';
import { Repo } from '../repo';


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestService {
  user: User;
  repo: Repo;
  constructor(private http: HttpClient) { 
    this.user = new User("", "", "", "", "", 0, 0)
    this.repo = new Repo( "", "", "","","","")
  }

  searchUser(searchTerm) {
    interface Response {
      login: string,
      avatar_url: string,
      url: string,
      name: string,
      email: string,
      followers: number,
      following: number,
    }
    return new Promise((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + searchTerm + '?access_token=' + environment.apiKey).toPromise()
        .then((result) => {
          
          this.user = result
          resolve();
        }, (error) => {
          console.log(error);
          reject();
        })
    })

  }

  searchRepo(searchTerm) {
    interface Response {
      name: string,
      description: string,
      repos: string,
      language: string,
      html_url: string,
      created_at: string,
    }
    return new Promise((resolve, reject) => {
      this.http.get<Response>( 'https://api.github.com/users/' + searchTerm + '/repos?access_token=' + environment.apiKey).toPromise()
      .then((result) => {
          this.repo = result
          resolve();
        }, (error) => {
          console.log(error);
          reject();
        })
    })

  }
}




