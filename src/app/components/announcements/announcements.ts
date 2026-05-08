import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-announcements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './announcements.html',
  styleUrls: ['./announcements.css']
})
export class Announcements{
  // Centralized data for the announcements tab
  notifications = [
    { 
      title: 'New Assignment live!', 
      body: 'The Angular Forms project has been uploaded.', 
      time: '10 MINS AGO', 
      type: 'info' 
    },
    { 
      title: 'Upcoming Live Session', 
      body: 'Join us at 5:00 PM for a Q&A on RxJS.', 
      time: '1 HOUR AGO', 
      type: 'warning' 
    },
    { 
      title: 'Final Project Deadline', 
      body: 'All submissions must be completed by May 27th.', 
      time: '2 DAYS AGO', 
      type: 'danger' 
    }
  ];
}