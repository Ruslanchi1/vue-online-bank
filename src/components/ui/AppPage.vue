<template>
	<div v-if="back" class="breadcrumbs">
		<router-link to="/" class="text-white">Вернуться к списку заявок</router-link>
	</div>
	<div class="card">
		<h1 class="card-title">{{ title }}
			<slot name="header"></slot>
		</h1>
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true
		},
		back: {
			type: Boolean,
			required: false
		}
	},
	setup(props) {
		document.title = `${props.title} | Клон банка`
	}
}
</script>