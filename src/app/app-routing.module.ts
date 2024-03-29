import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{
		path: 'home',
		loadComponent: () =>
			import('./home/home-page/home-page.component').then(
				mod => mod.HomePageComponent
			),
	},
	{
		path: 'about',
		loadComponent: () =>
			import('./about/about-page/about-page.component').then(
				mod => mod.AboutPageComponent
			),
	},
	{
		path: 'britishcoins',
		loadComponent: () =>
			import('./britishcoin/britishcoin/britishcoin.component').then(
				mod => mod.BritishCoinComponent
			),
	},
	{
		path: 'worldcoins',
		loadComponent: () =>
			import('./worldcoin/worldcoin/worldcoin.component').then(
				mod => mod.WorldCoinComponent
			),
	},
	{
		path: 'uscoins',
		loadComponent: () =>
			import('./uscoin/uscoin/uscoin.component').then(
				mod => mod.usCoinComponent
			),
	},
	{
		path: 'clients',
		loadComponent: () =>
			import('./clients/clients-page/clients-page.component').then(
				mod => mod.ClientsPageComponent
			),
	},
	{
		path: 'cointype/:id',
		loadComponent: () =>
			import('./coins/coinType/coin-type/coin-type.component').then(
				mod => mod.CoinTypeComponent
			),
	},
	{
		path: 'coin/:id',
		loadComponent: () =>
			import('./coins/coin/coin.component').then(mod => mod.CoinComponent),
	},
	{
		path: '404',
		loadChildren: () =>
			import('./notfound/notfound-page/notfound-page.component').then(
				mod => mod.NotfoundPageComponent
			),
	},
	{ path: '**', redirectTo: '/404' },
];

@NgModule({
	imports: [CommonModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	declarations: [],
})
export class AppRoutingModule {}
