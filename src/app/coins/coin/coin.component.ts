import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/shared/services/config.service';
import { Coin } from '../models/coin.model';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { RedZoomModule } from 'ngx-red-zoom';

@Component({
	selector: 'app-coin',
	standalone: true,
	imports: [AsyncPipe, RedZoomModule],
	templateUrl: './coin.component.html',
	styleUrls: ['../../../styles.scss'],
})
export class CoinComponent implements OnInit {
	coinList$: Observable<Coin> = new Observable();
	coinId: number;

	constructor(
		private config: ConfigService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.params.subscribe(params => {
			this.coinId = params['id']; // Access the 'id' parameter from the URL
			console.log('Test ID:', this.coinId);
			this.getPageData('coinList', this.coinId);
		});
	}

	getPageData(database: string, id?: number): void {
		this.coinList$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching coinList data:', error);
				return throwError(error);
			})
		);
	}
}
