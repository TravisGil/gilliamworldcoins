import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ConfigService } from '../shared/services/config.service';
import { NavmenuComponent } from '../navmenu/navmenu.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-navigation',
	templateUrl: './navigation.component.html',
	styleUrls: ['./navigation.component.scss'],
	standalone: true,
	imports: [NavmenuComponent, MatIconModule],
})
export class NavigationComponent implements OnInit {
	menu: { id: number; title: string; link: string }[];

	menuOpen: boolean;
	database = 'menu';
	menuItem: any;

	constructor(
		private location: Location,
		private config: ConfigService
	) {}

	ngOnInit() {
		this.menuOpen = false;
		this.getMenu();
	}

	toggleMenu(status: boolean) {
		this.menuOpen = status;
	}

	getMenu() {
		this.config.getSettings(this.database).subscribe(setting => {
			this.menu = setting;
		});
	}
}
