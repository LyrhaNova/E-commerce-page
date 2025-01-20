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
  ]
  currentIndex: number = 0;

  nextSlide() {
    this.setActiveArrow('right');
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.updateTransform();
  }

  prevSlide() {
    this.setActiveArrow('left');
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.updateTransform();
  }

  setActiveArrow(direction: string) {
    const arrow = document.querySelector(`.carousel__arrow.${direction}`);
    if (arrow) {
      arrow.classList.remove('active');
      setTimeout(() => {
        arrow.classList.add('active');
      }, 0);
    }
  }

  updateTransform() {
    const carouselImages = document.querySelector('.carousel__images') as HTMLElement;
    carouselImages.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}