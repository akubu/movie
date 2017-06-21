import {Http} from '@angular/http';
import {Injectable} from "@angular/core";

@Injectable()
export class AppService{
    constructor(private http:Http){}
    getMovies(){
        return this.http.get('http://localhost:8000/getMovies');
    }
}