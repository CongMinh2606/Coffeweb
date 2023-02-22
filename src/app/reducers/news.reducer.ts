
import { state } from '@angular/animations';
import { NewActions } from './../actions/news.action';
import { createReducer, on } from "@ngrx/store"
import { NewState } from '../states/news.state';
  // loading : boolean;
  // isSuccess: boolean;
  // error: string;
  // news: New[];
const initialState: NewState={
  news:[],
  loading:false,
  isSuccess:true,
  error:''

}
export const newReducer = createReducer(
  initialState,
  on(NewActions.getNews,(state)=>{
    return{
     ...state,
     loading: true,
    }

   }),
   on(NewActions.getNewsSuccess,(state,{news})=>{
    return{
     ...state,
     loading: true,
     news: news,
    }

   }),
   on(NewActions.getNewsFalure,(state,{error})=>{
    return{
     ...state,
     loading: true,
     isSuccess: false,
     error: error,
    }

   }),
)
