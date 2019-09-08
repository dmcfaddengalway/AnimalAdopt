import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

import { Animal } from '../../models/animal.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisplayAdoptablesService {

  private baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  public getAnimalById(id: number): Observable<Animal> {
    return this.httpClient.get<Animal>(this.baseUrl + '/displayAnimals/' + `${id}`);
  }

  public getAllAnimals(params: string): Observable<Animal[]> {
    const options = params.trim() ? new HttpParams()
      .append('id', params) : {} ;

    console.log('fdsds', params);

    return this.httpClient.get<Animal[]>(this.baseUrl + '/displayAnimals', options);
  }
}
