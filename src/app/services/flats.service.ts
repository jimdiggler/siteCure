import { Injectable } from '@angular/core';
//import { FLATS} from '../datas/listFlat';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Flat } from '../beans/flat';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {
  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------
  //static readonly REST_SERVER_LOCAL = "http://localhost:3000/flats/"
  static readonly REST_SERVER_LOCAL = "https://site-cure-server.herokuapp.com/flats/"

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private http: HttpClient) { }

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  getFlats(): Observable<Flat[]> {
    return this.http.get<Flat[]>(FlatsService.REST_SERVER_LOCAL);
  }

  getFlat(id: string | number) {
    return this.http.get<Flat>(FlatsService.REST_SERVER_LOCAL + id);
  }
}
