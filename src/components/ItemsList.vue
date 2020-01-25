<template>
	<table>
		<thead class="text-xl text-left">
			<th class="font-normal pr-10">Name</th>
			<th class="font-normal pr-10">Group</th>
			<th class="font-normal text-center">Price</th>
		</thead>

		<tr v-for="(item, index) in items" :key="index">
			<td>{{ item.name }}</td>
			<td>{{ item.group }}</td>
			<td class="text-right">
				{{ item.price | currency }}
			</td>
		</tr>
	</table>
</template>

<script>
	export default {
		name: 'ItemsList',

		props: {
			items: {
				type: Array,
				required: true,
			},
		},
	}
</script>
