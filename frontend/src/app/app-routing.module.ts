import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component'
import { ChatComponent } from './chat/chat.component'
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component'

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'register', component: SignupComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
