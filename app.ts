import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Assignment2Component } from './assignment2/assignment2.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule,FormsModule,Assignment2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
}
