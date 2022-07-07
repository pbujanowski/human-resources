import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../models';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private readonly _apiUrl = `${environment.apiUrl}/api/employees`;

  public getEmployees = () => this.http.get<Employee[]>(this._apiUrl);

  public getEmployeeById = (employeeId: string) =>
    this.http.get<Employee>(`${this._apiUrl}/${employeeId}`);

  public createEmployee = (employee: Employee) =>
    this.http.post<Employee>(this._apiUrl, employee);

  public updateEmployee = (employee: Employee) =>
    this.http.put<Employee>(`${this._apiUrl}/${employee.id}`, employee);

  public deleteEmployee = (employeeId: string) =>
    this.http.delete<Employee>(`${this._apiUrl}/${employeeId}`);

  constructor(private http: HttpClient) {}
}
