import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from '../global.service';
import { MovieModel } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  moviesArray: MovieModel[] = []
  permanentMovies: MovieModel[] = []
  languages = ["English", "Hindi", "Tamil", "Telugu", "Kanada"]
  selecteLanguage = []
  constructor(private global: GlobalService, private rtr: Router) {
    this.initialMovies()
  }

  initialMovies() {
    this.permanentMovies = this.global.movies.map(m => Object.assign({}, m))
    this.moviesArray = this.global.movies.map(m => Object.assign({}, m))
  }

  goToBook(id) {
    this.rtr.navigate(['book/', id])
  }

  selectedLang(event, lan) {
    if (event.target.checked) {
      this.selecteLanguage.push(lan)
    } else {
      let index = this.selecteLanguage.indexOf(lan)
      this.selecteLanguage.splice(index, 1)
    }
    if (this.selecteLanguage.length > 0) {
      let temp = this.permanentMovies.filter(p => this.selecteLanguage.findIndex(s => (p.language == s)) > -1)
      this.moviesArray = temp.map(m => Object.assign({}, m))
    } else {
      this.moviesArray = this.permanentMovies.map(m => Object.assign({}, m))
    }
  }

}
