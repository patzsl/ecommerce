import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly apiUrl = 'https://66c3b99fd057009ee9c116eb.mockapi.io/';

  constructor(private http: HttpClient) {}

  searchByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: { name },
    });
  }
}
