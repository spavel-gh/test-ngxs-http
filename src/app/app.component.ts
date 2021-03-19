import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DataService } from './data.service';
import { DataModele } from './data.modele';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data?: DataModele;
  private subscription: Subscription = new Subscription();

  constructor(
    private dataServece: DataService,
  ){}


  updateData(): void {
    this.subscription.add(this.dataServece.getData().subscribe((newData: DataModele) => {
      this.data = newData;
      console.log(this.data);
    }));
  }

}
