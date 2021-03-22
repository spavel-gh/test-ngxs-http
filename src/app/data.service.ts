import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { DataModele } from './data.modele';

@Injectable({providedIn: 'root'})
export class DataService {
    constructor(private httpClient: HttpClient) { }
    
    public getData(): Observable<DataModele[]> {
        console.log('service get http');
        return this.httpClient.get<DataModele[]>('https://jsonplaceholder.typicode.com/todos/1');
        // return this.httpClient.get<DataModele>('https://jsonplaceholder.typicode.com/todos/1').pipe();
    }
}

