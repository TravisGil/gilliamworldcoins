import { Component, Input, OnInit } from '@angular/core';

import { Coin } from '../models/coin.model';
@Component({
	selector: 'app-worldcointype-block',
	templateUrl: './worldcointype-block.component.html',
	standalone: true,
})
export class WorldcointypeBlockComponent implements OnInit {
	@Input() coinTypeBlock: Coin;
	public currentCoin: Coin;
	public currentCoinID: number;
	ngOnInit() {
		this.currentCoin = this.coinTypeBlock;
		this.currentCoinID = this.coinTypeBlock.id;
	}
}
