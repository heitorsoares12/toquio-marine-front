import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { throwError } from "rxjs";
import { environment } from 'src/environment/environment';
import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultaCepService {

  private API = 'Cep';

  constructor(private httpClient: HttpClient) { }

  obterCep(cep: string | null) {
    let params = new HttpParams();

    if (cep) {
      params = params.set('cep', cep);
    }

    return this.httpClient.get<any>(`${environment.BASE_URL + this.API}`, { params }).pipe(
      catchError(this.handleError)
    );
  }

  protected handleError(error: any): Observable<any> {
    console.log("ERRO NA REQUISIÇÃO => ", error);
    return throwError(() => error);
  }
}
