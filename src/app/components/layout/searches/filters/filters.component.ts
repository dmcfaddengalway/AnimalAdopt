import { Component, OnInit } from '@angular/core';
import { FilterAnimalsPipe } from '../../../../pipes/filter-animals.pipe';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [FilterAnimalsPipe, ProfileSquaresComponent]
})
export class FiltersComponent implements OnInit {

  types = ['Dogs', 'Cats'];
  ages = ['Puppy', 'Young Adult', 'Adult', 'Senior'];
  breeds = ['Boxer', 'Doodle', 'German Shepard', 'Great Dane', 'Whippet'];
  neuterStatus = ['Neutered', 'Intact'];
  sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  maintenance = ['Lazy', 'Active'];

  constructor(public filterAnimalsPipe: FilterAnimalsPipe, private profileSquares: ProfileSquaresComponent) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {
    const lowerFilter = filterCriteria.toLowerCase();
    // this.profileSquares.filterCriteria.push(lowerFilter);
    this.profileSquares.ngOnChange(lowerFilter);
  }

}
