import { Component, OnInit } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student: Student = new Student();
  constructor(private studentService: StudentService,
              private route: ActivatedRoute,
              private router: Router) {

    this.id=this.route.snapshot.params['id'];

  }

  ngOnInit(): void {
    this.studentService.getStudentById(this.id).subscribe(data=>{
      this.student = data;
    },error => console.log(error));
  }

  onSubmit(){
    this.studentService.updateStudentApi(this.id,this.student).subscribe(data =>{
      this.goToStudentList();
    },error =>console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['students']);
  }
}
