import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego, VideojuegosService } from '../../services/videojuegos.service';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  videojuegos: Videojuego[] = [];

  constructor( private _videojuegosService: VideojuegosService, private router: Router ) { }

  ngOnInit(): void {
    this.videojuegos = this._videojuegosService.getVideojuegos();
  }

  verVideojuego( idx: number) {
    this.router.navigate( ['/videojuego/', idx] );
  }

}
