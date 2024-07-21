<template>
	<view class="content">
		<myitem :title="title" :time="time" user="{name:'df',age:52}"></myitem>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title" user-select>{{title}}</text>
		</view>
		<scroll-view class="sv" scroll-x="true" scroll-y="true">
			<view class="group">
			<view class="item">
				143S
			</view>
			
			<view class="item">
				143
			</view>
			
			<view class="item">
				143
			</view>
			
			<view class="item">
				143
			</view>
			
			</view>
		</scroll-view>
		
		<swiper class="swiper" autoplay circular interval="10000" indicator-dots="true">
			<swiper-item class="item">
				<view class="swiper-item"> <image src="/static/微信图片_20231216201540.jpg" mode="aspectFill"></image> </view>
			</swiper-item>
			<swiper-item class="item">
				<view class="swiper-item"> <image src="/static/微信图片_20231219111111.jpg" mode="aspectFill"></image> </view>
			</swiper-item>
			<swiper-item class="item">
				<view class="swiper-item"> <image src="/static/wallhaven-wq9x8p.jpg" mode="aspectFill"></image> </view>
			</swiper-item>
		</swiper>
		
		<navigator url="/pages/my/my" open-type="reLaunch"> <image src="../../static/微信图片_20231216201540.jpg" mode="">臭宝</image> </navigator>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				time:34565475734576
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style lang="scss"> //super css
	.hhhh {
		background-color: rebeccapurple;
		.textq{ 
		font-size: 50px;
		color: red;
		font-style: italic;
		}
	}
	.sv {
		border: rebeccapurple solid 1rpx;
		box-sizing: border-box;
		height: 100rpx;
		.group {
			white-space: nowrap;
			.item {
				background-color: rebeccapurple;
				display: inline-block;
				height: 200rpx;
				width: 200rpx;
				margin-right: 10rpx;
			}
		}
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
	
	.swiper {
		width: 100%;
		height: 600rpx;
		
		.item {
			box-sizing: border-box;
			padding: 10rpx;
		}
		image {
			width: 100%;
			
		}
	}

	.logo {      //750*1334 为满屏，rpx意为响应式大小
		height: 20rpx;
		width: 20rpx;
		margin-top: 2rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 5rpx;
	}
	

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
