import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class RecommendedProductsService {
  readonly apiUrl = 'https://66c3b99fd057009ee9c116eb.mockapi.io/';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}products`, {
      params: {
        page: 1,
        limit: 6,
      },
    });
  }
}
