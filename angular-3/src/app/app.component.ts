import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Construction } from './model/construction';
import { ConstructionService } from './service/construction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private service: ConstructionService
  ) { }

  data$: Observable<Construction[]> = this.service.getAll();
  title = 'angular-3';

  onDelete(item: Construction): void {
    this.service.delete(item.id).subscribe((ret) => { this.data$ = this.service.getAll(); });
  }

}
