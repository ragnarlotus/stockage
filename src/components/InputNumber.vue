<template>
	<input
		type="text"
		:value="value"
		@keydown="checkKey"
		@input="$emit('input', $event.target.value)"
	>
</template>

<script>
const exclude = /Backspace|Enter|Tab|Delete|Del|ArrowUp|Up|ArrowDown|Down|ArrowLeft|Left|ArrowRight|Right|Home|Shift|Alt/

export default {
	name: 'InputNumber',

	props: {
		maxlength: [Number],
		value: [String, Number],
	},

	data: () => ({
		chars: /[0-9]/
	}),

	methods: {
		checkKey($event) {
			if (this.chars && !exclude.test($event.key) && !this.chars.test($event.key)) {
				$event.preventDefault()
			}
		},
	},
}
</script>
