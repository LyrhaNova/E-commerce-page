import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CarouselComponent {
  images = [
    { src: 'assets/images/image-product-1.jpg', alt: 'Image de la chaussure 1' },
    { src: 'assets/images/image-product-2.jpg', alt: 'Image de la chaussure 2' },
    { src: 'assets/images/image-product-3.jpg', alt: 'Image de la chaussure 3' },
    { src: 'assets/images/image-product-4.jpg', alt: 'Image de la chaussure 4' }
  ];
  currentIndex: number = 0;

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.updateTransform();
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.updateTransform();
  }

  updateTransform() {
    const carouselImages = document.querySelector('.carousel__images') as HTMLElement;
    carouselImages.style.transition = 'transform 0.5s ease-in-out';
    carouselImages.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}