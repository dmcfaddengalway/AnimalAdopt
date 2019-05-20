import { Component, OnInit } from '@angular/core';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [ProfileSquaresComponent]
})
export class FiltersComponent implements OnInit {

  types = ['Dog', 'Cat'];
  ages = ['Puppy', 'Young Adult', 'Adult', 'Senior'];
  breeds = ['Boxer', 'Doodle', 'German Shepard', 'Great Dane', 'Whippet'];
  neuterStatus = ['Neutered', 'Intact'];
  sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  maintenance = ['Lazy', 'Active'];

  constructor(private profileSquares: ProfileSquaresComponent) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {
    this.profileSquares.searchAnimals(filterCriteria);
  }

}
