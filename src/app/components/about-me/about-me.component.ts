import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/_Models/aboutme';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  myBio :Aboutme[] = [];
  
  constructor(private aboutMePortfolioService: PortfolioService1Service) { }

  ngOnInit(): void { this.aboutMePortfolioService.getPortfolioData().subscribe((data :any)=>{this.myBio=data.data.about})
}


}
