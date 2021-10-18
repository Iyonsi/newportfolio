import { Routes } from "@angular/router"
import { AboutMeComponent } from "./components/about-me/about-me.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeComponent } from "./components/home/home.component";
import { PortfolioComponent } from "./components/portfolio/portfolio.component";
import { SkillsComponent } from "./components/skills/skills.component";

export const appRoutes : Routes = [{path:"", component:HomeComponent}, 
                                {path:"home", component:HomeComponent}, 
                                {path:"portfolio", component:PortfolioComponent}, 
                                {path:"skills", component:SkillsComponent}, 
                                {path:"contact", component:ContactComponent},
                                {path:"about-me", component:AboutMeComponent}];