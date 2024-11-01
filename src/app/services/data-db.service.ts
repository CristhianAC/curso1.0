import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Characters } from '../models/characters';

@Injectable({
  providedIn: 'root'
})
export class DataDBService {
  baseUrl = environment.api;
  http = inject(HttpClient);
  

  getCharacters(): Observable<Characters>{
    return this.http.get<Characters>(`${this.baseUrl}/characters`);
  }


  constructor() { }

}


