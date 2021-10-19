import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { appRoutes } from './routes';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { PortfolioService1Service } from './_services/portfolioService1.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    PortfolioComponent,
    AboutMeComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot (appRoutes),
    HttpClientModule,
  ],
  providers: [PortfolioService1Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
