<template>
	<view>
		<view class="bg">
			<view class="box">
				<view class="item">
				<video src="@/static/pigvideo.mp4" controls="false" object-fit="fill" autoplay="true" show-center-play-btn="false"></video>
				</view>
				<view class="item">
				<image src="/static/spjk.png" mode=""></image>
				<text>场地二</text>
				</view>
				<view class="item">
				<image src="/static/spjk.png" mode=""></image>
				<text>场地三</text>
				</view>	
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.bg{
	background-color: #d3d3d2;
	width: 750rpx;
	height:100vh;
	overflow: auto;
	.box{
		margin-top: 20rpx;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		align-items: center;	
	}	
	.item{
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		width: 90%;
		height: 330rpx;
		background-color: #fff;
		display: flex;
		// border-radius: 25rpx;
		align-items: center;
		flex-direction: column;
		justify-content: center;
		image{
			width: 100rpx;
			height: 100rpx;
		}
		text{
			font-size: 35rpx
		}
		video {
			width: 675rpx;
		}
	}
}
</style>
