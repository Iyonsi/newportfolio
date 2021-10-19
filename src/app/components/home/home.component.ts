import { Component, OnInit } from '@angular/core';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private HomePortfolioService: PortfolioService1Service) { }

  ngOnInit(): void { this.HomePortfolioService.getPortfolioData().subscribe((data :any)=>{console.log(data)});
  }

}
