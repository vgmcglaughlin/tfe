import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Dataset } from './models/dataset';

@Injectable({
  providedIn: 'root'
})
export class DatasetService {

  constructor(
    private http: HttpClient,
  ) { }

  all(): Observable<Dataset[]> {
    return this.http.get<Dataset[]>(`${environment.apiBase}/datasets`);
  }

  get(id: string): Observable<Dataset> {
    return this.http.get<Dataset>(`${environment.apiBase}/datasets/${id}`);
  }
}
