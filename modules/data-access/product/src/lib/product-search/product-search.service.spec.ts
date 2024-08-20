import { TestBed } from '@angular/core/testing';

import { ProductSearchService } from './product-search.service';
import { provideHttpClient } from '@angular/common/http';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { Product } from '../models/product';
import { mockProducts } from '../mocks/product.mock';

describe('ProductSearchService', () => {
  let service: ProductSearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ProductSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return products correctly', () => {
    // Arrange
    const mockName = 'notebook';
    const url = `${service.apiUrl}/products?name=${mockName}`;
    let result: Product[] = [];

    // Act
    service.searchByName(mockName).subscribe((products) => (result = products));

    // Assert
    const request = httpMock.expectOne(url);
    request.flush(mockProducts);
    expect(request.request.method).toBe('GET');
    expect(result).toEqual(mockProducts);
  });
});
