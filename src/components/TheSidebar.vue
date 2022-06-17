<template>
	<div class="sidebar" v-if="sidebar">
		<span class="sidebar-close" @click="$store.commit('closeSidebar')">&times;</span>
		<div class="sidebar-content">
			<p>Lorem ipsum dolor sit amet.</p>
		</div>
	</div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
	setup() {
		const store = useStore()

		const sidebar = computed(() => store.state.sidebar)

		return { sidebar }
	}
}
</script>

<style lang="scss" scoped>
</style>