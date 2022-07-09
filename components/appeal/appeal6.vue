<template>
	<view>
		<view class="dynamic-item">
			<!-- 头像 昵称 -->
			<view class="head-nickname-container">
				<view class="user-info-container">
					<image class="head-portrait" :src="testHead1"></image>
					<view class="nickname-container">
						<view class="nickname-word">Joel Jacobs</view>
						<view class="create-time">2 hours ago</view>
					</view>
				</view>
				<view class="follow-container">Follow</view>
			</view>

			<!-- 发表的素材 -->
			<view class="material-container" v-if="true">
				<!-- 第一种格式 单张图片 -->
				<view class="one-material" v-if="false">
					<image mode="aspectFill" :src="postImg"></image>
				</view>

				<!-- 第二种格式 单个视频 -->
				<view class="two-material" v-if="false">
					<image mode="aspectFill" :src="postImg"></image>
					<view class="video-play">
						<image src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png"></image>
					</view>
				</view>

				<!-- 第三种格式 多个素材 -->
				<view class="three-material" v-if="true">
					<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
						<block>
							<view class="material-item">
								<image mode="aspectFill" :src="postImg"></image>
								<view class="video-play">
									<image src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png">
									</image>
								</view>
							</view>
							<view class="material-item">
								<image mode="aspectFill" :src="postImg"></image>
							</view>
							<view class="material-item">
								<image mode="aspectFill" :src="postImg"></image>
							</view>
						</block>
					</scroll-view>
				</view>

			</view>

			<view class="post-tag-container">
				<view class="tag-word" v-for="(item, index) in tagList" :key="item.id">
					<text :class="[index!=0?'mgl10':'']">{{item.tagName}}</text>
					<text>{{index+1 < tagList.length ? ",":""}}</text>
				</view>
			</view>
			<view class="post-content-container">
				<text>Airport Hotels The Right Way To Start A Short Break Holiday</text>
			</view>

			<view class="like-comment-head-container">

				<view class="like-comment-container">
					<view class="like-container">
						<image :src="likeActiveIcon"></image>
						<view class="like-count">1125</view>
					</view>
					<view class="comment-container">
						<image :src="commentIcon"></image>
						<view class="comment-count">348</view>
					</view>
				</view>
				<view class="head-container">
					<image class="comment-head-container move-right-28" :src="testHead"></image>
					<image class="comment-head-container move-right-14" :src="testHead"></image>
					<image class="comment-head-container " :src="testHead"></image>
				</view>
			</view>

		</view>

	</view>
</template>

<script>
	export default {
		name: "appeal6",
		data() {
			return {
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval7.png',
				testHead1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x5.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
				postImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post5-1.png',
				likeIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like.png',
				likeActiveIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like-active.png',
				commentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/comment.png',

				tagList: [{
						id: 1,
						tagName: '#relax'
					},
					{
						id: 2,
						tagName: '#travel'
					}
				],

			};
		}
	}
</script>

<style lang="scss">
	.dynamic-item {
		margin-bottom: 20rpx;
		border-radius: 8rpx;
		background: $bg-gray-dark;
		box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);

		.head-nickname-container {
			display: flex;
			align-items: center;
			justify-content: space-between;


			.user-info-container {
				display: flex;
				align-items: center;
				padding: 0 20rpx;
				padding-top: 30rpx;

				.head-portrait {
					width: 100rpx;
					height: 100rpx;
					border-radius: 50%;
				}

				.nickname-container {
					margin-left: 16rpx;

					.nickname-word {
						width: 200rpx;
						color: $font-ffffff;
						font-family: "Avenir-Medium";
						font-size: 17px;
						font-weight: 400;
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.create-time {
						color: $font-4e586e;
						font-family: "Avenir-Book";
						font-size: 13px;
						font-weight: 400;
					}
				}

			}

			.follow-container {
				display: flex;
				align-items: center;
				justify-content: center;
				margin-right: 32rpx;
				width: 160rpx;
				height: 48rpx;
				border-radius: 12px;
				border: solid 1px #979797;
				color: $font-f54b64;
				font-family: "Avenir-Heavy";
				font-size: 11px;
				font-weight: 400;
				line-height: 15px;

			}


		}

		.material-container {
			margin-top: 36rpx;

			// 第一种格式
			.one-material {
				image {
					width: 100%;
					height: 280rpx;
				}
			}

			// 第二种格式
			.two-material {
				position: relative;

				image {
					width: 100%;
					height: 280rpx;
				}

				.video-play {
					position: absolute;
					top: 0;
					display: flex;
					align-items: center;
					justify-content: center;
					width: 100%;
					height: 280rpx;

					image {
						width: 88rpx;
						height: 88rpx;
					}
				}

			}

			// 第三种格式
			.three-material {
				scroll-view {
					white-space: nowrap; // 滚动必须加的属性
					width: 100%;

					.material-item {
						position: relative;
						display: inline-flex;
						margin-left: 16rpx;
						height: 280rpx;

						image {
							width: 200rpx;
							height: 280rpx;
							border-radius: 4px;
						}

						.video-play {
							position: absolute;
							top: 0;
							display: flex;
							align-items: center;
							justify-content: center;
							width: 100%;
							height: 280rpx;

							image {
								width: 88rpx;
								height: 88rpx;
							}
						}


					}

				}
			}

		}

		.post-tag-container {
			display: flex;
			margin-top: 20rpx;
			padding: 0 20rpx;

			.tag-word {
				color: $font-f54b64;
				font-family: "Avenir-Book";
				font-size: 15px;
				font-weight: 400;

			}
		}

		.post-content-container {
			padding: 0 20rpx;

			text {
				color: $font-ffffff;
				font-family: "Avenir-Book";
				font-size: 15px;
				font-weight: 400;
			}
		}

		.like-comment-head-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 14rpx;

			.like-comment-container {
				display: flex;
				align-items: center;
				justify-content: space-around;
				margin-left: 32rpx;
				padding: 30rpx 0;

				.like-container {
					display: flex;
					align-items: center;

					image {
						height: 38rpx;
						width: 38rpx;
					}

					.like-count {
						margin-left: 8rpx;
						color: $font-ffffff;
						font-family: "Avenir-Book";
						font-size: 15px;
						font-weight: 400;
					}
				}

				.comment-container {
					display: flex;
					align-items: center;
					margin-left: 24rpx;

					image {
						height: 38rpx;
						width: 38rpx;
					}

					.comment-count {
						margin-left: 8rpx;
						color: $font-ffffff;
						font-family: "Avenir-Book";
						font-size: 15px;
						font-weight: 400;
					}
				}

			}

			.head-container {
				margin-right: 32rpx;
				.comment-head-container {
					width: 38rpx;
					height: 38rpx;
					border-radius: 50%;
					border: solid 1px #ffffff;
					box-shadow: 0px 0px 1px #eaecef;
				}

				.move-right-28 {
					position: relative;
					right: -28rpx;
					z-index: 2;
				}

				.move-right-14 {
					position: relative;
					right: -14rpx;
					z-index: 1;
				}

			}


		}


	}
</style>
