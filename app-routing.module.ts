import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TeluguComponent } from './telugu/telugu.component';
import { HindiComponent } from './hindi/hindi.component';
import { EnglishComponent } from './english/english.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},




  {path:"movies",component:MoviesComponent,

  children:[

  {path:"telugu",component:TeluguComponent},
  {path:"hindi",component:HindiComponent},
  {path:"english",component:EnglishComponent},


  ]
  
},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
