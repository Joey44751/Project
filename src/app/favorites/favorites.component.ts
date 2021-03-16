import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  lat:any;
  lng:any;
  
  constructor() {
    // get current position
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
  }
    // set map center
    center = ({lat: 5.03076, lng: 5.03076});
  
  

  ngOnInit(): void {
    // assign current position to map center
    navigator.geolocation.getCurrentPosition((p) =>{
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
        }
      console.log(this.center);
      })
    
   
 };

}
