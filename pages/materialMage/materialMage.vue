<template>
	<view>
		<view class="bg">
			<view class="box">
				<view class="item" v-for="(item,index) in items" :key="index"> <!-- //最上面的不是空 -->
						<view class="text" v-if="ifshow(item)">
							<strong>物料信息{{index+1}}</strong>
							<br />
							<text>名称：{{item.name}}\n规格/单位：{{item.scale}}\n类型：{{item.type}}\n单价（元）：{{item.dj}}\n保质期（天）：{{item.bzq}}\n生产日期：{{item.scrq}}</text>
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
			uni.$on("maMinfo", (e) => {
				this.getText(e)
			})
		},
		mounted() {
			this.items = uni.getStorageSync("maM");
			if (this.items[0] == null || this.items[0] == undefined) {
				this.items = [{
					name: "",
					scale: "",
					type: "",
					dj: "",
					bzq: "",
					scrq: ""
				}];
			}
		},
		methods: {
			ifshow(item) {
				if (item.name == '' && item.scale == '' && item.type == "" && item.dj == "" && item.bzq == "" && item
					.scrq == "") {
					return false;
				} else {
					return true;
				}
			},
			getText(e) {
				this.items.push(e);
				uni.setStorageSync("maM", this.items);
			},
			clickbtn(index) {
				uni.showModal({
					title: "操作提示",
					content: "确定要删除此条数据吗？",
					cancelColor: "#007aff",
					success: (e) => {
						if (e.confirm) {
							this.items.splice(index, 1);
							uni.setStorageSync("maM", this.items);
						}
					}
				})
			},
			fabClick() {
				uni.navigateTo({
					url: "/pages/materialMage/addMaterial"
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
			height: 410rpx;
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