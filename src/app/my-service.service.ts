import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  protected api = 'https://randomuser.me/api/';

  constructor(
    protected httpClient: HttpClient
  ) { }

  getPerson(): Observable<any> {
    return this.httpClient.get(this.api);
  }
}
