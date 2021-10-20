import { Component, OnInit } from '@angular/core';
import { Aboutme } from 'src/app/_Models/aboutme';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  constructor(private HomePortfolioService: PortfolioService1Service) { }

  ngOnInit(): void { this.HomePortfolioService.getPortfolioData().subscribe((data :any)=>{

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
