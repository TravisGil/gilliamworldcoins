import { Observable, throwError, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../shared/services/config.service';
import { Image } from '../models/bymonarch.model';
import { AsyncPipe } from '@angular/common';
import { ByMonarchBlockComponent } from '../bymonarch-block/bymonarch-block.component';
import { RouterLink } from '@angular/router';

@Component({
	selector: 'app-bymonarch-page',
	templateUrl: './bymonarch.component.html',
	standalone: true,
	imports: [RouterLink, ByMonarchBlockComponent, AsyncPipe],
})
export class ByMonarchComponent implements OnInit {
	images$: Observable<Image[]> = new Observable();

	constructor(private config: ConfigService) {}

	ngOnInit() {
		this.getBlockData('monarchList');
	}

	getBlockData(database: string) {
		this.images$ = this.config.getCoinTypeByCountryIDSettings(database, 1).pipe(
			catchError(error => {
				console.error('Error fetching feature data:', error);
				return throwError(error);
			})
		);
	}
}
