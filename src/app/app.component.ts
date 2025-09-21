import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RifasComponent } from './components/rifas/rifas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RifasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rifaDoors';
}