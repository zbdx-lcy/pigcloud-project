<template>
	<view>
		<view class="bg">
			<view class="box">
				<view class="item" v-for="(item,index) in items" :key="index">
						<view class="text" v-if="ifshow(item)">
							<strong>财务信息{{index+1}}</strong>
							<br />
							<text>成本：{{item.cb}}\n物料总价：{{item.sum}}\n应收款：{{item.ys}}\n实收款：{{item.ss}}</text>
						</view>
						<button type="primary" @click="clickbtn(index)">删除</button>
				</view>
			</view>
		</view>
		<uni-fab horizontal="right" vertical="bottom" @fabClick="fabClick"></uni-fab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				items: [{}]
			};
		},
		onLoad() {
			uni.$on("mMinfo", (e) => {
				this.getText(e)
			})
		},
		mounted() {
			this.items = uni.getStorageSync("mM");
			if (this.items[0] == null || this.items[0] == undefined) {
				this.items = [{
					cb: "",
					sum: "",
					ys: "",
					ss: ""
				}];
			}
		},
		methods: {
			ifshow(item) {
				if (item.cb == '' && item.sum == '' && item.ys == "" && item.ss == "") {
					return false;
				} else {
					return true;
				}
			},
			getText(e) {
				this.items.push(e);
				uni.setStorageSync("mM", this.items);
			},
			clickbtn(index) {
				uni.showModal({
					title: "操作提示",
					content: "确定要删除此条数据吗？",
					cancelColor: "#007aff",
					success: (e) => {
						if (e.confirm) {
							this.items.splice(index, 1);
							uni.setStorageSync("mM", this.items);
						}
					}
				})
			},
			fabClick() {
				uni.navigateTo({
					url: "/pages/moneyMage/addMoneyMage"
				})
			}
		}
	}
</script>

<style lang="scss">
	.bg {
		background-color: #d3d3d2;
		width: 750rpx;
		height: 100vh;
		overflow: auto;

		.box {
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			align-items: flex-start;
		}

		.item {
			margin-top: 15rpx;
			margin-bottom: 15rpx;
			width: 90%;
			height: 330rpx;
			background-color: #fff;
			display: flex;
			border-radius: 25rpx;

			.text {
				font-size: 42rpx;
				padding: 25rpx;

				text {
					font-size: 32rpx;
				}
			}

			button {
				margin-top: 150rpx;
				margin-right: 30rpx;
				width: 125rpx;
				height: 75rpx;
				font-size: 30rpx;
			}
		}
	}
</style>