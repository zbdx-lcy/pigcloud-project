<template>
	<view>
		<!-- 先完善添加功能 -->
		<view class="bg">
			<view class="box">
				<view class="item" v-for="(item,index) in items" :key="index">	
				
						<view class="text" v-if="ifshow(item)">
						    <strong>{{item.name}}</strong>
						    <br />
						    <text>投放日期：{{item.time}}\n总数量：{{item.sum}}\n死淘日期：{{item.deadtime}}\n死淘数量：{{item.deadnum}}\n死淘率：{{calculateDeadRate(item)}}%</text>
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
		computed: {
		    
		},

		onLoad() {
			uni.$on("LPinfo", (e) => {
				this.getText(e);
			});
		},
		mounted() {
			this.items = uni.getStorageSync("LPM");
			if (this.items[0] == null || this.items[0] == undefined) {
				this.items = [{
					name: "",
					time: "",
					sum: "",
					deadtime: "",
					deadnum: ""
				}];
			}
		},
		methods: {
			// 计算死淘率
			calculateDeadRate(item) {
			    if (isNaN(item.deadnum) || isNaN(item.sum) || item.sum === 0) {
			        return 0;
			    } else {
			        return ((item.deadnum / item.sum) * 100).toFixed(2);
			    }
			},
			ifshow(item) {
				if (item.name == '' && item.time == '' && item.sum == "" && item.deadtime == "" && item.deadnum == "") {
					return false;
				} else {
					return true;
				}
			},
			getText(e) {
				this.items.push(e);
				uni.setStorageSync("LPM", this.items);
			},
			// 删除指定索引的元素
			clickbtn(index) {
				uni.showModal({
					title: "操作提示",
					content: "确定要删除此条数据吗？",
					cancelColor: "#007aff",
					success: (res) => {
						if (res.confirm) {
							this.items.splice(index, 1); // 根据索引删除数组元素
							uni.setStorageSync("LPM", this.items);
						}
					}
				});
			},
			fabClick() {
				uni.navigateTo({
					url: "/pages/livePigMage/addLivePig"
				});
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
			height: 350rpx;
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
				margin-right: 60rpx;
				width: 125rpx;
				height: 75rpx;
				font-size: 30rpx;
			}
		}
	}
</style>