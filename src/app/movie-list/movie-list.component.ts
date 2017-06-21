import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Movie} from '../movies/movies.model';
import {AppService} from "../app.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
@Output() selectedMovie= new EventEmitter<Movie>();
  // showLoader:boolean=true;
  movies:Movie[] =[
    new Movie('Guardians of Galaxy 2','Action','http://screenrant.com/wp-content/uploads/2017/02/Guardians-of-the-Galaxy-Vol-2-wallpaper.jpg'),
    new Movie('La La Land','Romantic','https://48palw1jqfwf1zkjitvyccc1-wpengine.netdna-ssl.com/wp-content/uploads/2016/12/la-la-land.png'),
    new Movie('Wonder Women','Action','https://images6.alphacoders.com/810/thumb-350-810683.jpg')
  ];
  constructor(private appService:AppService) {

  }

  ngOnInit() {
  //   this.appService.getMovies() //gets data from the backend (php used)
  //       .subscribe(
  //           (response)=>{
  //             this.showLoader=false;
  //            // console.log(response.json());
  //            for(var item of response.json()){
  //              console.log(item);
  //              this.movies.push(new Movie(item.title,item.description,item.url));
  //            }
  //           },
  //           (error)=>console.log(error)
  //       );
  }

  onSelected(movie:Movie){
    this.selectedMovie.emit(movie);
  }
}
