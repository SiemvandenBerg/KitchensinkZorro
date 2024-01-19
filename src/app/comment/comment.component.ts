import { Component } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  author = 'Author Name';
  datetime = new Date().toISOString();
  content = 'Comment content';
  avatar = 'https://example.com/avatar.jpg'; // URL of the avatar image
}