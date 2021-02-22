import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from '../student';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id: number;
  student: Student;


  constructor(private route: ActivatedRoute,private studentService: StudentService) {
    this.id = this.route.snapshot.params['id'];
    this.student = new Student();
   }

  ngOnInit(): void {
    this.studentService.getStudentById(this.id).subscribe(data =>{
      this.student = data;
    });
  }

}
