import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesComponent } from './movies/movies.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HindiComponent } from './hindi/hindi.component';
import { EnglishComponent } from './english/english.component';
import { ReactiveFormsModule , FormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './services/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    MoviesComponent,
    CarouselComponent,
    TeluguComponent,
    HindiComponent,
    EnglishComponent,
    RegisterComponent,
    LoginComponent,
    
    
    



   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
