import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SignUpDTO } from '../model/signup.interface'
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class VendorSignUpService {
    constructor(private readonly http: HttpClient) { }
    setSignUpDetaills(signUpDTO: SignUpDTO): Observable<any> {
        const url = 'swagger/smartdude/signup';
        return this.http.post<any>(url, signUpDTO);
    }
}