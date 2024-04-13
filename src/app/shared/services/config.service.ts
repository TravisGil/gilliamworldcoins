import { Injectable } from '@angular/core';
import { configuration } from './configuration';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class ConfigService {
	config = configuration;
	apiUrl = 'api/posts';

	constructor(private http: HttpClient) {}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: Error): Observable<T> => {
			console.error(error);
			console.log(`${operation} failed: ${error.message}`);
			return of(result as T);
		};
	}

	getConfig() {
		return this.config;
	}

	getCoinLisyByTypeSettings(database: string, type?: string): Observable<any> {
		const url = type ? `api/${database}?type=${type}` : `api/${database}`;
		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}

	getCoinTypeByCountryIDSettings(
		database: string,
		countryId?: number
	): Observable<any> {
		const url = countryId
			? `api/${database}?countryId=${countryId}`
			: `api/${database}`;

		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}

	getCoins(database: string, id?: number): Observable<any> {
		const url = id ? `api/${database}?id=${id}` : `api/${database}`;

		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}

	getSettings(database: string, id?: number): Observable<any> {
		const url = id ? `api/${database}/${id}` : `api/${database}`;

		return this.http
			.get<any>(url)
			.pipe(
				catchError(this.handleError(`Error getting data from ${database}`, []))
			);
	}
}
