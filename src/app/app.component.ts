import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, Observable } from 'rxjs';

interface DataModele {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  data?: DataModele;
  private subscription: Subscription = new Subscription();

  constructor(
    private httpClient: HttpClient,
  ){}


  getData(): Observable<DataModele> {
    return this.httpClient.get<DataModele>('https://jsonplaceholder.typicode.com/todos/1').pipe();
  }

  updateData(): void {
    this.subscription.add(this.getData().subscribe((newData: DataModele) => {
      this.data = newData;
      console.log(this.data);
    }));
  }

}
