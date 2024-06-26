import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  url = "http://localhost:3000/api/usuarios"

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }
}
