<template>
	<div id="app" class="container mx-auto my-5">
		<div class="flex">
			<add-item ref="add" :item="add" />

			<button class="border bg-blue-500 px-4 py-1 ml-4" @click="addArticle()">
				Add
			</button>
		</div>

		<div class="flex -mx-10 mt-5">
			<div class="w-1/2 px-10">
				<items-list :items="articles" />
			</div>

			<div class="w-1/2 px-10">
				<items-list :items="articlesByGroup" />
			</div>
		</div>
	</div>
</template>

<script>
import AddItem from '@/components/AddItem';
import ItemsList from '@/components/ItemsList';
import Article from '@/classes/Article';
import Group from '@/classes/Group';

export default {
	name: 'App',

	components: {
		AddItem,
		ItemsList,
	},

	data: () => ({
		add: {},
		articles: [],
	}),

	computed: {
		articlesByGroup() {
			const groups = [];

			for (const article of this.articles) {
				let { index, group } = this.getGroup(article.group, groups);

				group.addArticle(article);

				if (!groups[index]) {
					groups[index] = group
				}
			}

			return groups.sort((a , b) => {
				return a.id > b.id;
			});
		},
	},

	created() {
		this.articles = [
			new Article('AA', 1, 100),
			new Article('BB', 1, 50),
			new Article('CC', 2, 75),
			new Article('AA', 1, 20),
			new Article('AA', 0, 100),
			new Article('BB', 2, 75),
			new Article('CC', 2, 80),
			new Article('AA', 0, 20),
		];
	},

	methods: {
		addArticle() {
			const { name, group, price} = { ...this.add };

			if (!name || !group || !price) {
				return;
			}

			this.articles.push(new Article(name, group, price));

			this.$refs.add.reset();
		},

		getGroup(id, groups) {
			let index = -1;

			if (id !== 0) {
				index = groups.findIndex(g => g.id === id);
			}

			if (index === -1) {
				return {
					index: groups.length,
					group: new Group(id),
				};
			}

			return {
				index: index,
				group: groups[index],
			};
		}
	}
};
</script>
