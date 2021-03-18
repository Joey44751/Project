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
  
<<<<<<< HEAD
  constructor(public authService: AuthService) {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
  }
=======
  constructor() {}
>>>>>>> 31be46eb18f2eac1a485fbaa6a534a97d351937d

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

