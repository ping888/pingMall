<template>
	<div class="textcontain">
        <span>左边</span>
        <span>左边</span>
		<span
			ref="myRef"
			class="span-input"
            v-html="innerText"
			@input="changeText()"
          
			placeholder="请输入"
			contenteditable="true"
		>
		</span>
        <span>右边</span>

	</div>
</template>
<script>
export default {
	name: 'autoInput',
	props: ['value'],
	data() {
		return {
			cardComboMoney: '',
			innerText: '',
		}
	},
	methods: {
		changeText() {
            this.innerText=this.$refs.myRef.innerText
            debugger
		
		},
	},
}
</script>
<style lang="scss" scoped>
input {
	min-width: 5em;
}
.span-input {
	min-width: 200px !important;

	height: 24px;

	line-height: 24px;

	font-size: 14px;
	outline: 1px solid #ddd;
	padding: 5px 8px;

	border-bottom: 1px solid #ddd;

	&:empty:before {
		content: attr(placeholder);

		font-size: 13px;
		color: #999;
	}
	&:focus:before {
	
		content: none;
	}
}
</style>
