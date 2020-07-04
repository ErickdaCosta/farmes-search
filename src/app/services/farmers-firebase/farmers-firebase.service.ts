import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmersFirebaseService {

  constructor(private firestore: AngularFirestore) { }

  public getFarmers(searchTerm?: string, searchType?: string): Observable<firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>> {
    return this.firestore.collection('farmers', q => q.where(searchType, '==', searchTerm)).get();
  }
}
