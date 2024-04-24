import { Component, Input } from '@angular/core';
import { Country } from '../models/country.model';
@Component({
	selector: 'app-image-block',
	templateUrl: './image-block.component.html',
	standalone: true,
})
export class ImageBlockComponent {
	@Input() country: Country;
}
