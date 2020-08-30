import { Component, OnInit } from '@angular/core';
import { ProfileRequestService } from '../../services/profile-request.service'
import { User } from '../../user'
import { Repo } from '../../repo'



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   user:User;
   repo:Repo;
  constructor( public profilerequestservice:ProfileRequestService) { }

  userProfile(searchTerm){
    this.profilerequestservice.searchUser(searchTerm).then((success)=>{
      this.user=this.profilerequestservice.user;
    });

    this.profilerequestservice.searchRepo(searchTerm).then((success)=>{
      this.repo=this.profilerequestservice.repo;
    });

  }

  ngOnInit(): void {
    this.userProfile("PerisOduol618");
  }


}
