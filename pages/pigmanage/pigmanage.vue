<template>
	<view>
		<view class="bg">
			<view class="box">
				<view class="item" v-for="(item,index) in items" :key="index">
				<view class="text" v-if="ifshow(item)">
					<strong>{{item.name}}</strong>
					<br />
					<text>规模：{{item.scale}}\n位置：{{item.pos}}\n类型：{{item.type}}\n状态：{{item.state}}</text>
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
				items:[{}]
			};
		},
		onLoad() {
			uni.$on("Pinfo",(e)=>{
				this.getText(e);
			})
		},
		mounted() {
			this.items=uni.getStorageSync("PM");
			 if (this.items[0] == null || this.items[0] == undefined) {
			     this.items=[{name:"",scale:"",pos:"",type:"",state:""}];
			 }	
		},
		methods:{
			ifshow(item) {
				if (item.name == '' && item.scale == '' && item.pos == "" && item.type == "" && item.state == "") {
					return false;
				} else {
					return true;
				}
			},
			getText(e){
				this.items.push(e);
				uni.setStorageSync("PM",this.items);
			},
			clickbtn(index){
				uni.showModal({
					title:"操作提示",
					content:"确定要删除此条数据吗？",
					cancelColor:"#007aff",
					success: (e) => {
						if(e.confirm){
							this.items.splice(index, 1);
							uni.setStorageSync("PM",this.items);
						}
					}
				})
			},
			fabClick(){
				uni.navigateTo({
					url:"/pages/pigmanage/addPig"
				})
			}
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
		align-items: flex-start;
	}	
	.item{
		margin-top: 15rpx;
		margin-bottom: 15rpx;
		width: 90%;
		height: 310rpx;
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
			margin-top: 120rpx;
			margin-right:  30rpx ;
			width: 125rpx;
			height: 75rpx;
			font-size: 30rpx;
		}
	}
}
</style>
