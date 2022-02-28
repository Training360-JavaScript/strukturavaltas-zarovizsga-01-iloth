import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, switchMap } from 'rxjs';
import { Car } from 'src/app/model/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-editor',
  templateUrl: './car-editor.component.html',
  styleUrls: ['./car-editor.component.scss']
})
export class CarEditorComponent implements OnInit {

  constructor(
    private service: CarService,
    private route: ActivatedRoute
  ) { }

  car$: Observable<Car> = this.route.params.pipe(
    switchMap( params => this.service.get(params['id']))
  )

  ngOnInit(): void {
  }

  onUpdate(car: Car) {
    this.service.update(car).subscribe((ret) => {  });
  }

}
