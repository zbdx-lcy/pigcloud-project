<template>
	<!-- -->
	<view class="chat">
		<scroll-view :style="{height: `${windowHeight-inputHeight}rpx`}" id="scrollview" scroll-y="true"
			:scroll-top="scrollTop" class="scroll-view">
			<!-- 聊天主体 -->
			<view id="msglistview" class="chat-body">
				<!-- 聊天记录 -->
				<view v-for="(item,index) in msgList" :key="index"> <!-- 改 -->
					<!-- 用户发的消息 -->
					<view class="item self" v-if="item.userContent !== ''">
						<view class="avatar"></view>
						<view class="content right">
							{{item.userContent}}
						</view>
					</view>
					<!-- 机器人发的消息 -->
					<view class="item Ai" v-if="item.botContent !== ''">
						<view class="avatar"></view>
						<view class="content left">
							{{item.botContent}}
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
		<!-- 底部消息发送栏 -->
		<view class="chat-bottom" :style="{height: `${inputHeight}rpx`}">
			<view class="send-msg" :style="{bottom:`${keyboardHeight}rpx`}">
				<view class="uni-textarea">
					<textarea v-model="chatMsg" maxlength="300" confirm-type="send" @confirm="handleSend"
						:show-confirm-bar="false" :adjust-position="false" @linechange="sendHeight" @focus="focus"
						@blur="blur" auto-height placeholder="请输入问题或需求..."></textarea>
				</view>
				<button @click="handleSend" class="send-btn">发送</button>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				// 键盘高度
				keyboardHeight: 0,
				// 底部消息发送高度
				bottomHeight: 0,
				// 滚动距离
				scrollTop: 0,
				userId: '',
				// 发送的消息
				chatMsg: "",
				msgList: [{
					botContent: "你好，我叫小云，请输入您的问题：",
					recordId: 0,
					titleId: 0,
					userContent: "",
					userId: 0
				}]
			};
		},
		computed: {
			windowHeight() {
				return this.rpxTopx(uni.getSystemInfoSync().windowHeight);
			},
			inputHeight() {
				return this.bottomHeight + this.keyboardHeight;
			}
		},
		onLoad() {
			uni.onKeyboardHeightChange((res) => {
				this.keyboardHeight = this.rpxTopx(res.height - 60);
				if (this.keyboardHeight < 0) this.keyboardHeight = 0;
			});
		},
		onUnload() {
			uni.offKeyboardHeightChange();
		},
		methods: {
			focus() {
				this.scrollToBottom();
			},
			blur() {
				this.scrollToBottom();
			},
			rpxTopx(px) {
				let deviceWidth = wx.getSystemInfoSync().windowWidth;
				let rpx = (750 / deviceWidth) * Number(px);
				return Math.floor(rpx);
			},
			sendHeight() {
				setTimeout(() => {
					let query = uni.createSelectorQuery();
					query.select('.send-msg').boundingClientRect();
					query.exec((res) => {
						this.bottomHeight = this.rpxTopx(res[0].height);
					});
				}, 10);
			},
			scrollToBottom(e) {
				setTimeout(() => {
					let query = uni.createSelectorQuery().in(this);
					query.select('#scrollview').boundingClientRect();
					query.select('#msglistview').boundingClientRect();
					query.exec((res) => {
						if (res[1].height > res[0].height) {
							this.scrollTop = this.rpxTopx(res[1].height - res[0].height);
						}
					});
				}, 15);
			},
			handleSend() {
			    if (!this.chatMsg || !/^\s+$/.test(this.chatMsg)) {
			        let userObj = {
			            botContent: "",
			            recordId: 0,
			            titleId: 0,
			            userContent: this.chatMsg,
			            userId: 0
			        };
			
			        this.msgList.push(userObj);
			        this.chatMsg = "";
			
			        setTimeout(() => {
			            let botObj = {
			                botContent: "根据您现在的生猪养殖情况，建议您关注物料信息1的保质期",
			                recordId: 0,
			                titleId: 0,
			                userContent: "",
			                userId: 0
			            };
			            this.msgList.push(botObj);
			            this.scrollToBottom();
			        }, 1555); // 2秒延迟发送 AI 消息
			    } else {
			        this.$modal.showToast("不能发送空白消息");
			    }
			}
		}
	};
</script>
<style lang="scss" scoped>
	$chatContentbgc: #C2DCFF;
	$sendBtnbgc: #4F7DF5;

	view,
	button,
	text,
	input,
	textarea {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	/* 聊天消息 */
	.chat {
		.scroll-view {
			::-webkit-scrollbar {
				display: none;
				width: 0 !important;
				height: 0 !important;
				-webkit-appearance: none;
				background: transparent;
				color: transparent;
			}

			// background-color: orange;
			background-color: #F6F6F6;

			.chat-body {
				display: flex;
				flex-direction: column;
				padding-top: 23rpx;

				// background-color:skyblue;
				.self {
					justify-content: flex-end;
				}

				.item {
					display: flex;
					padding: 23rpx 30rpx;
					// background-color: greenyellow;

					.right {
						background-color: $chatContentbgc;
					}

					.left {
						background-color: #ececeb;
					}

					.right::after {
						position: absolute;
						display: inline-block;
						content: "";
						width: 0;
						height: 0;
						left: 100%;
						top: 10px;
						border: 12rpx solid transparent;
						border-left: 12rpx solid $chatContentbgc;
					}

					.left::after {
						position: absolute;
						display: inline-block;
						content: "";
						width: 0;
						height: 0;
						top: 10px;
						right: 100%;
						border: 12rpx solid transparent;
						border-right: 12rpx solid #ececeb;
					}

					.content {
						position: relative;
						max-width: 586rpx;
						word-wrap: break-word;
						padding: 24rpx 24rpx;
						//margin: 0 24rpx;
						border-radius: 10px;
						font-size: 32rpx;
						font-family: PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 42rpx;
					}
				}
			}
		}

		/* 底部聊天发送栏 */
		.chat-bottom {
			width: 100%;
			height: 177rpx;
			background: #F4F5F7;
			transition: all 0.1s ease;

			.send-msg {
				display: flex;
				align-items: flex-end;
				padding: 4rpx 0rpx 2rpx 0rpx;
				width: 100%;
				min-height: 40rpx;
				position: fixed;
				bottom: 0;
				background: #EDEDED;
				transition: all 0.1s ease;
			}

			.uni-textarea {
				padding: 8rpx 30rpx;

				textarea {
					width: 548rpx;
					min-height: 35rpx;
					max-height: 500rpx;
					background: #FFFFFF;
					border-radius: 8rpx;
					font-size: 32rpx;
					font-family: PingFang SC;
					color: #333333;
					line-height: 43rpx;
					padding: 8rpx 8rpx;
				}
			}

			.send-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-bottom: 10rpx;
				margin-left: 10rpx;
				width: 115rpx;
				height: 55rpx;
				background: $sendBtnbgc;
				border-radius: 8rpx;
				font-size: 28rpx;
				font-family: PingFang SC;
				font-weight: 500;
				color: #FFFFFF;
				line-height: 28rpx;
			}
		}
	}
</style>