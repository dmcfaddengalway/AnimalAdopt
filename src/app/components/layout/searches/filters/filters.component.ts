import { Component, OnInit } from '@angular/core';
import { FilterAnimalsPipe } from '../../../../pipes/filter-animals.pipe';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';
import { Option } from 'src/app/models/option.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [FilterAnimalsPipe, ProfileSquaresComponent]
})
export class FiltersComponent implements OnInit {

  public types: Option[] = [
    { name: 'Dogs', value: 'dog' },
    { name: 'Cats', value: 'cat' }
  ];

  public ages: Option[] = [
    { name: 'Puppy', value: 'puppy' },
    { name: 'Young Adult', value: 'young-adult' },
    { name: 'Adult', value: 'adult' },
    { name: 'Senior', value: 'senior' },
  ];

  public neuterStatus: Option[] = [
    { name: 'Neutered', value: 'neutered' },
    { name: 'Intact', value: 'intact' }
  ];

  public sizes: Option[] = [
    { name: 'Small', value: 'small' },
    { name: 'Medium', value: 'medium' },
    { name: 'Large', value: 'large' },
    { name: 'Extra Large', value: 'extra-large' },
  ];

  public maintenance: Option[] = [
    { name: 'Lazy', value: 'lazy' },
    { name: 'Active', value: 'active' }
  ];

  constructor(private profileSquares: ProfileSquaresComponent) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {
    const lowerFilter = filterCriteria.toLowerCase();
    // this.profileSquares.filterCriteria.push(lowerFilter);
    this.profileSquares.ngOnChange(lowerFilter);
  }

}
