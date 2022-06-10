<template>
	<view class="body">

		<!-- 搜索框 -->
		<view class="search-container">

			<!-- 搜索框 -->
			<view class="search-input-container">
				<image :src="searchIcon"></image>
				<view class="search-word">Search</view>
			</view>

			<!-- 用户的一个头像 -->
			<view class="head-portrait-container">
				<image :src="testHead"></image>
			</view>

		</view>

		<!-- Discover -->
		<view class="discover-container">

			<view class="discover-word-container">
				<view class="discover-word">Discover</view>
				<view class="view-all-word">View all</view>
			</view>

			<view class="scroll-view-container">
				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
					<block v-for="(item, index) in discoverList" :key="id">
						<view class="scroll-item">

							<!-- 背景图 -->
							<image class="bg-img" mode="aspectFill" :src="item.bgImg">
							</image>

							<!-- 直播tag -->
							<view class="live-tag-container" v-if="item.isLive">
								<image :src="liveTag"></image>
								<view class="live-word">LIVE</view>
							</view>

							<!-- 个人信息 -->
							<view class="user-info-container">

								<view class="user-head-portrait">
									<view class="head-portrait-border">
										<image :src="item.userInfo.headPortrait">
										</image>
									</view>
								</view>

								<view class="nickname-word">{{item.userInfo.nickName}}</view>

							</view>


						</view>
					</block>
				</scroll-view>
			</view>

		</view>

		<!-- list -->
		<view class="dynamic-container">

			<view class="dynamic-item">

				<view class="nickname-head-other-container">

					<!-- 头像 名称 -->
					<view class="nickname-head-container">
						<image class="head-portrait"
							:src="testHead1"></image>
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
				
				<view class="post-material-container">
					<image class="post-img" mode="aspectFill" :src="testPostImg"></image>
					<!-- 直播tag -->
					<view class="live-tag-container">
						<image :src="liveTagWhite"></image>
						<view class="live-word">LIVE</view>
					</view>
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
					
					<view class="head-container">
						<image class="comment-head-container move-right-28" :src="testHead1"></image>
						<image class="comment-head-container move-right-14" :src="testHead1"></image>
						<image class="comment-head-container " :src="testHead1"></image>
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
				
				searchIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/search.png',
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x.png',
				testHead1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x5.png',
				liveTag: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video%404x.png',
				liveTagWhite: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-white%404x.png',
				otherIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/other.png',
				testPostImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/post-1.png',
				likeIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/like.png',
				commentIcon: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/comment.png',
				
				discoverList: [{
					id: 1,
					bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Rectangle%20Copy%2010%404x.png',
					isLive: true,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x.png',
						nickName: 'Thomas Curtis'
					}
				}, {
					id: 2,
					bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Rectangle%20Copy%2011%404x.png',
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval2.png',
						nickName: 'Christine Barton'
					}
				}, {
					id: 3,
					bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Rectangle%20Copy%203%404x.png',
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3.png',
						nickName: 'Nathan McKinney'
					}
				}],
				tagList: [{
						id: 1,
						tagName: '#relax'
					},
					{
						id: 2,
						tagName: '#travel'
					}
				]
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

		.search-container {
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-top: 96rpx;
			padding: 0 28rpx;

			.search-input-container {
				display: flex;
				align-items: center;
				width: 584rpx;
				height: 72rpx;
				background: rgba(142, 142, 147, 0.12);
				border-radius: 50rpx;

				image {
					margin-left: 30rpx;
					width: 48rpx;
					height: 48rpx;
				}

				.search-word {
					margin-left: 14rpx;
					color: $font-4e586e;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}

			}

			.head-portrait-container {

				image {
					width: 72rpx;
					height: 72rpx;
					border-radius: 50%;
				}
			}

		}

		.discover-container {

			.discover-word-container {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-top: 44rpx;
				padding: 0 28rpx;

				.discover-word {
					color: $font-ffffff;
					font-family: "Avenir-Heavy";
					font-size: 34px;
					font-weight: 400;
				}

				.view-all-word {
					color: $font-f54b64;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}
			}

			.scroll-view-container {
				margin-top: 46rpx;

				scroll-view {
					white-space: nowrap; // 滚动必须加的属性
					width: 100%;

					.scroll-item {
						position: relative;
						display: inline-flex;
						margin-left: 40rpx;
						width: 270rpx;
						height: 360rpx;
						border-radius: 12px;

						.bg-img {
							position: absolute;
							top: 0;
							left: 0;
							width: 270rpx;
							height: 360rpx;
							border-radius: 12px;
						}

						.live-tag-container {
							position: absolute;
							top: 20rpx;
							right: 20rpx;
							display: flex;
							align-items: center;
							justify-content: space-evenly;
							width: 104rpx;
							height: 36rpx;
							background: $btn-f78-f54;
							border-radius: 25px;
							z-index: 2;

							image {
								width: 32rpx;
								height: 32rpx;
							}

							.live-word {
								color: $font-ffffff;
								font-family: "Avenir-Heavy";
								font-size: 11px;
								font-weight: 400;
							}

						}

						.user-info-container {
							position: absolute;
							left: 10rpx;
							bottom: 20rpx;
							display: flex;
							align-items: center;

							.user-head-portrait {

								.head-portrait-border {
									display: flex;
									align-items: center;
									justify-content: center;
									width: 50rpx;
									height: 50rpx;
									border: solid 4rpx #ff2d55;
									border-radius: 50%;

									image {
										width: 48rpx;
										height: 48rpx;
									}

								}
							}

							.nickname-word {
								margin-left: 10rpx;
								width: 170rpx;
								color: $font-ffffff;
								font-family: "Avenir-Heavy";
								font-size: 11px;
								font-weight: 400;
								overflow: hidden;
								text-overflow: ellipsis; //超出部分以省略号显示
								white-space: nowrap;
							}
						}


					}


				}

			}

		}

		.dynamic-container {
			margin-top: 60rpx;
			margin-bottom: 60rpx;
			padding: 0 30rpx;

			.dynamic-item {
				padding: 15rpx 30rpx;
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
						
						.mgl10{
							margin-left: 10rpx;
						}
						
					}
				}

				.post-content-container{
					text{
						  color: $font-ffffff;
						  font-family: "Avenir-Book";
						  font-size: 15px;
						  font-weight: 400;
					}
				}

				.post-material-container{
					position: relative;
					margin-top: 12rpx;
					.post-img{
						width: 100%;
						max-height: 500rpx;
						 border-radius: 4px;
					}
					
					.live-tag-container {
						position: absolute;
						top: 20rpx;
						right: 20rpx;
						display: flex;
						align-items: center;
						justify-content: space-evenly;
						width: 104rpx;
						height: 36rpx;
						background: $btn-f78-f54;
						border-radius: 25px;
						z-index: 2;
					
						image {
							width: 32rpx;
							height: 32rpx;
						}
					
						.live-word {
							color: $font-ffffff;
							font-family: "Avenir-Heavy";
							font-size: 11px;
							font-weight: 400;
						}
					
					}
					
					
				}
				
				.like-comment-head-container{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin-top: 14rpx;
					
					.like-comment-container{
						display: flex;
						align-items: center;
						.like-container{
							display: flex;
							align-items: center;
							image{
								height: 38rpx;
								width: 38rpx;
							}
							.like-count{
								  color: $font-ffffff;
								  font-family: "Avenir-Book";
								  font-size: 15px;
								  font-weight: 400;
							}
						}
						
						.comment-container{
							display: flex;
							align-items: center;
							margin-left: 24rpx;
							image{
								height: 38rpx;
								width: 38rpx;
							}
							.comment-count{
								color: $font-ffffff;
								font-family: "Avenir-Book";
								font-size: 15px;
								font-weight: 400;
							}
						}
						
					}
					
					.head-container{
						.comment-head-container{
							  width: 38rpx;
							  height: 38rpx;
							  border-radius: 50%;
							  border: solid 1px #ffffff;
							  box-shadow: 0px 0px 1px #eaecef;
						}
						
						.move-right-28{
							position: relative;
							right: -28rpx;
							z-index: 2;
						}
						.move-right-14{
							position: relative;
							right: -14rpx;
							z-index: 1;
						}
						
					}
					
				}
			

			}
		}

	}
</style>
