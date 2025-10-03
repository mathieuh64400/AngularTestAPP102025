import { AfterViewInit, Component, OnInit } from '@angular/core';
//import * as L from 'leaflet';
import * as L from 'leaflet';
import { map } from 'rxjs';
import { City } from 'src/app/city';
import { MarkerCityService } from 'src/app/service/marker-city.service';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnInit {
  private map: any;
  public listCity: City[] = [];
  public latitude: any[] = [];
  public longitude: any[] = [];

  constructor(public serv: MarkerCityService) {

  }


  /*
    public initMap(): void {
      this.map = L.map('map', {
        center: [43.200001, -0.6],
        zoom: 3
      });
  
  
      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
  
  
  
  
  
  
      tiles.addTo(this.map);
  
  
  
  
  
    }*/
  ngOnInit(): void {
    /*.pipe(
      map(cities => cities.slice(0, 150))
    )*/
    this.serv.getCity().subscribe((value) => {
      this.listCity = value;
      console.log(this.listCity);


      this.map = L.map('map', {
        center: [43.200001, -0.6],
        zoom: 3
      });


      const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        minZoom: 3,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });
      console.log(this.listCity);

      this.listCity.forEach(element => {
        console.log(+element.latitude_centre, " ", +element.longitude_centre);

        L.marker([+element.latitude_centre, +element.longitude_centre]).bindPopup(
          `<div>Nom: ${element.nom_standard}</div>` +
          `<div>State: ${element.dep_nom}</div>` +
          `<div>Population: ${element.population} habitants</div>` +
          `<div>lien :  <a href="${element.url_wikipedia}">Aller sur le portail wiki de la ville </a> </div>`
        ).addTo(this.map)


      });




      tiles.addTo(this.map);
    });

  }

  ngAfterViewInit(): void {

    //   this.initMap();


  }

}
