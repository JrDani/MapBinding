import { Component, OnInit, AfterViewInit, Inject } from '@angular/core';
import * as L from 'leaflet';
import { INIT_COORDS } from '../tokens';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;

  constructor(@Inject(INIT_COORDS) protected _initCoords: {lat: number, long: number}) {}

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [this._initCoords.lat, this._initCoords.long],
      zoom: 18
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

}
