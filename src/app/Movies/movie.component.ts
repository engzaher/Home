import { Component, OnInit, Input } from '@angular/core';
import {Movie} from '../Movie';
import { MovieService } from '../services/movie.service';
import {CopounsComponent} from '../copouns/copouns.component'

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  temp: Movie[] = [];
  addedItems;
 @Input() total: number;
 returned: number;
 m: Movie;
 cartVal: string;
  constructor( private dataSerive: MovieService) {
    this.movies = dataSerive.getMovies();
  }
  
  ngOnInit() {

  }


  removeMovie(movie: Movie) {
    this.returned = Number.parseInt(movie.getQty().toString()) + Number.parseInt(movie.getAddedQty().toString()) ;
    movie.setQty(this.returned);
    movie.setAdded(false);
  }

  addNewMovie(mov: Movie , quntity: number ) {
    if (mov.getQty() >= quntity && quntity > 0) {
      mov.setQty( mov.getQty() - quntity);
      mov.setAdded(true);
      mov.setAddedQty(quntity);
    }
  }
  Incr(mov: Movie) {
    if (mov.getQty() > 0) {
      mov.setAddedQty(Number.parseInt(mov.getAddedQty().toString()) + 1);
      mov.setQty(mov.getQty() - 1);
    }
  }
  Decr(mov: Movie) {
    if (mov.getAddedQty() == 1) {
      this.removeMovie(mov);
    } else {
      mov.setAddedQty(Number.parseInt(mov.getAddedQty().toString()) - 1);
      mov.setQty(Number.parseInt(mov.getQty().toString()) + 1);
    }
  }
  CalculateTotal() {
    //this.total = Number.parseInt(this.total.toString());
    this.total = 0;
    for (this.m of this.movies) {
      if (this.m.getAdded() === true) {
        this.total += Number.parseInt(this.m.getAddedQty().toString()) * Number.parseInt(this.m.getPrice().toString());
      }
    }
    this.cartVal = this.total.toString();
    return this.total.toString();
  }
}
