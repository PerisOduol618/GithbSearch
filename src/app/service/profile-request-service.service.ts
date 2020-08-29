import { Injectable } from '@angular/core';
// import 'rxjs/add/operator/map';
import { map } from "rxjs/operators";
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ProfileRequestServiceService {

  private username: string;
  private clientid = '1551423aba72f333d791';
  private clientsecret = '5ac2b64026115fc50c4b9709595e31ca050283c2';


  constructor(private http: HttpClient) {
    console.log("services is ready");
    this.username = 'PerisOduol618';
  }
  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client-id" + this.clientid + "$client-secret" + this.clientsecret).pipe(map(res => res.json())) }
}
