import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiUrl = 'http://localhost:3000/user';

  constructor(private _http: HttpClient) {}

  envoyerInfo(lastname: string, firstname: string): any {
    console.log(lastname, " | ", firstname);
    return this._http
      .post(this._apiUrl, { firstName: firstname, lastName: lastname })
      .pipe(
        map((response: any) => {
          if (response.message) return response.message;
          else return null;
        })
      );
  }
}
