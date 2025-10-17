// src/app/pages/home/home.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="home-bg min-h-screen flex flex-col items-center justify-center text-center">
      <h1 class="text-4xl md:text-6xl font-bold text-blue-800 mb-6 drop-shadow-lg">
        Micro Event Tracker
      </h1>
      <p class="text-lg md:text-2xl text-gray-900 mb-8 max-w-lg" i18n>
        Scopri tutti gli eventi locali per data e zona, filtrali per categoria e città, e trova l'evento perfetto vicino a te!
      </p>
      <a routerLink="/list" class="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition text-lg font-medium" i18n>
        Vai agli eventi
      </a>
    </div>
  `,
  styles: [`
    .home-bg {
      background: linear-gradient(135deg,#93c5fd 0%,#60a5fa 100%);
    }
  `]
})
export class HomeComponent {}
