import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAnimals',
  pure: false
})
export class FilterAnimalsPipe implements PipeTransform {

  transform(animals, searchCriterion: any[]): any {

    if (!animals) {
      return [];
    }

    if (!searchCriterion) {
      return animals;
    }

    return animals.filter(animal => animal.type === searchCriterion.toString());
  }
}
