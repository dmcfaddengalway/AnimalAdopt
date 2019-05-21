import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Animal } from '../../models/animal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayAdoptablesService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  public getAnimalById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.baseUrl + '/displayAnimals/' + `${id}`);
  }

  public getAllAnimals(breedName?: string): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.baseUrl + '/displayAnimals');
    // .filter(animal => animal.type.toLocaleLowerCase().includes('dog'));
  }

  public getAllAnimalsWithParams(breedName?: string): Observable<Animal[]> {
    let params;

    if (breedName) {
      params = new HttpParams().set('breed', 'Bulldog');
    } else {
      params = null;
    }

    return this.httpClient.get<Animal[]>(this.baseUrl + '/displayAnimals', {params});
      // .filter(animal => animal.type.toLocaleLowerCase().includes('dog'));
  }
}
