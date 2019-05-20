import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Animal } from '../../models/animal.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DisplayAdoptablesService {

  baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {

  }

  public getAnimalById(id: number): Observable<any> {
    return this.httpClient.get(this.baseUrl + '/displayAnimals/' + `${id}`);
  }

  public getAnimals() {
    return this.httpClient.get(this.baseUrl + '/displayAnimals');
  }
}
