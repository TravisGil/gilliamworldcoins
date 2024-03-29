import { Component, Input } from '@angular/core';
import { Coin } from '../models/coin.model';

@Component({
	selector: 'app-cointype-block',
	standalone: true,
	imports: [],
	templateUrl: './cointype-block.component.html',
})
export class CointypeBlockComponent {
	@Input() coinTypeBlock: Coin;
}
