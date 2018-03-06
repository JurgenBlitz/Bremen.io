import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import {  } from '@tpes/googlemaps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  title: string = 'Este usuario dispone de un espacio para ensayar';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {

  }

}
