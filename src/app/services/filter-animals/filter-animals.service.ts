import { Injectable } from '@angular/core';
import { Animal } from '../../models/animal.model';

@Injectable({
  providedIn: 'root'
})
export class FilterAnimalsService {

  public filterByBreed(animals: Animal[], type: string[]) {
    console.log('2: ', animals);

    if (!animals.length || !type) {
      return animals;
    }

    return animals.filter(animal => animal.type.toLowerCase().includes(type[0]));
  }

}
