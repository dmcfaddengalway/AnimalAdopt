import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animal-profile',
  templateUrl: './animal-profile.component.html',
  styleUrls: ['./animal-profile.component.scss']
})
export class AnimalProfileComponent implements OnInit {

  public buttonType = 'submit';
  public animal;
  public id;
  public baseUrl = 'http://localhost:3000';

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    this.animal = this.getAnimal();
  }

  getAnimal() {
    return this.httpClient.get(this.baseUrl + '/displayAnimals/' + this.id).subscribe((res: any[]) => {
      this.animal = res;
    });
  }

}
