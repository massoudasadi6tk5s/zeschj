<template>
	<view>

		<view class="tag-item-container">
			<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
				<block v-for="item in appealTagList" :key="id">
					<view :class="['tag-word', 'tag-item', item.active ? 'tag-active':'']">{{item.name}}</view>
				</block>
			</scroll-view>
		</view>

		<view class="dynamic-item-container">

			<!-- 第一个 -->
			<view class="item-container">
				<view class="dynamic-item">
					<!-- 头像 昵称 -->
					<view class="head-nickname-container">
						<image class="head-portrait" :src="testHead1"></image>
						<view class="nickname-container">
							<view class="nickname-word">Joel Jacobs</view>
							<view class="create-time">2 hours ago</view>
						</view>
					</view>

					<!-- 发表的素材 -->
					<view class="material-container">
						<!-- 第一种格式 单张图片 -->
						<view class="one-material" v-if="true">
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
						<view class="three-material" v-if="false">
							<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
								<block>
									<view class="material-item">
										<image mode="aspectFill" :src="postImg"></image>
										<view class="video-play">
											<image
												src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png">
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

					</view>

				</view>
				<view class="dynamic-item">
					<!-- 头像 昵称 -->
					<view class="head-nickname-container">
						<image class="head-portrait" :src="testHead1"></image>
						<view class="nickname-container">
							<view class="nickname-word">Joel Jacobs</view>
							<view class="create-time">2 hours ago</view>
						</view>
					</view>

					<!-- 发表的素材 -->
					<view class="material-container" v-if="false">
						<!-- 第一种格式 单张图片 -->
						<view class="one-material" v-if="true">
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
						<view class="three-material" v-if="false">
							<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
								<block>
									<view class="material-item">
										<image mode="aspectFill" :src="postImg"></image>
										<view class="video-play">
											<image
												src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png">
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

					</view>

				</view>

			</view>

			<!-- 第二个 -->
			<view class="item-container">
				<view class="dynamic-item">
					<!-- 头像 昵称 -->
					<view class="head-nickname-container">
						<image class="head-portrait" :src="testHead1"></image>
						<view class="nickname-container">
							<view class="nickname-word">Joel Jacobs</view>
							<view class="create-time">2 hours ago</view>
						</view>
					</view>

					<!-- 发表的素材 -->
					<view class="material-container" v-if="false">
						<!-- 第一种格式 单张图片 -->
						<view class="one-material" v-if="true">
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
						<view class="three-material" v-if="false">
							<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
								<block>
									<view class="material-item">
										<image mode="aspectFill" :src="postImg"></image>
										<view class="video-play">
											<image
												src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png">
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

					</view>

				</view>
				<view class="dynamic-item">
					<!-- 头像 昵称 -->
					<view class="head-nickname-container">
						<image class="head-portrait" :src="testHead1"></image>
						<view class="nickname-container">
							<view class="nickname-word">Joel Jacobs</view>
							<view class="create-time">2 hours ago</view>
						</view>
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
											<image
												src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-play.png">
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

					</view>

				</view>

			</view>
		</view>

	</view>
	</view>
</template>

<script>
	export default {
		name: "appeal5",
		data() {
			return {
				testHead1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x5.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
				postImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post5-1.png',
				likeIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like.png',
				likeActiveIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like-active.png',
				commentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/comment.png',

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

	.dynamic-item-container {
		display: grid;
		grid-column-gap: 16rpx;
		grid-template-columns: 340rpx 340rpx;


		.item-container {
			margin-top: 64rpx;

			.dynamic-item {
				margin-bottom: 20rpx;
				border-radius: 8rpx;
				background: $bg-gray-dark;
				box-shadow: 0px 3rpx 20rpx rgba(0, 0, 0, 0.5);

				.head-nickname-container {
					display: flex;
					padding: 0 20rpx;
					padding-top: 30rpx;

					.head-portrait {
						width: 60rpx;
						height: 60rpx;
						border-radius: 50%;
					}

					.nickname-container {
						margin-left: 16rpx;

						.nickname-word {
							width: 200rpx;
							color: $font-ffffff;
							font-family: "Avenir-Medium";
							font-size: 13px;
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

					.like-comment-container {
						display: flex;
						align-items: center;
						justify-content: space-around;
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

				}


			}

		}



	}
</style>
