import { Injectable } from '@angular/core';
import { Movie } from '../Movie';
@Injectable()
export class MovieService {

  constructor() { }

  getMovies() {
    const movies: Movie[] = [];

    movies.push(
      new Movie('Deadpool', 'https://yts.am/assets/images/movies/deadpool_2016/medium-cover.jpg', 'Tim Miller',2016,'Action', 200, 10,0,false),
      new Movie('Deadpool2','https://yts.am/assets/images/movies/deadpool_2_2018/medium-cover.jpg', 'David Leitch',2018,'Action', 300, 20,0,false),
      new Movie('Johnny English Reborn', 'https://yts.am/assets/images/movies/Johnny_English_Reborn_2011/medium-cover.jpg', 'Oliver Parker',2011,'Comedy', 100,15,0,false),
      new Movie('Transformers: The Last Knight', 'https://yts.am/assets/images/movies/transformers_the_last_knight_2017/medium-cover.jpg', 'Michael Bay',2017,'', 250, 25,0,false),
      new Movie('Parmanu: The Story of Pokhran', 'https://yts.am/assets/images/movies/parmanu_the_story_of_pokhran_2018/medium-cover.jpg', 'Abhishek Sharma',2018,'', 125,30,0,false)
                 );
    return movies;
  }

}
