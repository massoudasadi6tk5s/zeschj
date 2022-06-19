<template>
	<view>

		<view class="tag-item-container">
			<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
				<block v-for="item in appealTagList" :key="id">
					<view :class="['tag-word', 'tag-item', item.active ? 'tag-active':'']">{{item.name}}</view>
				</block>
			</scroll-view>
		</view>

		<view class="dynamic-item">

			<view class="nickname-head-other-container">

				<!-- 背景图 -->
				<image class="bg-img" :src="postImg"></image>
				<!-- 背景图蒙版 -->
				<image class="bg-img-mask" :src="pstImgMask"></image>

				<!-- 头像 名称 -->
				<view class="nickname-head-container">
					<image class="head-portrait" :src="testHead1"></image>
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
						<image :src="likeIcon"></image>
						<view class="like-count">1125</view>
					</view>
					<view class="comment-container">
						<image :src="commentIcon"></image>
						<view class="comment-count">348</view>
					</view>
				</view>

				<view class="share-container">
					<image :src="shareIcon"></image>
					<view class="share-count">115</view>
				</view>

			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "appeal3",
		data() {
			return {
				testHead1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x5.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
				postImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post3-1.png',
				pstImgMask: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post3-mask.png',
				likeIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like.png',
				commentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/comment.png',
				shareIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/share.png',

				appealTagList: [{
						id: 1,
						name: 'Popular',
						active: true
					},
					{
						id: 2,
						name: 'Latest',
						active: false
					},
					{
						id: 3,
						name: 'Friends',
						active: false
					}
				],

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
	// 标签 容器
	.tag-item-container {

		scroll-view {
			white-space: nowrap; // 滚动必须加的属性
			width: 100%;

			.tag-word {
				position: relative;
				display: inline-flex;
				margin-right: 108rpx;
				font-family: "Avenir-Heavy";
				font-size: 34px;
				font-weight: 400;
			}

			.tag-item {
				color: $graybase-gray6;

			}

			.tag-active {
				color: $font-ffffff;
			}

		}


	}

	.dynamic-item {
		margin-top: 48rpx;
		border-radius: 8rpx;
		background: $bg-gray-dark;
		box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);

		.nickname-head-other-container {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			height: 488rpx;
			border-radius: 4px;

			.bg-img {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 488rpx;
			}

			.bg-img-mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 488rpx;
				z-index: 2;
			}

			.nickname-head-container {
				position: absolute;
				left: 30rpx;
				bottom: 30rpx;
				display: flex;
				align-items: center;
				z-index: 3;

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
				position: absolute;
				right: 30rpx;
				top: 30rpx;
				width: 56rpx;
				height: 56rpx;
			}
		}

		.post-tag-container {
			display: flex;
			margin-top: 18rpx;
			padding: 0 30rpx;

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
			padding: 0 30rpx;

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
			padding: 30rpx 30rpx;

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

			.share-container {
				display: flex;
				align-items: center;

				image {
					width: 48rpx;
					height: 48rpx;
				}

				.share-count {
					color: $font-ffffff;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}

			}


		}


	}
</style>
