import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { IntroComponent } from './intro/intro.component';
import { SkillsComponent } from './skills/skills.component';
import { ProfileService } from './profile.service';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms'; 

 


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    IntroComponent,
    SkillsComponent,
    EducationComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    ReactiveFormsModule
  ],
  exports:[
    HomeComponent,
    AboutComponent
  ],
  providers:[ProfileService]
})
export class PortfolioModule { }
