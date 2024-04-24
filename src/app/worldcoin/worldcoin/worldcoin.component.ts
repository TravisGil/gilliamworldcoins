import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Country } from '../models/country.model';
import { AsyncPipe } from '@angular/common';
import { ImageBlockComponent } from '../image-block/image-block.component';

@Component({
	selector: 'app-worldcoin-page',
	templateUrl: './worldcoin.component.html',
	standalone: true,
	imports: [ImageBlockComponent, AsyncPipe],
})
export class WorldCoinComponent implements OnInit {
	Country$: Observable<Country[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getBlockData('countrytypeList');
	}

	getBlockData(database: string) {
		this.Country$ = this.config.getSettings(database).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}
