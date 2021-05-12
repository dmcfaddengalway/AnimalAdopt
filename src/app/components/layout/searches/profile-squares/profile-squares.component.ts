import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/models/animal';

import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';

@Component({
  selector: 'app-profile-squares',
  templateUrl: './profile-squares.component.html',
  styleUrls: ['./profile-squares.component.scss']
})
export class ProfileSquaresComponent {
  public filteredResults = [];
  public filterCriteria: any[] = [];
  public animals: Animal[] = [];

  constructor(private displayAdoptablesService: DisplayAdoptablesService) {
    this.displayAdoptablesService.getAnimals()
      .subscribe(res => {
        this.animals = res;
        this.filteredResults = res;
        console.log('Animals init: ', this.animals);
        console.log('Filtered Animals init: ', this.filteredResults);
      });
  }

  ngOnChange(filter: string) {
    console.log('Filtering by: ', filter);

    this.filteredResults = this.animals.filter(animal => {
      return animal.type == filter;
    });

    console.log('FilteredAnimals change: ', this.filteredResults);
    console.log('Animals: ', this.animals);
  }

}
