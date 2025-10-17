// src/app/services/event.service.ts
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(private firestore: AngularFirestore) {}

  getEvents(): Observable<Event[]> {
    return this.firestore.collection<Event>('local_events').valueChanges({ idField: 'id' });
  }
}
