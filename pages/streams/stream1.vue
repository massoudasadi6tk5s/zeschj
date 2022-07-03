<template>
	<view class="body">

		<!-- 背景 -->
		<view class="bg-container">
			<image class="bg" mode="aspectFill" :src="photos1"></image>
			<image class="shadow" mode="aspectFill" :src="shadow"></image>
		</view>

		<!-- 头部 -->
		<view class="header-body-container">
			<view class="header-body">

				<!-- 用户信息 -->
				<view class="user-info-container">
					<image class="head" :src="head1"></image>
					<view class="nickname-live-time">
						<view class="nickname">Russell Lee</view>
						<view class="live-time">01:08:30</view>
					</view>
				</view>

				<!-- 删除按钮 -->
				<view class="del-btn">
					<image :src="close"></image>
				</view>

			</view>
		</view>

		<!-- 底部 -->
		<view class="bottom-body-container">


			<view class="comment-container">

				<!-- 评论模块 & 点赞动效 -->
				<view class="comment-item-like-container">

					<!-- 评论模块 -->
					<view class="comment-item-share-container">

						<!-- 分享 -->
						<view class="share-btn-container">
							<image :src="shareIcon"></image>
							<view class="share-word">Share with friends</view>
						</view>

						<view class="comment-item">

							<view class="comment-item-container">
								<view class="head-portrait">
									<image :src="head1"></image>
								</view>

								<!-- 名字 & 评论 -->
								<view class="name-comment-container">
									<view class="name">Jean Walton</view>
									<view class="comment-word">Awesome. Love it ❤</view>
								</view>
							</view>

						</view>

					</view>

					<!-- 点赞特效 -->

				</view>

				<view class="comment-input-send-container">

					<!-- 评论input -->
					<view class="comment-input-container">
						<input type="text" placeholder="Write a comment ..." placeholder-class="comment-p" />
					</view>

					<!-- 发送按钮 -->
					<view class="send-comment-icon">
						<image :src="sendCommentIcon"></image>
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
				head1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head1.png',
				close: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/close-btn.png',
				photos1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos1.png',
				shadow: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/shadow.png',
				sendCommentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/send-comment.png',
				shareIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/share-icon.png'
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
		background-color: $bg-gray-dark;

		.bg-container {
			position: relative;
			height: 100%;
			width: 100%;

			.bg {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}

			.shadow {
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
		}


		.header-body-container {
			position: fixed;
			top: 100rpx;
			width: 100%;

			.header-body {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;

				.user-info-container {
					display: flex;
					align-items: center;

					.head {
						width: 88rpx;
						height: 88rpx;
						border-radius: 50%;
					}

					.nickname-live-time {
						margin-left: 16rpx;

						.nickname {
							color: $font-ffffff;
							font-family: "Avenir-Heavy";
							font-size: 17px;
							font-weight: 400;
						}

						.live-time {
							color: $font-ffffff;
							font-family: "Avenir-Book";
							font-size: 15px;
							font-weight: 400;
						}

					}


				}

				.del-btn {
					image {
						width: 80rpx;
						height: 80rpx;
					}
				}

			}

		}

		.bottom-body-container {
			position: fixed;
			bottom: 68rpx;
			width: 100%;

			.comment-container {
				width: 100%;

				.comment-item-like-container {
					margin-bottom: 32rpx;
					padding: 0 32rpx;

					// 评论模块
					.comment-item-share-container {
						display: flex;
						flex-direction: column;
						width: 100%;

						// 分享
						.share-btn-container {
							display: flex;
							align-items: center;
							justify-content: space-around;
							width: 344rpx;
							height: 68rpx;
							border-radius: 17px;
							background: linear-gradient(236deg, #FF8960, #FF62A5);

							image {
								width: 40rpx;
								height: 40rpx;
							}

							.share-word {
								color: $font-ffffff;
								font-family: "Avenir-Medium";
								font-size: 15px;
								font-weight: 400;
							}

						}

						.comment-item {
							display: flex;
							width: 100%;
							
							.comment-item-container{
								display: flex;
								align-items: center;
								justify-content: space-around;
								margin-top: 12rpx;
								padding: 10rpx 0;
								padding-left: 10rpx;
								padding-right: 40rpx;
								max-width: 500rpx;
								border-radius: 27px;
								background: rgba(0, 0, 0, 0.5);
								
								.head-portrait {
									margin-right: 16rpx;
									width: 88rpx;
									height: 88rpx;
								
									image {
										width: 88rpx;
										height: 88rpx;
										border-radius: 50%;
									}
								
								}
								
								.name-comment-container {
								
									.name {
										color: rgba(255, 255, 255, 0.5);
										font-family: "Avenir-Book";
										font-size: 13px;
										font-weight: 400;
									}
								
									.comment-word {
										color: #ffffff;
										font-family: "Avenir-Medium";
										font-size: 15px;
										font-weight: 400;
									}
								
								}
							}

							

						}

					}

				}

				.comment-input-send-container {
					display: flex;
					align-items: center;
					justify-content: space-between;
					padding: 0 32rpx;

					.comment-input-container {
						display: flex;
						align-items: center;
						width: 600rpx;
						height: 72rpx;
						border-radius: 18px;
						background: rgba(255, 255, 255, 0.8);

						input {
							margin-left: 30rpx;
							width: 540rpx;
						}

						.comment-p {
							color: $font-000000;
							font-family: "Avenir-Book";
							font-size: 15px;
							font-weight: 400;
						}

					}

					.send-comment-icon {
						display: flex;
						align-items: center;
						justify-content: center;
						width: 72rpx;
						height: 72rpx;
						background: $btn-f78-f54;
						border-radius: 50%;

						image {
							width: 56rpx;
							height: 56rpx;
						}

					}

				}

			}





		}

	}
</style>
