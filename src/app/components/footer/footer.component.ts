import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/_Models/aboutme';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
constructor(private FooterPortfolioService: PortfolioService1Service) { }

ngOnInit(): void { this.FooterPortfolioService.getPortfolioData().subscribe((data :any)=>{

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
