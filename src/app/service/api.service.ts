import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getProducts() {
    return this.httpClient.get<any>('https://fakestoreapi.com/products').pipe(map(
      (response: Response) => {
        return response;
      }
    ))
  }
}

