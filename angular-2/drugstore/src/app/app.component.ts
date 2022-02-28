import { Component } from '@angular/core';
import { map } from 'rxjs';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private drugService: DrugService
  ) {
    drugService.getAll().subscribe((drugs) => {
      console.log(drugs);
    });
  }
  title = 'drugstore';



}
