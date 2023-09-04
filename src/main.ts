import { bootstrapApplication,provideProtractorTestingSupport } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import routes from './app/app-routing.module';

bootstrapApplication(AppComponent,
  {providers: [
    provideProtractorTestingSupport(), 
    provideAnimations(),
    provideRouter(routes)
  ]})
.catch(err => console.error(err));