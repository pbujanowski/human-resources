import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AppEvent } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AppEventService {
  private readonly _apiUrl = `${environment.apiUrl}/app-events`;

  public readonly getAllAppEvents = () =>
    this.http.get<AppEvent[]>(`${this._apiUrl}/get-all-app-events`);

  constructor(private readonly http: HttpClient) {}
}
