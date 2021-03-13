import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
  

export class Mapservice {

  
    
    constructor(private http: HttpClient){}

    // longitude(){
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //     const lon = position.coords.longitude;
    //     console.log(lon);
    //     return lon;
    //             })
    // }
    // Latitude(){
    //     navigator.geolocation.getCurrentPosition((position)=>{
    //     const lat = position.coords.latitude;
    //     console.log(lat);
    //     return lat;
    //             })
    
          

ngOnInit(){
    
  
   
}    
       
}


