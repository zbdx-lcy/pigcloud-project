<template>
	<view class="title">
		{{title}}
	</view>
</template>

<script>
	export default {
		name:"title1",
		props:{
			title:{
				type:String,
				default:"默认标题"
			},
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.title{
	color: #3478F6;
	font-weight: bold;
	font-size: 60rpx;
	display: flex;
	justify-content: space-around;
	box-sizing: border-box;
	margin-top: 80rpx;
	margin-bottom: 100rpx;
}
</style>