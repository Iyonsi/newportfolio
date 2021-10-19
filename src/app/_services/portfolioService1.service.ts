import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PortfolioService1Service {
  private baseUrl: string = "https://sq009pod2.herokuapp.com/api/User";

constructor(private httpclient: HttpClient) { }

getPortfolioData(){
  return this.httpclient.get(this.baseUrl)

}

}


