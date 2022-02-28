import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Drug } from './model/drug';
import { DrugService } from './service/drug.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'drugstore';

  drugList$: Observable<Drug[]> = this.drugService.getAll();

  //console.log(drugList$);

  constructor (
    private drugService: DrugService
  ) {}
  
}
