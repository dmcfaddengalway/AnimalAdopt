import { Component, OnInit } from '@angular/core';

import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';
import { Animal } from 'src/app/models/animal';
import { AvailableStates } from '../../../constants/available-states.constants';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile-squares',
  templateUrl: './profile-squares.component.html',
  styleUrls: ['./profile-squares.component.scss']
})
export class ProfileSquaresComponent implements OnInit {

  public filterCriteria = [];
  public allAnimals: Animal[];
  public animalsToShow: Animal[];
  public loading = false;
  public ViewStates = AvailableStates;

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {

  }

  public ngOnInit() {
    this.showAnimals(null);
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log('In profile: ', params.get('gender'));
      this.displayAdoptablesService.getAllAnimals(params);
    });
    this.loading = true;
  }

  public animalsTrackByFn(index: number, item: Animal): number {
    return item.id;
  }

  public adoptableState(): AvailableStates {
    if (this.loading === true) {
      return AvailableStates.loading;
    } else if (this.animalsToShow.length > 0) {
      return AvailableStates.loaded;
    } else {
      return AvailableStates.empty;
    }
  }

  public showAnimals(filters): void {
    this.loading = true;
    this.displayAdoptablesService.getAllAnimals(filters)
      .subscribe(animalsReturned => {
        this.animalsToShow = animalsReturned;
        this.loading = false;
        console.log('3: ', this.animalsToShow);
      });
  }

  public bundleParams(filter) {
    if (this.filterCriteria.includes(filter)) {
      this.filterCriteria.push(filter);
      this.showAnimals(this.filterCriteria);
      this.router.navigate(['/displayAnimals']);
      console.log(this.filterCriteria);
    }
  }

  // public searchAnimals(filter: string): void {
  //   // this.filterCriteria = filter;
  //   this.showAnimals();
  // }

  // public getAnimalsToDisplay(): Animal[] {
  //   console.log('1: ', this.allAnimals);
  //   return this.filterAnimalsService.filterByBreed(this.allAnimals, this.filterCriteria);
  // }

}
