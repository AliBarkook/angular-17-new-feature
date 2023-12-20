import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserCardComponent } from '../../shared/components/user-card/user-card.component';


interface IUser {
  avatar_url: string,
  events_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  gravatar_id: string,
  html_url: string,
  id: number,
  login: string,
  node_id: string,
  organizations_url: string,
  received_events_url: string,
  repos_url: string,
  site_admin: false
  starred_url: string,
  subscriptions_url: string,
  type: string,
  url: string,
}


@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, MatListModule, HttpClientModule, UserCardComponent],
  // host: { ngSkipHydration: 'true'},
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: IUser[] = [];


  constructor(
    private http: HttpClient
  ){
    this.getUsers();
  }

  getUsers() {



    this.http.get<IUser[]>('https://api.github.com/users').subscribe(res => {
      
      this.users = res;
      // console.log(this.users);
    })
  }
}
