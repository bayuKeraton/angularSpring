import { Observable } from 'rxjs';
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiServerUrl ="";

  constructor(private http: HttpClient){}

  public getEmployees(): Observable<any>{
    return this.http.get<any>(`${this.apiServerUrl}/employee/all`);
  }
}
