<template>
	<view class="body">

		<view class="image-bg-container">
			<image class="image-bg" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/login/background_image%404x.png" />
			<image class="image-bg-scrims" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/login/bg_dark%404x.png"></image>
		</view>


		<view class="login-form-container">

			<!-- 文字部分 -->
			<view class="word-container">
				<view class="title">欢迎回家</view>
				<view class="assistant-title">登录你的账号</view>
			</view>

			<!-- 填写表单 -->
			<view class="input-container">

				<!-- 用户名 -->
				<view class="name-password-container">
					<view class="name-password-scrims"></view>
					<view class="name-password-input-container">
						<input class="input-word" placeholder-class="input-word" @input="handleNickNameInput"
							placeholder="昵称😊" />
					</view>
				</view>

				<!-- 密码 -->
				<view class="name-password-container mgt20">
					<view class="name-password-scrims"></view>
					<view class="name-password-input-container">
						<input class="input-word" placeholder-class="input-word" @input="handlePasswordInput"
							password="true" placeholder="密码👀" />
					</view>
				</view>

			</view>

			<!-- 按钮 -->
			<view class="btn-container" @click="handleLogin">
				<view class="login-btn">登录</view>
			</view>

			<!-- 忘记密码 -->
			<view class="forget-password">忘记密码?</view>

		</view>


	</view>
</template>

<script>
	import {
		userLogin
	} from '../../../api/login.js'

	export default {
		data() {
			return {
				nickName: '',
				password: ''
			};
		},

		methods: {

			handleNickNameInput(e) {
				this.nickName = e.detail.value
			},
			handlePasswordInput(e) {
				this.password = e.detail.value
			},
			
			// 登录
			async handleLogin(){
				let nickName = this.nickName
				let password = this.password
				
				let data = {
					nickName, password
				}
				
				if(!nickName){
					uni.showToast({
						title: '昵称未填写',
						icon: 'none'
					})
					return
				}
				if(!password){
					uni.showToast({
						title: '密码未填写',
						icon: 'none'
					})
					return
				}
				
				let resultData = await userLogin(data)
				
				let {token, user} = resultData.result
				
				uni.setStorageSync('token', token)
				uni.setStorageSync('user', user)
				
				uni.reLaunch({
					url: '/pages/home/home'
				})
				
				
			},

		}

	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
		background-color: $bg-gray-dark;
	}

	.mgt20 {
		margin-top: 20rpx;
	}



	.body {
		height: 100%;
		width: 100%;


		.image-bg-container {
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			right: 0;
			width: 100%;
			height: 100%;
			z-index: -1;

			.image-bg {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
				width: 100%;
				height: 100%;
			}

			.image-bg-scrims {
				position: absolute;
				left: 0;
				right: 0;
				bottom: 0;
				right: 0;
				width: 100%;
				height: 100%;
				width: 100%;
				height: 100%;
			}

		}

		// 登录表单
		.login-form-container {

			// 文字容器
			.word-container {
				margin-left: 60rpx;
				margin-top: 216rpx;

				.title {
					color: $font-ffffff;
					font-family: "Avenir-Black";
					font-size: 34px;
					font-weight: 400;
				}

				.assistant-title {
					margin-top: 10rpx;
					color: $font-ffffff;
					font-family: "Avenir-Book";
					font-size: 17px;
					font-weight: 400;
				}

			}

			// 填写容器
			.input-container {
				margin-top: 100rpx;

				.name-password-container {
					position: relative;
					padding: 0 60rpx;

					.name-password-scrims {

						opacity: 0.2;
						width: 100%;
						height: 44px;
						border-radius: 22px;
						background: $uni-bg-color;
					}

					.name-password-input-container {
						position: absolute;
						top: 0;
						left: 0;
						display: flex;
						align-items: center;
						justify-content: center;
						width: 100%;
						height: 88rpx;

						.input-word {

							color: $font-ffffff;
							font-family: "Avenir-Book";
							font-size: 17px;
							font-weight: 400;
						}

						input {
							color: $font-ffffff;
							width: 550rpx;
						}

					}

				}

			}

		}

		// 按钮
		.btn-container {
			margin-top: 80rpx;
			padding: 0 60rpx;


			.login-btn {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 88rpx;
				border-radius: 22px;
				background: $btn-f78-f54;

				color: #ffffff;
				font-family: "Avenir-Heavy";
				font-size: 15px;
				font-weight: 400;
			}

		}

		// 忘记密码
		.forget-password {
			margin-top: 108rpx;
			color: $font-ffffff;
			font-family: "Avenir-Book";
			font-size: 17px;
			font-weight: 400;
			text-align: center;
		}


	}
</style>
