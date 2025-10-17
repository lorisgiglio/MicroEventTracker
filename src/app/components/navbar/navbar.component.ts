import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  template: `
    <nav class="bg-blue-800 text-white px-4 py-3">
      <div class="flex items-center justify-between">
        <span class="font-bold text-xl" i18n>Micro Event Tracker</span>
        <!-- Hamburger per mobile -->
        <button (click)="toggleMenu()" class="md:hidden py-2 px-3 flex items-center">
          <span class="material-icons">menu</span>
        </button>
      </div>
      <!-- Menu links: su mobile mostra solo se menuOpen, su desktop sempre -->
      <div
        class="flex-col gap-2 mt-2 md:mt-0 md:flex md:flex-row md:gap-6"
        [class.hidden]="!menuOpen && isMobile"
      >
        <a
          routerLink="/"
          class="py-2 px-4 hover:bg-blue-700 rounded"
          (click)="closeMenuOnNavigate()"
          i18n
        >HOME</a>
        <a
          routerLink="/list"
          class="py-2 px-4 hover:bg-blue-700 rounded"
          (click)="closeMenuOnNavigate()"
          i18n
        >LISTA</a>
      </div>
    </nav>
  `,
  styles: []
})
export class NavbarComponent {
  menuOpen = false;
  isMobile = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.checkScreenSize.bind(this));
  }

  checkScreenSize() {
    // md breakpoint Tailwind = 768px
    this.isMobile = window.innerWidth < 768;
    if (!this.isMobile) {
      this.menuOpen = false;
    }
  }

  toggleMenu() {
    if (this.isMobile) this.menuOpen = !this.menuOpen;
  }

  closeMenuOnNavigate() {
    if (this.isMobile) {
      this.menuOpen = false;
    }
  }
}
