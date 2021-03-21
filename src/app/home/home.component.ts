import { Component, OnInit } from '@angular/core';
import { Mapservice } from '../../services/maps.service'
import { AuthService } from "../auth.service";



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Mapservice]
})
export class HomeComponent implements OnInit {

  lat:any;
  lng:any;
  markers: any;
  

  // addMarker() {
  //   this.markers.push({
  //     position: {
  //       lat: this.center.lat + ((Math.random() - 0.5) * 2) / 10,
  //       lng: this.center.lng + ((Math.random() - 0.5) * 2) / 10,
  //     },
  //     label: {
  //       color: 'red',
  //       text: 'Marker label ' + (this.markers.length + 1),
  //     },
  //     title: 'Marker title ' + (this.markers.length + 1),
  //     options: { animation: google.maps.Animation.BOUNCE },
  //   })
  // }
  
  constructor(public authService: AuthService) {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    } 
  }
    zoom = 12;
    position = ({lat: 50.967, lng: 5.417})
    // set position
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

