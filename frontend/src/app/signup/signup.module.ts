import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [SignupComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
