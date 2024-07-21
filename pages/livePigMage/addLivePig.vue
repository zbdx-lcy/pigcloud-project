<template>
	<view>
		<!-- 没实现传参 -->
		<view class="text" >
			<view class="item">
				<text>猪种名称</text>
				<input type="text" @input="get1"/>
			</view>
			<view class="item">
				<text>投放日期</text>
				<input type="text" @input="get2"/>
			</view>
			<view class="item">
				<text>总数量</text>
				<input type="text" @input="get3"/>
			</view>
			<view class="item">
				<text>死淘日期</text>
				<input type="text" @input="get4"/>
			</view>
			<view class="item">
				<text>死淘数量</text>
				<input type="text" @input="get5"/>
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
				time:"",
				posi:"",
				type:"",
				state:""
			}
		},
		methods: {
			get1(e){
				this.name=e.detail.value;
			},
			get2(e){
				this.time=e.detail.value;
			},
			get3(e){
				this.posi=e.detail.value;
			},
			get4(e){
				this.type=e.detail.value;
			},
			get5(e){
				this.state=e.detail.value;
			},
			confirm(){
				uni.$emit("LPinfo",{name:this.name,time:this.time,sum:this.posi,deadtime:this.type,deadnum:this.state});
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
