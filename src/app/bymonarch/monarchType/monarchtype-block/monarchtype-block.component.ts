import { Component, Input } from '@angular/core';
import { Coin } from '../models/coin.model';

@Component({
	selector: 'app-monarchtype-block',
	standalone: true,
	imports: [],
	templateUrl: './monarchtype-block.component.html',
})
export class MonarchtypeBlockComponent {
	@Input() coinTypeBlock: Coin;
}
