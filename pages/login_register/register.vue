<template>
	<view>
		<h1 class="title1">智慧养殖系统--注册</h1>
	</view>
	<view class="zm">
		<view class="z">
			<input type="digit" @input="setid" placeholder="请输入账号"/>
		</view>
		<br />
		<view class="m">
			<input type="safe-password" password="text" @input="setpw" placeholder="请输入密码"/>
		</view>
		<br />
	</view>
	
	<view class="btn">
		<button style="color: white; background-color: #3478F6; width: 310rpx; line-height:70rpx;"
			@click="doRegist"><text style="font-size: 36rpx;">注册</text></button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				id:"",
				pw:"",
				unum:1
			};
		},
		methods:{
			setid(e){
				this.id=e.detail.value;
			},
			setpw(e){
				this.pw=e.detail.value;
			},
			doRegist(){
				console.log(this.unum);
				this.unum++;
				uni.setStorageSync("unum",this.unum);
				uni.setStorageSync("u"+this.unum,{id:this.id,password:this.pw});
				if(this.id=="" || this.pw==""){
					uni.showModal({
						title:"注册失败",
						content:"账号或密码不能为空，请重试！",
						showCancel:false
					})
				}
				uni.navigateBack({delta:1})
			}
		},
		mounted(){
			this.unum=uni.getStorageSync("unum");
			//uni.clearStorageSync();
		},
		onReady(){
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#3478F6'
			})
		}
	}
</script>

<style lang="scss">
.title1 {
		font-family: "STXingkai" "华文隶书";
		color: #000000;
		font-size: 58rpx;
		display: flex;
		justify-content: space-around;
		box-sizing: border-box;
		margin-top: 240rpx;
		margin-bottom: 150rpx;
	}
.zm{
	display: flex;
	flex-direction: column;
	margin-left: 50rpx;
	margin-right: 50rpx;
	height: 300rpx;
	input{
		height: 100rpx;
		font-size: 36rpx;
	}
	.z{
		display: flex;
		border-bottom: #1AAD19 solid 1rpx;
	}
	.m{
		display: flex;
		border-bottom: #1AAD19 solid 1rpx;
	}
}
.btn{
	 margin: 325rpx 40rpx 20rpx 40rpx;
}
</style>
