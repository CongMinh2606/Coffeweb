import { NewActions } from './../../actions/news.action';
import { Observable } from 'rxjs';
import { NewState } from './../../states/news.state';
import { Component,  OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  new$!: Observable<NewState>;
  constructor(private newStore:Store<{new:NewState}>){
    this.new$= this.newStore.select('new')
  }
  ngOnInit(): void {
    this.newStore.dispatch(NewActions.getNews());
  }


  }




