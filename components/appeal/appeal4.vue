<template>
	<view>
		<view class="dynamic-item">

			<view class="nickname-head-other-container">

				<!-- 头像 名称 -->
				<view class="nickname-head-container">
					<image class="head-portrait" :src="testHead"></image>
					<view class="nickname-time-container">
						<view class="nickname">Marcus Norris</view>
						<view class="create-time">2 hours ago</view>
					</view>
				</view>

				<image class="other-icon" :src="otherIcon"></image>

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
		name: "appeal2",
		data() {
			return {
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval7.png',
				liveTagWhite: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-white%404x.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
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
		},
		methods: {},
		//此处定义传入的参数
		props: {},
		// 定义变量 或者 加载默认数据
		watch: {}
	}
</script>


<style lang="scss">
	.dynamic-item {
		padding: 30rpx 30rpx;
		border-radius: 8rpx;
		background: $bg-gray-dark;
		box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);

		.nickname-head-other-container {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.nickname-head-container {
				display: flex;
				align-items: center;

				.head-portrait {
					width: 100rpx;
					height: 100rpx;
				}

				.nickname-time-container {
					display: flex;
					flex-direction: column;
					margin-left: 30rpx;

					.nickname {
						color: $font-ffffff;
						font-family: "Avenir-Heavy";
						font-size: 17px;
						font-weight: 400;
					}

					.create-time {
						color: $font-4e586e;
						font-family: "Avenir-Book";
						font-size: 13px;
						font-weight: 400;
					}
				}

			}

			.other-icon {
				width: 56rpx;
				height: 56rpx;
			}
		}

		.post-tag-container {
			display: flex;
			margin-top: 18rpx;

			.tag-word {
				color: $font-f54b64;
				font-family: "Avenir-Book";
				font-size: 15px;
				font-weight: 400;

				.mgl10 {
					margin-left: 10rpx;
				}

			}
		}

		.post-content-container {
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

				.like-container {
					display: flex;
					align-items: center;

					image {
						height: 38rpx;
						width: 38rpx;
					}

					.like-count {
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
						color: $font-ffffff;
						font-family: "Avenir-Book";
						font-size: 15px;
						font-weight: 400;
					}
				}

			}

			.head-container {
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
