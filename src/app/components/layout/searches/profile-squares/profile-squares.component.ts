import { Component, OnInit } from '@angular/core';

import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';

import { FilterAnimalsPipe } from '../../../../pipes/filter-animals.pipe';
import { resolve6 } from 'dns';

@Component({
  selector: 'app-profile-squares',
  templateUrl: './profile-squares.component.html',
  styleUrls: ['./profile-squares.component.scss'],
  providers: [FilterAnimalsPipe]
})
export class ProfileSquaresComponent implements OnInit {

  filteredResults = [];
  filterCriteria: any[] = [];
  animals: any[] = [];
  baseUrl = 'http://localhost:3000';

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
              private filterAnimalsPipe: FilterAnimalsPipe,
             ) {

  }

  ngOnInit() {
    return this.displayAdoptablesService.getAnimals()
      .subscribe((res: any[]) => {
        this.animals = res;
        console.log('Animals init: ', this.animals);
      });
  }

  ngOnChange(filter) {
    this.filterCriteria.push(filter);
    console.log('Adding to filterCriteria: ', this.filterCriteria);

    this.animals = this.filterAnimalsPipe.transform(this.animals, this.filterCriteria);
    console.log('Animals change: ', this.animals);
  }

}
