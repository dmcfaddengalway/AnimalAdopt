import { Component, OnInit } from '@angular/core';
import { ProfileSquaresComponent } from '../profile-squares/profile-squares.component';
import { DisplayAdoptablesService } from 'src/app/services/display-adoptables/display-adoptables.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [ProfileSquaresComponent]
})
export class FiltersComponent implements OnInit {

  types = ['Dog', 'Cat'];
  ages = ['Puppy', 'Young Adult', 'Adult', 'Senior'];
  public breedName = '';
  neuterStatus = ['Neutered', 'Intact'];
  sizes = ['Small', 'Medium', 'Large', 'Extra Large'];
  maintenance = ['Lazy', 'Active'];

  constructor(private profileSquares: ProfileSquaresComponent,
              private displayAdoptablesService: DisplayAdoptablesService
             ) { }

  ngOnInit() {
  }

  public updateFilters(filterCriteria: string) {
    this.profileSquares.searchAnimals(filterCriteria);
  }

  public updateList() {
    this.profileSquares.loading = true;
    this.displayAdoptablesService.getAllAnimalsWithParams(this.breedName)
      .subscribe(animal => {
        console.log('fdfds', animal);
        this.profileSquares.animalsToShow = animal;
        this.profileSquares.loading = false;
      });
  }

}
