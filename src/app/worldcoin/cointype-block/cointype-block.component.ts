import { Component, Input } from '@angular/core';
import { Coin } from '../models/coin.model';
@Component({
	selector: 'app-cointype-block',
	templateUrl: './cointype-block.component.html',
	standalone: true,
})
export class CointypeBlockComponent {
	@Input() coinTypeBlock: Coin;
}
