import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { mockProducts } from '@ecommerce/data-access';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = mockProducts;
  isLoading = true;

  onImageLoad(event: Event) {
    const target = event.target as HTMLImageElement;
    this.isLoading = false; // Alterna para falso quando a imagem terminar de carregar
  }
}
