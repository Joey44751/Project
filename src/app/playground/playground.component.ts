import { Component,OnInit, Input } from '@angular/core';
import { AuthService } from "../auth.service";
import { PlaygroundService} from '../http.service';
import { Observable } from 'rxjs';
import { Playground } from '../http.model';



@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {
  playgrounds$:Observable<Playground[]> | undefined;
  lat:any;
  lng:any;

    
  constructor(public authService: AuthService,private playgroundService:PlaygroundService) {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
        
  }
  

    center = ({lat: 5.03076, lng: 5.03076});
    // set center(center: google.maps.LatLngLiteral | google.maps.LatLng);
  

  ngOnInit(): void {
    this.playgrounds$ = this.playgroundService.getPlaygrounds();
    
    
    this.playgroundService.getPlaygrounds().subscribe(
      data => {localStorage.setItem('playgrounds', JSON.stringify(data));});
    const playgrounds = JSON.parse((localStorage.getItem('playgrounds') || '{}'));

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
      
   
 };



