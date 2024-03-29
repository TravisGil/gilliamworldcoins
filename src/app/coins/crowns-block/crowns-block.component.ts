import { Component, Input } from '@angular/core';
import { CrownBlock } from '../models/coin.model';

@Component({
	selector: 'app-crowns-block',
	templateUrl: './crowns-block.component.html',
	standalone: true,
})
export class CrownsBlockComponent {
	@Input() crownBlock: CrownBlock;
}
