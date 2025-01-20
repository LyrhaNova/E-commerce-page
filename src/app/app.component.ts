import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component'
import { CarouselComponent } from './carousel/carousel.component';
import { DescriptionComponent } from './description/description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, CarouselComponent, DescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
