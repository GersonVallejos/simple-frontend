import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students?: Student[];

  constructor(private studentService: StudentService,private router: Router) { }

  ngOnInit(): void {
      this.getStudents();
  }

  private getStudents(){
    this.studentService.getStudentslist().subscribe(data=>{
      this.students = data;
    });
  }

  updateStudent(id?: number){
    this.router.navigate(['/update',id]);
  }

  deleteStudent(id?: number){
    this.studentService.deleteStudentApi(id).subscribe(data => {
      console.log(data);
      this.getStudents();
    });
  }

  studentDetails(id?: number){
    this.router.navigate(['/details',id]);
  }

}
