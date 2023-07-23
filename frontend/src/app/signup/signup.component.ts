import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  illustration: string = 'assets/illustration2.png';
  url : string = 'http://localhost:5000';
  loading: Boolean = false
  private readonly notifier: NotifierService;
  signupForm: FormGroup = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
  });

  constructor(private formBuilder: FormBuilder, private router: Router, notifierService: NotifierService) { this.notifier = notifierService;  }

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
      fetch(`${this.url}/register`,{
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify({...formData})
      }).then((raw)=>raw.json()).then((data)=>{
        if(data.ok){
          this.redirect('/login')
          this.notifier.notify('success', data.message);
        } else {
          this.notifier.notify('error', data.message);
        }
        this.loading = false
      }).catch((e)=>{console.log(e); this.notifier.notify('error', e.message); this.loading = false})
    } else {
      alert('Please Fill all the Details')
    }
  }
}
