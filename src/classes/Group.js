export default class Group {
	constructor(id) {
		this.articles = [];
		this.group = this.id = id;
	}

	addArticle(article) {
		this.articles.push(article);
	}

	get name() {
		const names = {};

		for (const article of this.articles) {
			names[article.name] = true;
		}

		return Object.keys(names).join(', ');
	}

	get price() {
		let price = 0;

		this.articles.forEach(article => price += article.price);

		return price;
	}
}
