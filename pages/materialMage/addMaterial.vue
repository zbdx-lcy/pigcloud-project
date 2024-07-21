<template>
	<view>
		<!-- 没实现传参 -->
		<view class="text" >
			<view class="item">
				<text>物料名称</text>
				<input type="text" @input="get1"/>
			</view>
			<view class="item">
				<text>物料规格/单位</text>
				<input type="text" @input="get2"/>
			</view>
			<view class="item">
				<text>物料类型</text>
				<input type="text" @input="get3"/>
			</view>
			<view class="item">
				<text>物料单价（元）</text>
				<input type="text" @input="get4"/>
			</view>
			<view class="item">
				<text>物料保质期（天）</text>
				<input type="text" @input="get5"/>
			</view>
			<view class="item">
				<text>物料生产日期</text>
				<input type="text" @input="get6"/>
			</view>
			<button type="primary" @click="confirm">确认</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				name:"",
				scale:"",
				type:"",
				dj:"",
				bzq:"",
				scrq:""
			}
		},
		methods: {
			get1(e){
				this.name=e.detail.value;
			},
			get2(e){
				this.scale=e.detail.value;
			},
			get3(e){
				this.type=e.detail.value;
			},
			get4(e){
				this.dj=e.detail.value;
			},
			get5(e){
				this.bzq=e.detail.value;
			},
			get6(e){
				this.scrq=e.detail.value;
			},
			confirm(){
				uni.$emit("maMinfo",{name:this.name,scale:this.scale,type:this.type,dj:this.dj,bzq:this.bzq,scrq:this.scrq});
				uni.navigateBack({delta:1});
			}
		}
	}
</script>

<style lang="scss">
.text{
	margin-top: 120rpx;
	margin-left: 40rpx;
	margin-right: 40rpx;
	.item{
		margin-top: 50rpx;
		input{
			margin-top: 10rpx;
			margin-bottom: 10rpx;
			border-bottom: gray solid 2rpx;
			padding-bottom: 1rpx;
			font-size: 35rpx;
		}
		text{
			font-size: 37rpx;
		}
	}
	button{
		margin-top: 70rpx;
	}
}

</style>
