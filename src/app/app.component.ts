import { Component } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RegisterComponent,
    HttpClientModule
  ],
  providers: [],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tuck-shop';
}
