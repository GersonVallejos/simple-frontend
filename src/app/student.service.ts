import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private baseURL = "http://localhost:8080/api/v1/students";

  constructor(private httpClient: HttpClient) { }

  getStudentslist(): Observable<Student[]>{
    return this.httpClient.get<Student[]>(`${this.baseURL}`);
  }

  createStudent(student: Student): Observable<any>{
    return this.httpClient.post(`${this.baseURL}`,student);
  }

  getStudentById(id?: number): Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseURL}/${id}`);
  }

  updateStudentApi(id: number, student: Student): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`,student);
  }
}
