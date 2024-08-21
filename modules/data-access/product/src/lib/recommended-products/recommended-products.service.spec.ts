import { TestBed } from '@angular/core/testing';

import { RecommendedProductsService } from './recommended-products.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { mockProducts } from '../mocks/product.mock';

describe('RecommendedProductsService', () => {
  let service: RecommendedProductsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(RecommendedProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return recommended products correctly', () => {
    // Arrange
    const url = `${service.apiUrl}products?page=1&limit=6`;
    let result: Product[] = [];

    // Act
    service.getProducts().subscribe((products) => (result = products));

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
