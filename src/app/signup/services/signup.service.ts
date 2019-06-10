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
        const url = 'http://ec2-3-80-202-217.compute-1.amazonaws.com:8080/smartdude/signup';
        return this.http.post<any>(url, signUpDTO);
    }
}