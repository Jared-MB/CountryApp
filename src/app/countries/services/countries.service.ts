import type { Country } from "../interfaces/country";

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private apiUrl = 'https://restcountries.com/v3.1'

    constructor(private http: HttpClient) { }

    searchCountryByAlphaCode(code: string): Observable<Country | null> {
        const url = `${this.apiUrl}/alpha/${code}`
        return this.http.get<Country[]>(url)
            .pipe(
                map(countries => countries.length > 0 ? countries[0] : null),
                catchError(_error => of(null))
            )
    }

    searchCapital(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/capital/${term}`
        return this.http.get<Country[]>(url).pipe(
            catchError(_error => of([]))
        )
    }

    searchCountry(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/name/${term}`
        return this.http.get<Country[]>(url).pipe(
            catchError(_error => of([]))
        )
    }

    searchRegion(term: string): Observable<Country[]> {
        const url = `${this.apiUrl}/region/${term}`
        return this.http.get<Country[]>(url).pipe(
            catchError(_error => of([]))
        )
    }
}