import { MovieModel } from './model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  movies: MovieModel[] = []
  constructor() { 
    this.movies.push(this.getMovieObject("Avengers - End Game", 96, 800000, "avenger.jpg", "English"))
    this.movies.push(this.getMovieObject("Article - 15", 70, 7000, "article-15.jpg", "Hindi"))
    this.movies.push(this.getMovieObject("Dangal", 90, 6000, "dangal.jpg", "Hindi"))
    this.movies.push(this.getMovieObject("Ms Dhoni - The untold story", 90, 1000, "dhoni.jpg", "Tamil"))
    this.movies.push(this.getMovieObject("Jersey", 80, 700, "jersey.jpg", "Telugu"))
    this.movies.push(this.getMovieObject("Spiderman - Far from home", 70, 1000, "spiderman.jpg", "English"))
    let id = 0
    this.movies.forEach((e) => {
      e.id = id
      id++;
    })
  }

  
  private getMovieObject(title, rating, vote, img, language): MovieModel {
    let movie = new MovieModel();
    movie.name = title;
    movie.rating = rating;
    movie.votes = vote;
    movie.img = "assets/" + img;
    movie.id = 0;
    movie.language = language;
    return movie;
  }
}
