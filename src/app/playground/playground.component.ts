import { Component,OnInit, Input } from '@angular/core';



@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
 
  lat:any;
  lng:any;

    
  constructor() {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
        
  }
  

    center = ({lat: 5.03076, lng: 5.03076});
    // set center(center: google.maps.LatLngLiteral | google.maps.LatLng);
  

  ngOnInit(): void {
   
    navigator.geolocation.getCurrentPosition((p) =>{
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
        }
      console.log(this.center);
      })
      
   
 };

}

