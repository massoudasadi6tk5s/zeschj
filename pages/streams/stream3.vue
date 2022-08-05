<template>
	<view class="body">
		<!-- Discover -->
		<view class="discover-container">
			
			<!-- 类型选项 -->
			<view class="tag-item-container">
				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
					<block v-for="item in appealTagList" :key="id">
						<view :class="['tag-word', 'tag-item', item.active ? 'tag-active':'']">{{item.name}}</view>
					</block>
				</scroll-view>
			</view>
	
			<view class="scroll-view-container">
				<scroll-view scroll-x="true" enable-flex="true" show-scrollbar="false">
					<block v-for="(item, index) in discoverList" :key="id">
						<view class="scroll-item">
							
							<view class="one">
								<!-- 背景图 -->
								<image class="bg-img" mode="aspectFill" :src="item.bgImg">
								</image>
								
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
								
									<view class="nick-live-container">
										<view class="nickname-word">{{item.userInfo.nickName}}</view>
										<view class="live-time">{{item.time}}</view>
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
		data() {
			return {
				
				testHead: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/home/Oval6.png',
				
				appealTagList: [{
						id: 1,
						name: 'For you',
						active: true
					},
					{
						id: 2,
						name: 'Following',
						active: false
					},
					{
						id: 3,
						name: 'Popular',
						active: false
					}
				],
				
				discoverList: [{
					id: 1,
					bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photo3-1.png',
					isLive: true,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head3-1.png',
						nickName: 'Devin Stewart'
					},
					time: '01:08:30'
				}, {
					id: 2,
					bgImg: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photo3-2.png',
					isLive: false,
					userInfo: {
						headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head3-2.png',
						nickName: 'Lena Sutton'
					},
					time: '03:20'
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
	page {
		height: 100%;
		width: 100%;
		background-color: $bg-gray-dark;
	}

	.body {
		height: 100%;
		width: 100%;
		
		.discover-container {
			margin-top: 160rpx;
			
			// 标签 容器
			.tag-item-container {
				margin-left: 40rpx;
			
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
			

			.scroll-view-container {
				margin-top: 50rpx;
		
				scroll-view {
					white-space: nowrap; // 滚动必须加的属性
					width: 100%;
		
					.scroll-item {
						position: relative;
						display: inline-flex;
						margin-left: 40rpx;
						  width: 528rpx;
						  height: 1104rpx;
						border-radius: 8px;
		
						.one{
							.bg-img {
								position: absolute;
								top: 0;
								left: 0;
								  width: 528rpx;
								  height: 986rpx;
								  border-radius: 8px;
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
										border-radius: 50%;
							
										image {
											width: 88rpx;
											height: 88rpx;
											border-radius: 50%;
										}
							
									}
								}
							
							.nick-live-container{
								
								display: flex;
								flex-direction: column;
								margin-left: 10rpx;
								
								.nickname-word {
									
									width: 400rpx;
									color: $font-ffffff;
									font-family: "Avenir-Heavy";
									font-size: 17px;
									font-weight: 400;
									overflow: hidden;
									text-overflow: ellipsis; //超出部分以省略号显示
									white-space: nowrap;
								}
								
								.live-time{
									  color: #4e586e;
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
		
		}
		
	}
</style>
