import { Component, OnInit } from '@angular/core';
import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';
import { Option } from 'src/app/models/option.model';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
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

  constructor(private profileSquares: ProfileSquaresComponent,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private displayAdoptablesService: DisplayAdoptablesService
             ) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {

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
