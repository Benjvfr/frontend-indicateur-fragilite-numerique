import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IndicateurNumerique } from './model/indicateur-numerique';

@Injectable({
  providedIn: 'root'
})
export class IndicateurNumeriqueService {
  
  constructor(
    private http: HttpClient
  ) {}

  public getIndicateur(commune: string): Observable<IndicateurNumerique|HttpErrorResponse> {

    return new Observable<IndicateurNumerique|HttpErrorResponse>(observer => {
      this.http.get(environment.apiEndpoint + "/commune?nom=" + commune).subscribe(
        (data: IndicateurNumerique) => observer.next(data),
        (err: HttpErrorResponse) => observer.error(err)
      );
    });
  }

}
