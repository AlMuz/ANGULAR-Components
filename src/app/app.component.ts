import {Component} from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Want to learn Angular!', text: 'Im still newbie in this thing', id: 1},
    {title: 'Want to learn React', text: 'Im still newbie in this thing', id: 2},
  ];

  updatePosts(post: Post): void {
    this.posts.unshift(post);
  }

  removePost(id: number): void {
    this.posts = this.posts.filter(p => p.id !== id);
  }
}
