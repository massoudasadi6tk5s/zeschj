<template>
	<view class="body">
		<view class="image-bg-container">
			<image class="image-bg" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/forgotPassword/background_image%404x.png" />
			<image class="image-bg-scrims" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/forgotPassword/bg_dark%404x.png"></image>
		</view>


		<view class="login-form-container">

			<!-- 文字部分 -->
			<view class="word-container">
				<view class="title">Forgot password</view>
				<view class="assistant-title">Please enter your email address. You will receive a link to create a new password via email.</view>
			</view>

			<!-- 填写表单 -->
			<view class="input-container">

				<!-- 用户名 -->
				<view class="name-password-container">
					<view class="name-password-scrims"></view>
					<view class="name-password-input-container">
						<view class="input-word">Email</view>
						<input />
					</view>
				</view>


			</view>

			<!-- 按钮 -->
			<view class="btn-container">
				<view class="login-btn">Send</view>
			</view>

		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		width: 100%;
		background-color: $bg-gray-dark;
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
						justify-content: space-between;
						width: 100%;
						height: 88rpx;

						.input-word {
							margin-left: 100rpx;
							color: $font-ffffff;
							font-family: "Avenir-Book";
							font-size: 17px;
							font-weight: 400;
						}

						input {
							color: $font-ffffff;
							margin-right: 100rpx;
							width: 400rpx;
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
