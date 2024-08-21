import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Product, ProductSearchService } from '@ecommerce/data-access';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  of,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'lib-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$: Observable<Product[]> = of([]);
  private productService = inject(ProductSearchService);

  ngOnInit() {
    this.products$ = this.control.valueChanges.pipe(
      filter((text) => text?.length > 1),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((text) => {
        return this.productService.searchByName(text).pipe(
          catchError(() => {
            return of([]);
          })
        );
      })
    );
  }
}
