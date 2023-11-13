import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChristmaslistComponent } from './christmaslist/christmaslist.component';
import { ChristmasactivitiesComponent } from './christmasactivities/christmasactivities.component';
import { SweetsComponent } from './sweets/sweets.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'christmaslist', component: ChristmaslistComponent },
    { path: 'christmasactivities', component: ChristmasactivitiesComponent },
    { path: 'sweets', component: SweetsComponent },
];
