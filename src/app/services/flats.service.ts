import { Injectable } from '@angular/core';
import { FLATS} from '../datas/listFlat';

@Injectable({
  providedIn: 'root'
})
export class FlatsService {

  constructor() { }

  getFlats() {
    return FLATS;
  }

  getFlat(id: string | number){
    const flat = FLATS.find(element => element.id === id);
      return flat;  
  }
}
