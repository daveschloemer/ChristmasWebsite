import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-christmaslist',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './christmaslist.component.html',
  styleUrl: './christmaslist.component.css'
})
export class ChristmaslistComponent {
  cardsData = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.'
    },
    // Add more card objects as needed
  ];
}
