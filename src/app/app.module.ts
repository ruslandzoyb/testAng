import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { HeroComponent } from './hero/hero.component';
import { BiographyComponent } from './biography/biography.component';
import { StackComponent } from './stack/stack.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceInfoComponent } from './experience-info/experience-info.component';
import { ProjectCardComponent } from './project-card/project-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PortfolioComponent,
    FooterComponent,
    HeroComponent,
    BiographyComponent,
    StackComponent,
    ProjectsComponent,
    ExperienceInfoComponent,
    ProjectCardComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
