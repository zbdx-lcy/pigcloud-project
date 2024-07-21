<template>
	<view class="bg">

		<view class="title">
			<view class="pic">
				<image src="../../static/mypic.jpg" mode="aspectFit"></image>
			</view>
			<view class="info">
				<text class="bold">Administrator\n</text>
				<text space="emsp"> 查看编辑个人资料</text>
			</view>
			<view class="sz">
				<image src="../../static/sz.png" mode="aspectFit"></image>
			</view>
		</view>
		
		<view class="pic">
			<view class="curve-item">
				<image src="../../static/myfunction1.png" mode=""></image>
				<text space="emsp"> 测试版本</text>
			</view>
			<view class="item">
				<image src="../../static/myfunction2.png" mode=""></image>
				<text space="emsp"> 今日行情</text>
			</view>
			<view class="item">
				<image src="../../static/myfunction3.png" mode=""></image>
				<text space="emsp"> 生产待办</text>
			</view>
			<view class="item">
				<image src="../../static/myfunction4.png" mode=""></image>
				<text space="emsp"> 通讯管理</text>
			</view>
			<view class="item hard-monitor">
				<image src="../../static/myfunction5.png" mode=""></image>
				<text space="emsp"> 硬件监控</text>
			</view>
			<view class="divider"></view>
			<view class="item">
				<image src="../../static/myfunction6.png" mode=""></image>
				<text space="emsp"> 购买硬件</text>
			</view>
			<view class="item">
				<image src="../../static/myfunction7.png" mode=""></image>
				<text space="emsp"> 集团定制</text>
			</view>
			<view class="item update-log">
				<image src="../../static/myfunction8.png" mode=""></image>
				<text space="emsp"> 更新日志</text>
			</view>
			<view class="divider"></view>
			<view class="item">
				<image src="../../static/myfunction9.png" mode=""></image>
				<text space="emsp"> 专属客服</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		},

	}
</script>

<style lang="scss">
	.curve-item {
	  //position: relative;
	  padding-left: 30rpx;
	  width: 100%;
	  margin-top: 10rpx;
	  display: flex;
	  flex-direction: row;
	  align-items: center;
	  border-bottom: 1px solid #eee;
	  padding-bottom: 15rpx;
	  z-index: 1;
	
	  image {
	    width: 60rpx;
	    height: 60rpx;
	  }
	
	  text {
	    margin-left: 20rpx;
	    font-size: 30rpx;
	
	    &:after {
	      content: '>';
	      font-size: 40rpx;
	      margin-left: 430rpx;
	      color: #b3b3b3;
	    }
	  }
	}
	.divider {
	  width: 100%;
	  height: 22rpx; /* 设置分割线高度 */
	  background-color: #F6F6F6; /* 设置分割线颜色 */
	  padding-left: 0%;
	}
	.bg {

		width: 100%;
		height: 100%;
		top: 0px;
		background-color: #F6F6F6;

		.title {
			//margin-top: 40rpx;
			display: flex;
			background-color: #3478F6;
			height: 290rpx;
			justify-content: space-around;
			padding: 30rpx 20rpx;
			.pic {
				background-color:#3478F6;
				image {
					margin-top: 30rpx;
					margin-left: 0rpx;
					width: 210rpx;
					height: 210rpx;
					border-radius: 250rpx;
				}
			}

			.sz {
				image {
					margin-top: 150rpx;
					margin-right: 20rpx;
					width: 40rpx;
					height: 40rpx;
				}
			}

			.info {
				margin-top: 80rpx;
				color: white;
				line-height: 100rpx;
				font-size: 32rpx;

				.bold {
					font-weight: bold;
					font-size: 55rpx;
				}
			}
		}

		.pic {
			background-color: #fff;
			// margin-left: 30rpx;
			
			display: flex;
			flex-wrap: wrap;
			justify-content: space-around;
			padding-top: 20rpx;
			align-items: center;		
			.item {
				padding-left: 30rpx;
				width: 100%;
				margin-top: 30rpx;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: 1px solid #eee;
				/* 添加分割线样式 */
				padding-bottom: 15rpx;

				/* 调整下边距 */
				image {
					width: 60rpx;
					/* 调整image组件大小 */
					height: 60rpx;
				}

				text {
					margin-left: 20rpx;
					font-size: 30rpx;

					/* 调整字体大小 */
					&:after {
						content: '>';
						/* 添加大于号样式 */
						font-size: 40rpx;
						margin-left: 430rpx;
						color: #b3b3b3;
					}
				}
			}
		}
	}
</style>