import { Component, OnInit } from '@angular/core';

import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';

import { FilterAnimalsPipe } from '../../../../pipes/filter-animals.pipe';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile-squares',
  templateUrl: './profile-squares.component.html',
  styleUrls: ['./profile-squares.component.scss'],
  providers: [FilterAnimalsPipe]
})
export class ProfileSquaresComponent implements OnInit {

  filteredResults = [];
  filterCriteria: any[] = [];
  public animals: Observable<any[]>;
  baseUrl = 'http://localhost:3000';

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
              private filterAnimalsPipe: FilterAnimalsPipe) {
    this.displayAdoptablesService.getAnimals()
      .subscribe(data => {
        this.animals = data;
      });
  }

  ngOnInit() {

  }

  ngOnChange(filter) {
    this.filterCriteria.push(filter);

    this.animals = this.filterAnimalsPipe.transform(this.animals, this.filterCriteria);
  }

}
