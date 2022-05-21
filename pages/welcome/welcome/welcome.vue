<template>
	<view class="body">

		<view class="image-bg-container">
			<image class="image-bg" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/welcome/background_image.png" />
			<image class="image-bg-scrims" mode="aspectFill"
				src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/welcome/bg-copy.png"></image>
		</view>

		<!-- 文字&按钮 容器 -->
		<view class="word-btn-container">

			<!-- 相关文字 容器 -->
			<view class="word-container">
				<view class="title">Find new friends</view>
				<view class="title">nearby</view>
				<view class="content">
					With milions of users all over the world, we gives you the ability to connect with people no matter
					where you are.
				</view>

				<view class="btn-login-in">Log In</view>
				<view class="btn-sign-up">Sign Up</view>

				<view class="other-login">Or log in with</view>

				<view class="other-icon-container">
					<view class="other-icon-array">
						<image class="other-icon" src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/welcome/facebook.png">
						</image>
						<image class="other-icon" src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/welcome/twitter.png">
						</image>
						<image class="other-icon" src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/welcome/google.png">
						</image>
					</view>
				</view>

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



		// 文字&按钮 容器
		.word-btn-container {
			z-index: 3;
			margin-top: 40vh;

			// 相关文字 容器
			.word-container {
				display: flex;
				flex-direction: column;
				padding: 0 50rpx;

				.title {
					color: $font-ffffff;
					font-family: "Avenir-Black";
					font-size: 40px;
					font-weight: 400;
				}

				.content {
					margin-top: 20rpx;
					color: $font-ffffff;
					font-size: 17px;
					font-weight: 400;
				}

				// 登录按钮
				.btn-login-in {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 86rpx;
					width: 100%;
					height: 88rpx;
					border-radius: 22px;
					background-color: $transparent;

					color: $font-ff2d55;
					font-family: "Avenir-Heavy";
					font-size: 15px;
					font-weight: 400;
				}

				// 注册按钮
				.btn-sign-up {
					display: flex;
					align-items: center;
					justify-content: center;
					margin-top: 20rpx;
					width: 100%;
					height: 88rpx;
					border-radius: 22px;
					background: $btn-f78-f54;

					color: $font-ffffff;
					font-family: "Avenir-Heavy";
					font-size: 15px;
					font-weight: 400;
				}

				.other-login {
					margin-top: 48rpx;
					text-align: center;
					color: #4e586e;
					font-family: "Avenir-Book";
					font-size: 13px;
					font-weight: 400;
				}

				.other-icon-container {
					display: flex;
					align-items: center;
					justify-content: center;

					.other-icon-array{
						display: flex;
						align-items: center;
						justify-content: space-between;
						margin-top: 36rpx;
						width: 220rpx;
						
						.other-icon {
							width: 56rpx;
							height: 56rpx;
						}
					}
					

				}



			}

		}


	}
</style>
