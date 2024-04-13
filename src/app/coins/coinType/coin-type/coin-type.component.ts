import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';
import { ActivatedRoute } from '@angular/router';
import { CoinType } from '../models/coin.model';
import { Coin } from '../models/coin.model';
import { AsyncPipe } from '@angular/common';
import { CointypeBlockComponent } from '../cointype-block/cointype-block.component';

@Component({
	selector: 'app-coin-type',
	standalone: true,
	imports: [CointypeBlockComponent, AsyncPipe],
	templateUrl: './coin-type.component.html',
})
export class CoinTypeComponent implements OnInit {
	crowns$: Observable<CoinType> = new Observable();
	coinList$: Observable<Coin[]> = new Observable();
	coinId: string;

	constructor(
		private config: ConfigService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.coinId = params['id']; // Access the 'id' parameter from the URL
			const strList = this.coinId.split('-');
			this.getBlockData('coinList', strList[0]);
			this.getPageData('cointypeList', parseInt(strList[1]));
		});
	}

	getPageData(database: string, id?: number) {
		this.crowns$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string, type: string) {
		this.coinList$ = this.config.getCoinLisyByTypeSettings(database, type).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}
