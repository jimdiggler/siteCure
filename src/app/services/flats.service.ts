import { Injectable } from '@angular/core';
import { FLAT } from '../datas/listFlat';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

  constructor() { }

  getFlat(id: string | number){
    const flat = FLAT.find(element => element.id === id);
      return flat;  
  }
}
