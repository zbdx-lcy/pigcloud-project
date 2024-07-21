<template>
	<view>

		<swiper class="swiper" autoplay circular interval="10000">
			<swiper-item class="item">
				<view class="swiper-item">
					<image src="/static/homeswiper1.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item class="item">
				<view class="swiper-item">
					<image src="../../static/homeswiper2.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
			<swiper-item class="item">
				<view class="swiper-item">
					<image src="../../static/homeswiper3.png" mode="aspectFill"></image>
				</view>
			</swiper-item>
		</swiper>

		<view class="news">
			<swiper class="swip" :vertical="true" :autoplay="true" :circular="true" :interval="2000"
				display-multiple-items="1" style="background-color: #FFFFFF; border-radius: 10rpx;">
				<swiper-item class="item">
					<view class="item-content">
						<image src="../../static/news.png" style="height: 60rpx;width: 60rpx;" mode="aspectFit"></image>
						<text class="item-text"
							style="white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis !important;">
							山西:AI助力生猪养殖
						</text>
					</view>
					<view class="separator">></view>
				</swiper-item>

				<swiper-item class="item">
					<view class="item-content">
						<image src="../../static/news.png" style="height: 60rpx;width: 60rpx;" mode="aspectFit"></image>
						<text class="item-text"
							style="white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis !important;">
							四川:数智赋能生猪养殖产业
						</text>
					</view>
					<view class="separator">></view>
				</swiper-item>
				<swiper-item class="item">
					<view class="item-content">
						<image src="../../static/news.png" style="height: 60rpx;width: 60rpx;" mode="aspectFit"></image>
						<text class="item-text"
							style="white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis !important;">
							河南:智慧化猪场论坛隆重举行
						</text>

					</view>
					<view class="separator">></view>
				</swiper-item>
				<swiper-item class="item">
					<view class="item-content">
						<image src="../../static/news.png" style="height: 60rpx;width: 60rpx;" mode="aspectFit"></image>
						<text class="item-text"
							style="white-space: nowrap; overflow: hidden !important; text-overflow: ellipsis !important;">
							湖南:智能养猪助推养殖业转型升级
						</text>

					</view>
					<view class="separator">></view>
				</swiper-item>

			</swiper>
		</view>


		<view class="duoyuan">
			<view class="multiyuan">
				<view class="jiacu">多元数据</view>
				<view class="row">
					<view class="item" @click="video">
						<image src="/static/farmManagement.png" mode=""></image>
						<text>实时视频</text>
					</view>
					<view class="item" @click="livePigMage">
						<image src="/static/pigManagement.png" mode=""></image>
						<text>生猪管理</text>
					</view>
					<view class="item" @click="moneyMage">
						<image src="/static/financeManagement.png" mode=""></image>
						<text>财务信息</text>
					</view>
					<view class="item" @click="materialMage">
						<image src="/static/materialManagement.png" mode=""></image>
						<text>物料信息</text>
					</view>
				</view>
			</view>
		</view>

		<view class="exrecom">
			<view class="recom">
				<view class="title">
					<view class="bold">
						生猪种类推荐
					</view>
					<view class="more">
						更多
					</view>
				</view>

				<view class="pic">
					<view class="item">
						<view class="text">
							<text space="emsp"> 长白猪\n瘦肉型品种</text>
						</view>
						<image src="../../static/homerecommend1.png" mode=""></image>
					</view>
					<view class="item">
						<view class="text">
							<text space="emsp"> 宁乡猪\n繁殖能力强</text>
						</view>
						<image src="../../static/homerecommend2.png" mode=""></image>
					</view>
					<view class="item">
						<view class="text">
							<text space="ensp"> 杜洛克猪\n体型较肥壮</text>
						</view>
						<image src="../../static/homerecommend3.png" mode=""></image>
					</view>
					<view class="item">
						<view class="text">
							<text space="ensp"> 东北民猪\n抗寒冷性强</text>
						</view>
						<image src="../../static/homerecommend4.png" mode=""></image>
					</view>
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
		},
		methods: {
			livePigMage() {
				uni.navigateTo({
					url: "/pages/livePigMage/livePigMage"
				})
			},
			video() {
				uni.navigateTo({
					url: "/pages/video/video"
				})
			},
			moneyMage() {
				uni.navigateTo({
					url: "/pages/moneyMage/moneyMage"
				})
			},
			materialMage() {
				uni.navigateTo({
					url: "/pages/materialMage/materialMage"
				})
			}
		}
	}
