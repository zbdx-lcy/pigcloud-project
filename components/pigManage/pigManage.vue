<template>
	<view>
		<view class="item">
		<view class="text">
			<strong>{{name}}</strong>
			<br />
			<text>规模：{{scale}}\n位置：{{posi}}\n类型：{{type}}\n状态：{{state}}</text>
		</view>
		<button type="primary" @click="clickbtn">删除</button>
		</view>
	</view>
</template>

<script>
	export default {
		name:"pigManage",
		data() {
			return {
				
			};
		},
		props:{
			name:{
				type:String
			},
			scale:{
				type:Number
			},
			posi:{
				type:String
			},
			type:{
				type:String
			},
			state:{
				type:String
			}
		}
	}
</script>

<style lang="scss">
.item{
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		width: 90%;
		height: 330rpx;
		background-color: #fff;
		display: flex;
		border-radius: 25rpx;
		.text{
			font-size: 42rpx;
			padding: 25rpx;
			text{
				font-size: 32rpx;
			}
		}
		button{
			margin-top: 100rpx;
			width: 160rpx;
			height: 80rpx;
		}
	}
</style>