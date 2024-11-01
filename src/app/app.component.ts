import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsListComponent } from './components/cards-list/cards-list.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso1.0';
}
