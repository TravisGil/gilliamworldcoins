export class Coin {
	id: number;
	country: string;
	countryname: string;
	type: string;
	typeid: number;
	name: string;
	monarchtype: string;
	year: string;
	tagline: string;
	title: string;
	description: string;
	frontImg: string;
	frontTitle: string;
	frontDescription: string;
	backImg: string;
	backTitle: string;
	backDescription: string;
	bottomContent: string;
	price: string;
	ebay: string;
}

export class CoinType {
	id: number;
	name: string;
	tagline: string;
	title: string;
	description: string;
}

export class CoinTypeBlock {
	id: number;
	typeid: number;
	name: string;
	weblink: string;
	logo: string;
}
