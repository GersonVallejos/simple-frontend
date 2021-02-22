import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';

const routes: Routes = [
  {path:'students',component:StudentListComponent},
  {path:'create',component:CreateStudentComponent},
  {path:'update/:id',component:UpdateStudentComponent},
  {path:'details/:id',component:StudentDetailsComponent},
  {path:'**', redirectTo: 'students',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
