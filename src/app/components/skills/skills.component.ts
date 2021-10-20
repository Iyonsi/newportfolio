import { Component, OnInit } from '@angular/core';
import { Skills } from 'src/app/_Models/skills';
import { PortfolioService1Service } from 'src/app/_services/portfolioService1.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  mySkills :Skills[] = [];
  
  constructor(private skillsPortfolioService: PortfolioService1Service) { }

  ngOnInit(): void { this.skillsPortfolioService.getPortfolioData().subscribe((data :any)=>{this.mySkills=data.data.skills})
  }

}
