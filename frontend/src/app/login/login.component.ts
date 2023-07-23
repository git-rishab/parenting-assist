import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  illustration: string = 'assets/illustration6.png';
  url : string = 'https://parent-guide.onrender.com';
  loading: Boolean = false
  private readonly notifier: NotifierService;
  signupForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private formBuilder: FormBuilder,private router: Router, notifierService: NotifierService) { this.notifier = notifierService; }

  ngOnInit(): void {
    // No need to reassign the form group here since we already initialized it in the property.
  }
  redirect(endpoint:string) {
    this.router.navigateByUrl(endpoint);
  }
  
  onSubmit(): void {
    if (this.signupForm.valid) {
      this.loading = true
      const formData = this.signupForm.value;
      fetch(`${this.url}/login`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({...formData})
      }).then((raw)=>raw.json()).then((data)=>{
        if(data.ok){
          sessionStorage.setItem('data', JSON.stringify(data.data))
          this.notifier.notify('success', data.message);
          this.redirect('/chat')
        } else {
          this.notifier.notify('error', data.message);
        }
        this.loading = false;
      }).catch((e)=>{console.log(e); this.notifier.notify('error', e.message); this.loading = false;})
    } else {
      alert('Please enter valid Details')
    }
  }
}
