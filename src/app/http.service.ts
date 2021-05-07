import { Injectable } from '@angular/core';
import { Playground } from './http.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class PlaygroundService {


constructor(private http: HttpClient){}
url:string = "https://massimo-dn-cors.herokuapp.com/https://syntra.terugsamen.be/mightyducks/public/api/companies";

    getPlaygrounds(): Observable<Playground[]> {
        return this.http
            .get<Playground[]>(this.url)
            .pipe()
    }
    getPlaygroundById(id:number) {
        console.log(id);
        return this.http
        .get<Playground>(this.url+'/'+id)
        .pipe()
    }

    addPlayground(newPlayground:Playground): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post(this.url,newPlayground,{headers:headers}).pipe(
            tap (result => window.alert('Speeltuin toegevoegd!'))
        )
    }

    updatePlayground(newPlayground:Playground): Observable<any> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.put(this.url+'/'+newPlayground.id,newPlayground, {headers:headers});
    }


    deletePlayground(id: number){
        return this.http.delete(this.url+'/'+id);
    }
    
}