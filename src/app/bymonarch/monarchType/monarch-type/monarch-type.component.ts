import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';
import { ActivatedRoute } from '@angular/router';
import { CoinType } from '../models/coin.model';
import { Coin } from '../models/coin.model';
import { AsyncPipe } from '@angular/common';
import { MonarchtypeBlockComponent } from '../monarchtype-block/monarchtype-block.component';

@Component({
	selector: 'app-monarch-type',
	standalone: true,
	imports: [MonarchtypeBlockComponent, AsyncPipe],
	templateUrl: './monarch-type.component.html',
})
export class MonarchTypeComponent implements OnInit {
	crowns$: Observable<CoinType> = new Observable();
	coinList$: Observable<Coin[]> = new Observable();
	monarchId: string;

	constructor(
		private config: ConfigService,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.route.params.subscribe(params => {
			this.monarchId = params['id']; // Access the 'id' parameter from the URL
			const strList = this.monarchId.split('-');
			this.getBlockData('coinList', strList[0]);
			this.getPageData('monarchList', parseInt(strList[1]));
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
		this.coinList$ = this.config.getCoinLisyByMonarchTypeSettings(database, type).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}
