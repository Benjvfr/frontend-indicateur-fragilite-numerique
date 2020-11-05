import { HttpClient } from '@angular/common/http';
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

  public getIndicateur(commune: string): Observable<IndicateurNumerique> {
    return this.http.get<IndicateurNumerique>(this.endpoint + "/commune?nom=" + commune);
  }
}
