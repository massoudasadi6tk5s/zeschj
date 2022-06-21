<template>
	<view>
		<!-- Discover -->
		<view class="discover-container">

			<view class="scroll-view-container">
				<view class="send-btn">
					<image src="https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/send.png"></image>
				</view>
				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
					<block v-for="(item, index) in discoverList" :key="id">
						<view class="scroll-item">
							<view class="user-head-container">
								<view class="user-head-live-container">
									<image class="head" :src="item.userInfo.headPortrait"></image>
									<!-- 直播tag -->
									<view class="live-tag-container" v-if="item.isLive">
										<image :src="liveTag"></image>
										<view class="live-word">LIVE</view>
									</view>
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
		name: "live6",
		data() {
			return {
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x.png',
				liveTag: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/video-white%404x.png',
		
				discoverList: [{
					id: 1,
					isLive: true,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval%404x.png',
						nickName: 'Thomas Curtis'
					}
				}, {
					id: 2,
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3-1.png',
						nickName: 'Christine Barton'
					}
				}, {
					id: 3,
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3-2.png',
						nickName: 'Nathan McKinney'
					}
				}, {
					id: 4,
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3-3.png',
						nickName: 'Nathan McKinney'
					}
				}, {
					id: 5,
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3-4.png',
						nickName: 'Nathan McKinney'
					}
				}, {
					id: 6,
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval3-5.png',
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

		.scroll-view-container {
			display: flex;
			align-items: center;
			margin-top: 46rpx;
			
			.send-btn{
				display: flex;
				align-items: center;
				justify-content: center;
				margin: 0 40rpx;
				  width: 116rpx;
				  height: 116rpx;
				  border-radius: 50%;
				  background: $btn-f78-f54;
				  
				  image{
					   width: 100rpx;
					    height: 100rpx;
				  }
				  
			}

			scroll-view {
				white-space: nowrap; // 滚动必须加的属性
				width: 72%;

				.scroll-item {
					position: relative;
					display: inline-flex;
					margin-right: 40rpx;
					border-radius: 12px;
					
					.user-head-container{
						display: flex;
						flex-direction: column;
						align-items: center;
						
						.user-head-live-container{
							position: relative;
							
							.head{
								padding: 10rpx;
								width: 94rpx;
								height: 94rpx;
								border-radius: 50%;
								border: solid #ff2d55 1px;
							}
							
							.live-tag-container {
								position: absolute;
								top: 90rpx;
								right: 16rpx;
								display: flex;
								align-items: center;
								justify-content: space-evenly;
								  width: 88rpx;
								  height: 28rpx;
								background: $btn-f78-f54;
								border-radius: 25px;
								z-index: 2;

								image {
									width: 24rpx;
									height: 24rpx;
								}

								.live-word {
									color: $font-ffffff;
									font-family: "Avenir-Heavy";
									  font-size: 8px;
									font-weight: 400;
								}

							}
							
						}
					
						
						
					}



				}


			}

		}

	}
</style>
