import { ChangeDetectorRef, Component } from '@angular/core';
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

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
    private cdr: ChangeDetectorRef) {
    this.displayAdoptablesService.getAnimals()
      .subscribe(res => {
        this.animals = res;
        this.filteredResults = res;
        console.log('Animals init: ', this.animals);
        console.log('Filtered Animals init: ', this.filteredResults);
      });
  }

  updateFilter(filter: string) {
    console.log('Filtering by: ', filter);

    this.filteredResults = this.animals.filter(animal => {
      return animal.breed == filter;
    });

    this.cdr.detectChanges();

    console.log('FilteredAnimals change: ', this.filteredResults);
  }

}
