import { Component, Input } from '@angular/core';
import { Image } from '../models/bymonarch.model';
@Component({
	selector: 'app-bymonarch-block',
	templateUrl: './bymonarch-block.component.html',
	standalone: true,
})
export class ByMonarchBlockComponent {
	@Input() image: Image;
}
