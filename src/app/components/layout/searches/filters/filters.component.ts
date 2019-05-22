import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  types = ['Dog', 'Cat'];
  ages = ['Puppy', 'Young Adult', 'Adult', 'Senior'];
  public breedName = '';
  neuterStatus = ['Neutered', 'Intact'];
  sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  maintenance = ['Lazy', 'Active'];

  control: FormControl = new FormControl('');
  @Output() add = new EventEmitter();
  selectedFilters: number;

  constructor(private displayAdoptablesService: DisplayAdoptablesService,
              private activatedRoute: ActivatedRoute,
              private httpClient: HttpClient,
              private router: Router
             ) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {
    // this.add.emit(filterCriteria);

    // this.profileSquares.showAnimals(filterCriteria);
    this.activatedRoute.queryParamMap.subscribe(params => {
      console.log('Array of Params: ', params.get('gender'));
      this.router.navigate([], { relativeTo: this.activatedRoute, queryParams: this.activatedRoute.snapshot.queryParams });
      this.displayAdoptablesService.getAllAnimals(params);
    });
  }

  // public updateList() {
  //   this.profileSquares.loading = true;
  //   this.displayAdoptablesService.getAllAnimals()
  //     .subscribe(animal => {
  //       console.log('fdfds', animal);
  //       this.profileSquares.animalsToShow = animal;
  //       this.profileSquares.loading = false;
  //     });
  // }

}
