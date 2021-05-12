import { Component, OnInit } from '@angular/core';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';

import { Breed, NeuterStatus } from '../../../../models/breed';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [ProfileSquaresComponent]
})
export class FiltersComponent implements OnInit {

  types = ['Dog', 'Cat'];
  ages = ['Puppy', 'Young Adult', 'Adult', 'Senior'];
  breeds = [Breed.BOXER, Breed.DOODLE, Breed.GERMAN_SHEPARD, Breed.GERMAN_SHEPARD, Breed.WHIPPET];
  neuterStatus = [NeuterStatus.INTACT, NeuterStatus.NEUTERED];
  sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  maintenance = ['Lazy', 'Active'];

  constructor(private profileSquares: ProfileSquaresComponent) { }

  ngOnInit() { }

  public updateFilters(filterCriteria: string) {
    const lowerFilter = filterCriteria.toLowerCase();
    this.profileSquares.updateFilter(lowerFilter);
  }

}
