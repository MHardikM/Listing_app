import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Listing } from '../model/listing';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ListingservService {
private ROOT_URL="http://localhost:4000/"
token1:any=localStorage.getItem("token")
private httpoptions={
  headers:new HttpHeaders().set("Content-Type","application/json").set("auth-token",this.token1)
};
  constructor(private http:HttpClient) {
    
   }

  getlistings():Observable<Listing[]>{
    return this.http.get<Listing[]>(this.ROOT_URL);

  }
  getlistingdetail(id:any){
    return this.http.get<Listing>(`${this.ROOT_URL}${id}`)
  }
  addlisting(listing:any){
    return this.http.post<any>(`${this.ROOT_URL}Addlisting`,listing,this.httpoptions)
  }
  editlisting(listing:any,id:any){
    return this.http.put<any>(`${this.ROOT_URL}${id}`,listing, this.httpoptions)
}
deletelisting(id:string){
  return this.http.delete<any>(`${this.ROOT_URL}${id}`,this.httpoptions)
}

}
