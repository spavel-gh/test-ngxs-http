import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';

import { DataService } from './data.service';
import { DataModele } from './data.modele';

import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { DataState } from './data.state';
import { GetDataAction } from './data.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Select(DataState.getData) data!: Observable<DataModele[]>;

  // data?: DataModele;
  // private subscription: Subscription = new Subscription();

  constructor(
    // private dataServece: DataService,
    private store: Store,
  ){}


  updateData(): void {
    // this.subscription.add(this.dataServece.getData().subscribe((newData: DataModele) => {
    //   this.data = newData;
    //   console.log(this.data);
    // }));
  }


  ngOnInit(): void {
    this.store.dispatch(new GetDataAction());
  }
}
