import { HttpClient } from "@angular/common/http";
export interface Artical{
    typeof: string;
    id: number;
    title: string;
    description:string;
    readabase_publish_date: Date;
    slug:string;
    path: string; 
    url:string; 
}