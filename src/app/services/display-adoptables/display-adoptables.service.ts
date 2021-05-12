import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Animal } from '../../models/animal';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayAdoptablesService {

  animals: Animal[] = [];
  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  public getAnimals() {
    return this.httpClient.get<Animal[]>(this.baseUrl + '/displayAnimals');
  }

  public getAnimalById(id: number): Observable<any> {
    return this.httpClient.get<Animal>(this.baseUrl + '/displayAnimals/' + `${id}`);
  }

}
