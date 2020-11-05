import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IndicateurNumerique } from './model/indicateur-numerique';

@Injectable({
  providedIn: 'root'
})
export class IndicateurNumeriqueService {

  private endpoint: string = "http://localhost:8080"

  constructor(
    private http: HttpClient
  ) {}

  public getIndicateur(commune: string): Observable<IndicateurNumerique|HttpErrorResponse> {

    return new Observable<IndicateurNumerique|HttpErrorResponse>(observer => {
      this.http.get(this.endpoint + "/commune?nom=" + commune).subscribe(
        (data: IndicateurNumerique) => observer.next(data),
        (err: HttpErrorResponse) => observer.error(err)
      );
    });
  }

}
