import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterAnimals'
})
export class FilterAnimalsPipe implements PipeTransform {

  transform(animals: any[], searchCriterion: any[]): any {

    console.log('Search criterian: ', searchCriterion);
    console.log('Animals criterian: ', animals);

    if (!animals) {
      return [];
    }

    if (!searchCriterion) {
      return animals;
    }

    return animals.filter(animal => animal.type === searchCriterion);

  }
}
