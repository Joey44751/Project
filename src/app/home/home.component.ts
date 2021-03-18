import { Component, OnInit } from '@angular/core';
import { Mapservice } from '../../services/maps.service'



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Mapservice]
})
export class HomeComponent implements OnInit {

  lat:any;
  lng:any;
  
  constructor() {}

    center = ({lat: 5.03076, lng: 5.03076});
    // set center(center: google.maps.LatLngLiteral | google.maps.LatLng);
  

  ngOnInit(): void {
    // get user location form browser or cell phone GPS
    navigator.geolocation.getCurrentPosition((p) =>{
      // set center of map to geolocation coordinates
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
        }
      console.log(this.center);
      })
    };
  
}

