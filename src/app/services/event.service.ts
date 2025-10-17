import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({ providedIn: 'root' })
export class EventService {
  constructor(private firestore: Firestore) {}
  
  getEvents(): Observable<Event[]> {
    const eventsCollection = collection(this.firestore, 'local_events');
    return collectionData(eventsCollection, { idField: 'id' }) as Observable<Event[]>;
  }
}

