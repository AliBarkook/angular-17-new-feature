import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { IUserInfo } from '../../interfaces/user.interface';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, HttpClientModule, MatButtonModule, MatProgressSpinnerModule, NgOptimizedImage],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {

  @Input() username: string;

  userInfo: IUserInfo;
  loading: boolean;

  
  constructor(
    private http: HttpClient
  ){
    console.log('user card component inited');
  }
  
  
  ngOnChanges(changes: SimpleChanges): void {
    this.getUserInfo(this.username);
  }


  getUserInfo(username: string) {
    this.loading = true;
    
    setTimeout(() => {
      this.http.get<IUserInfo>(`https://api.github.com/users/${username}`).subscribe(res => {
        this.loading = false;
        this.userInfo = res;
      })
    }, 3000);

  }

}