</script>

<style lang="scss">
	.news {
		display: flex;
		justify-content: center;
		padding-top: 10rpx;
		background-color: #eeeeed;

		.swip {
			height: 120rpx;
			width: 94%;

			.item {
				display: flex;
				padding-left: 20rpx;
				align-items: center;
				height: 30rpx;

				.item-content {
					.item-image {
						height: 51rpx;
						width: 51rpx;
					}

					.item-text {
						padding-left: 20rpx;
						padding-top: 10rpx;
						font-size: 32rpx;
						color: #505050;
						width: 560rpx;
					}

					display: flex;
				}

				.separator {
					margin-right: 10px;
					font-size: 38rpx;
					/* 根据需要调整大小 */
					line-height: 30rpx;
					/* 竖直方向居中 */
					color: #505050 !important;
				}
			}
		}
	}

	.duoyuan {
		background-color: #eeeeed;
		display: flex;
		justify-content: center;
		align-items: center;
		padding-top: 20rpx;

		.multiyuan {
			.row {
				margin-top: 25rpx;
				display: flex;
				justify-content: space-around;

				.item {
					display: flex;
					flex-direction: column;

					text {
						padding-top: 10rpx;
						font-size: 30rpx;
					}
				}

				image {
					padding-left: 20rpx;
					height: 80rpx;
					width: 80rpx;
				}
			}

			background-color: #fff;
			border-radius: 10rpx;
			width: 94%;
			padding-bottom: 20rpx;

			.jiacu {
				font-weight: bold;
				font-size: 36rpx;
				border-bottom: #cacaca 1rpx solid;
				padding: 20rpx 0 23rpx 20rpx;
			}
		}
	}

	.swiper {
		width: 100%;
		height: 510rpx;

		.item {
			box-sizing: border-box;
		}

		image {
			width: 100%;
			height: 510rpx;
		}
	}

	.row {

		margin-top: 30rpx;
		display: flex;
		justify-content: space-around;

		.item {
			display: flex;
			flex-direction: column;
		}

		image {
			height: 110rpx;
			width: 110rpx;
		}
	}

	.exrecom {
		padding: 15rpx 20rpx 10rpx 20rpx;
		width: 94%;
		height: 750rpx;
		background-color: #eeeeed;
		display: flex;
		justify-content: center;
		border: black;
		.recom {
			border-radius: 10rpx;
			background-color: #fff;
			.title {
				display: flex;
				justify-content: space-between;
				margin-top: 20rpx;
				padding-bottom: 23rpx;
				border-bottom: #cacaca 1rpx solid;
				.more {
					padding-right: 10rpx;
				}
				.bold {
					padding-left: 20rpx;
					font-weight: bold;
					font-size: 35rpx;
				}
			}
			.pic {
				display: flex;
				flex-wrap: wrap;
				.item {
					border-radius: 10rpx;
					width: 270rpx;
					height: 150rpx;
					display: flex;
					background-color: #eeeeed;
					padding: 30rpx;
					margin-top: 50rpx;
					margin-left: 15rpx;
					.text {
						font-size: 30rpx;
						margin-right: 30rpx;
						margin-top: 35rpx;
					}
					image {
						margin-top: 23rpx;
						width: 90rpx;
						height: 90rpx;
					}
				}
			}

		}
	}
</style>