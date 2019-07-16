import { SelectedTheatreModal } from './../model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GlobalService } from '../global.service';
import { MovieModel } from '../model';

@Component({
  selector: 'app-bookpage',
  templateUrl: './bookpage.component.html',
  styleUrls: ['./bookpage.component.css']
})
export class BookpageComponent implements OnInit {

  bookMovie: MovieModel = new MovieModel()
  theatres = ["Luxe Cinemas", "Spi Cinemas", "Pvr VR"]
  timing = ["10:00 AM", "1:00 PM", "4:00 PM", "7:00 PM", "10:00 PM"]
  price = 0
  selectedTheatre = new SelectedTheatreModal()
  ticketsBooked = false
  constructor(public activatedRoute: ActivatedRoute, private global: GlobalService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.bookMovie = this.global.movies.find(m => m.id == +(params.get('id')))
      console.log(this.bookMovie, "bookMovie")
    })
  }

  findPrice(event) {
    this.price = 130 * +(event.target.value)
  }

  checkTickets() {
    if (this.price > 0) {
      this.ticketsBooked = true
    } else {
      var toast = document.getElementById("snackbar");
      toast.className = "show";
      setTimeout(function () { toast.className = toast.className.replace("show", ""); }, 3000);
    }
  }

  setSelectedTheatre(theatre, time) {
    this.ticketsBooked = false
    this.selectedTheatre.theatre = theatre
    this.selectedTheatre.timing = time
  }

}
