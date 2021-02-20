import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  students?: Student[];

  constructor() { }

  ngOnInit(): void {
      this.students = [{
        "id": 1,
        "firstName": "Pablo",
        "lastName": "Fernandez",
        "email": "pablof@mail.com"
      },
      {
        "id": 2,
        "firstName": "Manuel",
        "lastName": "Hernandez",
        "email": "manuelh@mail.com"
      },
    ]
  }

}
