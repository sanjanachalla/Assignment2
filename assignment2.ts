import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-assignment2',
  imports: [FormsModule,CommonModule],
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component {
   students: { name: string; grade: string }[] = [];
  name: string = "";
  grade: string = "";
  addStudent(){
      this.students.push({ name: this.name, grade: this.grade});
      this.name = "";
      this.grade="";
  }
}
