import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';

@Component({
  standalone: true,
  imports: [RouterModule, LayoutModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
}
