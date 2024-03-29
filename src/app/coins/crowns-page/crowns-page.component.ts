import { Component, OnInit } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { ConfigService } from 'src/app/shared/services/config.service';

import { Crown } from '../models/coin.model';
import { CrownBlock } from '../models/coin.model';
import { AsyncPipe } from '@angular/common';
import { CrownsBlockComponent } from '../crowns-block/crowns-block.component';

@Component({
	selector: 'app-crowns-page',
	templateUrl: './crowns-page.component.html',
	standalone: true,
	imports: [CrownsBlockComponent, AsyncPipe],
})
export class CrownsPageComponent implements OnInit {
	crowns$: Observable<Crown> = new Observable();
	crownList$: Observable<CrownBlock[]> = new Observable();
	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getPageData('pages', 2);
		this.getBlockData('crownList');
	}

	getPageData(database: string, id?: number) {
		this.crowns$ = this.config.getSettings(database, id).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}

	getBlockData(database: string) {
		this.crownList$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}
