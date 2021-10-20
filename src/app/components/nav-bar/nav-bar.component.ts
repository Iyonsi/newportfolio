import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/_Models/aboutme';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl:'./nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  myBios:Aboutme ={
    firstName:"",
    lastName:"",
    about:"",
    email:"",
    socialMedia:"",
    linkedIn:"",
    github:"",
    phone:""

  }
constructor(private NavBarPortfolioService: PortfolioService1Service) { }

ngOnInit(): void { this.NavBarPortfolioService.getPortfolioData().subscribe((data :any)=>{

  this.myBios.firstName = data.data.firstName
  this.myBios.lastName = data.data.lastName
  this.myBios.phone = data.data.contact.phone
  this.myBios.email = data.data.contact.email
  this.myBios.linkedIn = data.data.contact.linkedIn
  this.myBios.socialMedia = data.data.contact.socialMedia
  this.myBios.github = data.data.contact.gitHub
  }
)
}
}
