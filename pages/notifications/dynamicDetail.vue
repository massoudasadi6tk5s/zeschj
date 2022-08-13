<template>
	<view class="body">

		<!-- 动态相关信息 -->
		<view class="dynamic-detail">
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
		</view>

		<!-- 分割线 -->
		<view class="segmentation-line"></view>

		<!-- 全部评论 -->
		<view class="all-comment-container">

			<view class="header-word">全部评论 21</view>

		</view>

	</view>
</template>

<script>
	export default {
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
		methods: {

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
	}

	.dynamic-detail {
		padding: 30rpx;

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


	}

	// 分割线
	.segmentation-line {
		height: 10rpx;
		width: 100%;
		background-color: #1E2432;
	}


	// 全部评论
	.all-comment-container {

		.header-word {
			margin-top: 20rpx;
			margin-left: 20rpx;
			color: #ffffff;
			font-family: "Avenir-Heavy";
			font-size: 14px;
			font-weight: 400;
		}

	}
</style>
