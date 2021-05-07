import { Component, OnInit } from '@angular/core';
import { PlaygroundService} from '../http.service';
import { Playground } from '../http.model';
import { Observable } from 'rxjs';
import { AuthService } from "../auth.service";
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-addplayground',
  templateUrl: './addplayground.component.html',
  styleUrls: ['./addplayground.component.css']
})
export class AddplaygroundComponent implements OnInit {
  playgrounds$!: Observable<Playground[]>;
  playground$!:Observable<Playground>;
  lat:any;
  lng:any;
  
  constructor(private playgroundService:PlaygroundService,public authService: AuthService) {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
  }

    center = ({lat: 5.03076, lng: 5.03076});
    // set center(center: google.maps.LatLngLiteral | google.maps.LatLng);
  

  ngOnInit(): void {
    this.playgroundService.getPlaygrounds().subscribe(
      data => {localStorage.setItem('playgrounds', JSON.stringify(data));});
    const playgrounds = JSON.parse((localStorage.getItem('playgrounds') || '{}'));
    // get current location of browser or cell phone location
    navigator.geolocation.getCurrentPosition((p) =>{
      // center map on current location
      this.center = {
        lat: p.coords.latitude,
        lng: p.coords.longitude
        }
      console.log(this.center);
      })
   console.log('PLAYGROUND LOG:')
   // log the GET request , save it to localstorage and split the result

   console.log(playgrounds);
   console.log(playgrounds[0].name);

   
 };
  // Add new playground to the database
  addNewPlayground(name:string,street:string,number:string,city:string,zip_code:string,extra:string){
    let newDate = '1999-12-11' 
    let address = street + ' ' + number + ' ' + city;
    const playground = new Playground(null,name,address,zip_code,'test@gmail.com','0475575910','test@info.be',1,'09:00-18:00',newDate,'€50-€100',extra);
    this.playgroundService.addPlayground(playground)
    .subscribe(data => console.log(data)); 
    this.playgrounds$ = this.playgroundService.getPlaygrounds();
} 


}
