import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product, RecommendedProductsService } from '@ecommerce/data-access';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, NgOptimizedImage],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  products$!: Observable<Product[] | null>;
  isLoading = true;

  constructor(private recommendedProductsService: RecommendedProductsService) {}
  ngOnInit(): void {
    this.products$ = this.recommendedProductsService.getProducts();
  }

  onImageLoad(event: Event) {
    const target = event.target as HTMLImageElement;
    this.isLoading = false;
  }
}
