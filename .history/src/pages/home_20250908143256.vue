<template>
	<div>
		<nav-header></nav-header>
	
		<router-view></router-view>
		<nav-footer></nav-footer>
	</div>
</template>
<script>
import NavHeader from './../components/NavHeader'
import autoInput from './../components/autoInput'
import NavFooter from './../components/NavFooter'
export default {
	name: 'nav-home',
	components: {
		NavHeader,
		NavFooter,
		autoInput,
	},
	data() {
		return {
			text: '改一下试一试',
		}
	},
}
</script>
