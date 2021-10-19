import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService1Service {
  private baseUrl: string = "https://sq009pod2.herokuapp.com/api/User";
  private userId: string = "125adf37-7c78-4da2-bec0-2cc69ec9e08e";

constructor(private httpclient: HttpClient) { }

getPortfolioData(){
  const header = new HttpHeaders({"userId": this.userId})
  return this.httpclient.get(this.baseUrl, {headers : header})

}

}


