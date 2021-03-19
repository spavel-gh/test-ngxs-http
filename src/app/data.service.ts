import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataModele } from './data.modele';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }
    
    getData(): Observable<DataModele> {
        return this.httpClient.get<DataModele>('https://jsonplaceholder.typicode.com/todos/1').pipe();
    }
}

