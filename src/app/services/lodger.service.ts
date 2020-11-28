import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Lodger } from '../beans/lodger';

@Injectable({
  providedIn: 'root'
})
export class LodgerService {
  //----------------------------------------------------------------------------------------
  //ATTRIBUTS
  //----------------------------------------------------------------------------------------
  //static readonly REST_SERVER_LOCAL = "http://localhost:3000/lodgers/"
  static readonly REST_SERVER_LOCAL = "https://site-cure-server.herokuapp.com/lodgers/"

  //----------------------------------------------------------------------------------------
  //CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private http: HttpClient) {}

  //----------------------------------------------------------------------------------------
  //METHODS
  //----------------------------------------------------------------------------------------
  addLodger(lodger: Lodger) {
    return this.http.post<Lodger>(LodgerService.REST_SERVER_LOCAL, lodger);
  }
}
