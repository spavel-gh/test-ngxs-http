import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs/operators';

import { DataModele } from './data.modele';
import { DataService } from './data.service';
import { GetDataAction } from './data.action';



export class DataStateModele {
    dataState!: DataModele[];
}

@State<DataStateModele>({
    name: 'dataOnState',
    defaults: {
        dataState: [],
    },
})


@Injectable()
export class DataState {

    constructor(
        private dataService: DataService,
    ) { }

    @Selector()
    static getData(state: DataStateModele) {
        return state.dataState;
    }

    @Action(GetDataAction)
    getData({ getState, setState }: StateContext<DataStateModele>) {
        return this.dataService.getData().pipe(
            tap((result) => {
                const state = getState();
                setState({
                    ...state,
                    dataState: result,
                });
            })
        );
    }
}
