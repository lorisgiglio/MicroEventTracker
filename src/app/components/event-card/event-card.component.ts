// src/app/components/event-card/event-card.component.ts
import { Component, Input } from '@angular/core';
import { Event } from '../../models/event.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-center mb-4 hover:bg-blue-50 transition-all">
      <img [src]="event.link_img" alt="Event Image" class="w-32 h-32 rounded-lg object-cover mr-4 mb-2 md:mb-0" />
      <div class="flex-1">
        <h2 class="text-xl font-bold mb-1 text-blue-700">{{ event.titolo }}</h2>
        <div class="text-gray-600 mb-2">
          <span class="mr-2"><i class="fa fa-map-marker-alt"></i> {{ event.citta }}, {{ event.luogo }}</span>
          <span class="mr-2"><i class="fa fa-calendar-alt"></i> {{ event.data }}</span>
        </div>
        <div class="flex gap-2 mb-2">
          <span *ngFor="let cat of event.categoria" class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{{ cat }}</span>
        </div>
        <p class="text-gray-800">{{ event.orario }}</p>
        <a class="text-blue-600 underline mt-2 inline-block" [href]="event.link_titolo" target="_blank" i18n>
          Dettagli evento
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class EventCardComponent {
  @Input() event!: Event;
}
