<template>
	<view>
		<!-- Discover -->
		<view class="discover-container">

			<view class="discover-word-container">
				<view class="discover-word">What's new?</view>
				<!-- <view class="view-all-word">View all</view> -->
				<image class="head" :src="testHead"></image>
			</view>

			<view class="scroll-view-container">
				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
					<block v-for="(item, index) in discoverList" :key="id">
						<view class="scroll-item">
							
							<view class="one">
								<!-- 背景图 -->
								<image class="bg-img" mode="aspectFill" :src="item.bgImg">
								</image>
								
								<!-- 直播tag -->
								<view class="live-tag-container" v-if="item.isLive">
									<image :src="liveTag"></image>
									<view class="live-word">LIVE</view>
								</view>
							</view>
							
							<view class="two">
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

							

							


						</view>
					</block>
				</scroll-view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		name: "live2",
		data() {
			return {
				
				liveTag: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-white%404x.png',
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval6.png',
				
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
				
			};
		},
		//此处定义传入的参数
		props: {},
		// 定义变量 或者 加载默认数据
		watch: {}
	}
</script>

<style lang="scss">
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

			.head {
				  width: 72rpx;
				  height: 72rpx;
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
					height: 350rpx;
					border-radius: 12px;

					.one{
						.bg-img {
							position: absolute;
							top: 0;
							left: 0;
							width: 270rpx;
							height: 270rpx;
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
					}

					.two{
						position: absolute;
						bottom: 0;
						.user-info-container {
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

	}
</style>
