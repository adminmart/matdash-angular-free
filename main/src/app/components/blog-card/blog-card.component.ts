import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { TablerIconsModule } from 'angular-tabler-icons';

// card 2
interface cardimgs {
  id: number;
  time: string;
  imgSrc: string;
  user: string;
  title: string;
  views: string;
  category: string;
  comments: number;
  date: string;
}

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [MatCardModule, MatChipsModule, TablerIconsModule, MatButtonModule],
  templateUrl: './blog-card.component.html',
})
export class AppBlogCardsComponent {
  constructor() {}

  //   card 2
  cardimgs: cardimgs[] = [
    {
      id: 1,
      time: '2 mins Read',
      imgSrc: '/assets/images/blog/blog-img1.jpg',
      user: '/assets/images/profile/user-1.jpg',
      title: 'As yen tumbles, gadget-loving Japan goes for iPhones',
      views: '9,125',
      category: 'Social',
      comments: 3,
      date: 'Mon, Dec 2025',
    },
    {
      id: 2,
      time: '2 mins Read',
      imgSrc: '/assets/images/blog/blog-img2.jpg',
      user: '/assets/images/profile/user-2.jpg',
      title:
        'Intel loses bid to revive antitrust case against patent foe Fortress',
      views: '9,125',
      category: 'Gadget',
      comments: 3,
      date: 'Sun, Dec 2025',
    },
    {
      id: 3,
      time: '2 mins Read',
      imgSrc: '/assets/images/blog/blog-img3.jpg',
      user: '/assets/images/profile/user-3.jpg',
      title: 'COVID outbreak deepens as more lockdowns loom in China',
      views: '9,125',
      category: 'Health',
      comments: 12,
      date: 'Sat, Dec 2025',
    },
  ];
}
