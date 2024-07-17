import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {

  private jsonURL = 'assets/machines.json';

  constructor(private http: HttpClient) { }

  getMachines(): Observable<any> {
    return this.http.get(this.jsonURL);
  }
}
