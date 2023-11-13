import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLinkActive, RouterOutlet } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ChristmaslistComponent } from './christmaslist/christmaslist.component';
import { ChristmasactivitiesComponent } from './christmasactivities/christmasactivities.component';
import { FooterComponent } from './footer/footer.component';
import { SweetsComponent } from './sweets/sweets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet, 
            NavbarComponent,
            HomeComponent,
            ChristmasactivitiesComponent,
            ChristmaslistComponent,
            FooterComponent,
            SweetsComponent,
            RouterOutlet,
            RouterLinkActive,
            RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DavidWebApp';
}
