<template>
	<div>
		<label>
			Name: <input v-model="item.name" type="text" class="py-1 border w-20">
		</label>

		<label class="ml-4">
			Group: <input-number v-model.number="item.group" class="py-1 border w-20" />
		</label>

		<label class="ml-4">
			Price: <currency-input v-model="item.price" :distraction-free="false" class="py-1 border w-20" />
		</label>
	</div>
</template>

<script>
	import InputNumber from '@/components/InputNumber'

	export default {
		name: 'AddItem',

		components: {
			InputNumber,
		},

		props: {
			item: {
				type: Object,
				required: true,
			},
		},

		methods: {
			reset() {
				this.item.name = undefined;
				this.item.group = undefined;
				this.item.price = undefined;
			},
		},
	}
</script>
