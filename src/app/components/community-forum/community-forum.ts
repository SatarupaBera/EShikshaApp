import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-community-forum',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './community-forum.html',
  styleUrls: ['./community-forum.css']
})
export class CommunityForumComponent {
  isFormOpen: boolean = false;
  newPostTitle: string = '';
  newPostContent: string = '';

  posts = [
    { 
      id: 1, 
      title: 'RxJS error handling in Service', 
      author: 'Rahul S.', 
      date: 'Yesterday', 
      replies: 2, 
      category: 'Technical',
      content: 'I am struggling with catching errors in my pipe... any tips?'
    },
    { 
      id: 2, 
      title: 'Welcome to the May Batch!', 
      author: 'Admin', 
      date: '1 week ago', 
      replies: 15, 
      category: 'General',
      content: 'Glad to have you all here. Let’s build something great.'
    }
  ];

  toggleForm() {
    this.isFormOpen = !this.isFormOpen;
  }

  submitPost() {
    if (!this.newPostTitle || !this.newPostContent) return;

    const newEntry = {
      id: this.posts.length + 1,
      title: this.newPostTitle,
      author: 'Shahin Shamsher', // Your name for the demo
      date: 'Just now',
      replies: 0,
      category: 'Question',
      content: this.newPostContent
    };

    this.posts.unshift(newEntry); // Add to top of list
    this.newPostTitle = '';
    this.newPostContent = '';
    this.isFormOpen = false;
  }
}