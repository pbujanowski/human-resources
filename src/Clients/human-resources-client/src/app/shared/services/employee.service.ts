import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public getEmployees = () =>
    this.http.get<Employee[]>('http://localhost:5213/api/employees');

  constructor(private http: HttpClient) {}
}
