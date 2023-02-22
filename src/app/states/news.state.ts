 import { New } from "../models/news.models";
 export interface NewState{
  loading : boolean;
  isSuccess: boolean;
  error: string;
  news: New[];

 }
