import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDividerModule, MatMenuModule, RouterOutlet, RouterLink, FlexLayoutModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'] // Fixed typo: changed `styleUrl` to `styleUrls`
})
export class NavbarComponent implements OnInit {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.XSmall,Breakpoints.Medium]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
}
