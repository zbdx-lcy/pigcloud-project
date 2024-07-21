<template>
	<view>
		<!-- 没实现传参 -->
		<view class="text" >
			<view class="item">
				<text>成本</text>
				<input type="text" @input="get1"/>
			</view>
			<view class="item">
				<text>物料总价</text>
				<input type="text" @input="get2"/>
			</view>
			<view class="item">
				<text>应收款</text>
				<input type="text" @input="get3"/>
			</view>
			<view class="item">
				<text>实收款</text>
				<input type="text" @input="get4"/>
			</view>
			
			<button type="primary" @click="confirm">确认</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cb:"",
				sum:"",
				ys:"",
				ss:""
			}
		},
		methods: {
			get1(e){
				this.cb=e.detail.value;
			},
			get2(e){
				this.sum=e.detail.value;
			},
			get3(e){
				this.ys=e.detail.value;
			},
			get4(e){
				this.ss=e.detail.value;
			},
			confirm(){
				uni.$emit("mMinfo",{cb:this.cb,sum:this.sum,ys:this.ys,ss:this.ss});
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
		margin-top: 80rpx;
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
