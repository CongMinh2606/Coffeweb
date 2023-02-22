import { createAction,props } from "@ngrx/store"
import { New } from "../models/news.models"
export const NewActions ={
getNews: createAction ('[News] get all new'),
getNewsSuccess: createAction('[News] get all new success',props <{news:Array<any>}>()),

getNewsFalure: createAction ('[News] get all new success',props<{error: string}>()),
}


