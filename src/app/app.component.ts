import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component'
import { CarouselComponent } from './carousel/carousel.component';
import { DescriptionComponent } from './description/description.component';
import { PurchaseComponent } from './purchase/purchase.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavigationComponent, CarouselComponent, DescriptionComponent, PurchaseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {}
