import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  public getEmployees = () =>
    this.http.get<Employee[]>('http://localhost:5213/api/employees');

  public createEmployee = (employee: Employee) =>
    this.http.post<Employee>('http://localhost:5213/api/employees', employee);

  constructor(private http: HttpClient) {}
}
