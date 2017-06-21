import {Component, OnInit, Input, Output,EventEmitter} from '@angular/core';
import {Movie} from "../movies/movies.model";

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
@Input('newMovie') movie:Movie;
@Output() selectedMovie = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  selected(){
    this.selectedMovie.emit();
  }
}
