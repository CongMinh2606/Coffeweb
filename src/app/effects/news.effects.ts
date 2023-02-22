

import { HttpClient } from '@angular/common/http';
import { NewActions } from './../actions/news.action';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of } from 'rxjs';

@Injectable()
export class New{
  apiURL="https://social.runwayclub.dev/api/articles/latest?page=1&per_page=2"
  constructor (private actions: Actions,private http:HttpClient){

  }
getNews$=createEffect(()=>{
  return this.actions.pipe(
    ofType(NewActions.getNews),
    switchMap((action)=>{
      return this.http.get (this.apiURL)
    }

    ),
    map((response:any)=>{
      console.log(response)
      return NewActions.getNewsSuccess({news:<Array<New[]>>response})
    }),
    catchError ((error)=>{
      return of( NewActions.getNewsFalure({error:error}))
    })
  )
})
}
