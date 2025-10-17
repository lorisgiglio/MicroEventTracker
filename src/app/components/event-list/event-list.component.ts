// src/app/components/event-list/event-list.component.ts
import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../models/event.model';
import { map } from 'rxjs/operators';
import { EventCardComponent } from '../event-card/event-card.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-event-list',
  template: `
    <div class="flex flex-wrap gap-4 mb-4">
      <select [(ngModel)]="selectedCategory" class="p-2 rounded border">
        <option value="" i18n>Categoria</option>
        <option *ngFor="let cat of categories">{{ cat }}</option>
      </select>
      <select [(ngModel)]="selectedCity" class="p-2 rounded border">
        <option value="" i18n>Città</option>
        <option *ngFor="let city of cities">{{ city }}</option>
      </select>
    </div>
    <div>
      <app-event-card *ngFor="let event of filteredEvents()" [event]="event"></app-event-card>
    </div>
  `,
  styles: [],
  imports: [CommonModule, FormsModule, EventCardComponent],
  standalone: true
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  categories: string[] = [];
  cities: string[] = [];
  selectedCategory = '';
  selectedCity = '';

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.eventService.getEvents().pipe(
      map(events => events.sort((a, b) => a.data.localeCompare(b.data)))
    ).subscribe(events => {
      this.events = events;
      this.categories = Array.from(new Set(events.flatMap(e => e.categoria)));
      this.cities = Array.from(new Set(events.map(e => e.citta)));
    });
  }

  filteredEvents(): Event[] {
    let filtered = this.events;
    if (this.selectedCategory) {
      filtered = filtered.filter(e => e.categoria.includes(this.selectedCategory));
    }
    if (this.selectedCity) {
      filtered = filtered.filter(e => e.citta === this.selectedCity);
    }
    return filtered;
  }
}
