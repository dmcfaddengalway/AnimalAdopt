import { Component, OnInit, NgZone, ChangeDetectionStrategy } from '@angular/core';

import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';
import { FilterAnimalsService } from 'src/app/services/filter-animals/filter-animals.service';
import { Animal } from 'src/app/models/animal';
import { AvailableStates } from '../../../constants/view-states.constants';

@Component({
  selector: 'app-profile-squares',
  templateUrl: './profile-squares.component.html',
  styleUrls: ['./profile-squares.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ProfileSquaresComponent implements OnInit {

  public filterCriteria = '';
  public allAnimals: Animal[];
  public animalsToShow: Animal[];
  public loading = false;
  public ViewStates = AvailableStates;

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
              private filterAnimalsService: FilterAnimalsService,
             ) {

  }

  public ngOnInit() {
    this.showAnimals();
    this.loading = true;
  }

  public animalsTrackByFn(index: number, item: Animal): number {
    return item.id;
  }

  public adoptableState(): AvailableStates {
    if (this.loading === true) {
      return AvailableStates.loading;
    } else if (this.allAnimals.length > 0) {
      return AvailableStates.loaded;
    } else {
      return AvailableStates.empty;
    }
  }

  public showAnimals(): void {
    this.loading = true;
    this.displayAdoptablesService.getAllAnimals()
      .subscribe(animalsReturned => {
        this.allAnimals = animalsReturned;
        this.animalsToShow = this.getAnimalsToDisplay();
        this.loading = false;
        console.log('3: ', this.animalsToShow);
        console.log('3.1: ', this.allAnimals);
      });
  }

  public searchAnimals(filter: string): void {
    this.filterCriteria = filter;
    this.showAnimals();
  }

  public getAnimalsToDisplay(): Animal[] {
    console.log('1: ', this.allAnimals);
    return this.filterAnimalsService.filterByBreed(this.allAnimals, this.filterCriteria);
  }

}
