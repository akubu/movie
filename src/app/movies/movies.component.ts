import { Component, OnInit } from '@angular/core';
import {Movie} from "./movies.model";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movieForDetails:Movie;
  showMovieDetails:boolean=false;
  constructor() { }

  ngOnInit() {
  }

  onSelect(movie:Movie){
    this.movieForDetails=movie;
    this.showMovieDetails=true;
  }

}
