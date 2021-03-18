import { Component, OnInit } from '@angular/core';
import { PlaygroundService} from '../http.service';
import { Playground } from '../http.model';
import { Observable } from 'rxjs';
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
  
  constructor(private playgroundService:PlaygroundService) {
    if (navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=+pos.coords.latitude;
      })
    }
  }

    center = ({lat: 5.03076, lng: 5.03076});
    // set center(center: google.maps.LatLngLiteral | google.maps.LatLng);
  

  ngOnInit(): void {
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
   this.playgroundService.getPlaygrounds().subscribe(
     data => {localStorage.setItem('playgrounds', JSON.stringify(data));  JSON.parse(localStorage.getItem('playgrounds') || '{}');});
   const playgrounds = JSON.parse(localStorage.getItem('playgrounds') || '{}');   
   console.log(playgrounds);
   console.log(playgrounds[0].name);
   
 };
  // Add new playground to the databank
  addNewPlayground(name:string,address:string,zip_code:string,extra:string){
    let dateString = '1968-11-16T00:00:00' 
    let newDate = new Date(dateString);
    const playground = new Playground(null,name,address,zip_code,null,null,null,1,null,newDate,null,extra);
    this.playgroundService.addPlayground(playground)
    .subscribe(data => console.log(data));
    this.playgrounds$ = this.playgroundService.getPlaygrounds();
} 


}
