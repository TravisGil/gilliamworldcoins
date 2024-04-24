import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Country } from '../models/country.model';
import { AsyncPipe } from '@angular/common';
import { CointypeBlockComponent } from '../cointype-block/cointype-block.component';
import { ActivatedRoute } from '@angular/router';
import { Coin } from '../models/coin.model';

@Component({
	selector: 'app-worldcointype',
	standalone: true,
	imports: [CointypeBlockComponent, AsyncPipe],
	templateUrl: './worldcointype.component.html',
})
export class WorldcointypeComponent implements OnInit {
	countryPageHeader$: Observable<Country> = new Observable();
	coinList$: Observable<Coin[]> = new Observable();
	coinId: string;

	constructor(
		private config: ConfigService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		//this.getBlockData('cointypeList');

		this.route.params.subscribe(params => {
			this.coinId = params['id']; // Access the 'id' parameter from the URL
			const strList = this.coinId.split('-');
			this.getCoinList('coinList', strList[0]);
			this.getBlockData('countrytypeList', parseInt(strList[1]));
		});
	}

	getBlockData(database: string, type: number) {
		this.countryPageHeader$ = this.config
			.getPageDeailsByCountrySettings(database, type)
			.pipe(
				catchError(error => {
					console.error('Error fetching feature data:', error);
					return throwError(error);
				})
			);
	}

	getCoinList(database: string, type: string) {
		this.coinList$ = this.config
			.getCoinListByCountrySettings(database, type)
			.pipe(
				catchError(error => {
					console.error('Error fetching feature data:', error);
					return throwError(error);
				})
			);
	}
}
