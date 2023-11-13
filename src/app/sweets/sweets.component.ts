import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sweets',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './sweets.component.html',
  styleUrl: './sweets.component.css'
})
export class SweetsComponent {

}
