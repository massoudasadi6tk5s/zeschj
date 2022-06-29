<template>
	<view class="body">
		<view class="search-title">Search</view>
		<view class="search-input-container">
			<view class="search-input">
				<image :src="searchIcon"></image>
				<input placeholder-class="search-p" placeholder="Search" />
			</view>
		</view>
		
		<!-- 最近搜索 -->
		<view class="recent-search-container">
			
			<view class="title-container">
				<view class="word">Recent Search</view>
				<view class="clear">Clear all</view>
			</view>
			
			<view class="search-content-container">
				
				<view class="search-item" v-for="(item, index) in recentSearchList" :key="index">
					
					<view class="head-img-name-container">
						
						<!-- 头像 -->
						<view class="head-portrait-container">
							<image mode="aspectFill" :src="item.headPortrait"></image>
						</view>
						
						<!-- 名字 & 共同好友 -->
						<view class="name-friends-container">
							<view class="name">{{item.name}}</view>
							<view class="firends-count">{{item.mutualFriends}} mutual friends</view>
						</view>
						
					</view>
					
					<!-- 是否关注 -->
					<view class="follow-btn-container">
						Follow
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
				recentSearchList: [
					{id:1, headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/search/head1.png', name: 'Alejandro Hicks', mutualFriends: 3, isFollow: false},
					{id:2, headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/search/head2.png', name: 'Benjamin Webb', mutualFriends: 3, isFollow: false},
					{id:3, headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/search/head3.png', name: 'Cecelia Harrington', mutualFriends: 3, isFollow: false},
					{id:4, headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/search/head4.png', name: 'Barbara Blair', mutualFriends: 3, isFollow: false},
					{id:5, headPortrait: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/other/search/head5.png', name: 'Louise Thornton', mutualFriends: 3, isFollow: false},
				]
			}
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
		
		.search-title{
			margin-top: 212rpx;
			margin-left: 30rpx;
			  color: $font-ffffff;
			  font-family: "Avenir-Heavy";
			  font-size: 34px;
			  font-weight: 400;
		}
		
		.search-input-container{
			
			padding: 0 30rpx;
			
			.search-input{
				display: flex;
				align-items: center;
				margin-top: 40rpx;
				height: 72rpx;
				border-radius: 10px;
				background: rgba(142,142,147,0.12);
				
				image {
					margin-left: 30rpx;
					width: 48rpx;
					height: 48rpx;
				}
				
				input{
					margin-left: 14rpx;
					width: 580rpx;
					color: $font-ffffff;
					font-family: "Avenir-Book";
					font-size: 15px;
					font-weight: 400;
				}
				
				.search-p{
					
					  color: $font-4e586e;
					  font-family: "Avenir-Book";
					  font-size: 15px;
					  font-weight: 400;
				}
				
			}
			
			
		}
		
		// 最近搜索
		.recent-search-container{
			display: flex;
			flex-direction: column;
			margin-top: 44rpx;
			padding: 0 30rpx;
			
			.title-container{
				display: flex;
				align-items: center;
				justify-content: space-between;
				
				.word{
					  color: $font-ffffff;
					  font-family: "Avenir-Heavy";
					  font-size: 20px;
					  font-weight: 400;
				}
				.clear{
					  color: $font-f54b64;
					  font-family: "Avenir-Book";
					  font-size: 15px;
					  font-weight: 400;
					  line-height: 20px;
				}
				
			}
			
			.search-content-container{
				display: flex;
				flex-direction: column;
				
				.search-item{
					display: flex;
					align-items: center;
					justify-content: space-between;
					margin: 20rpx 0;
					
					.head-img-name-container{
						display: flex;
						align-items: center;
						
						.head-portrait-container{
							image{
								border-radius: 50%;
								width: 120rpx;
								height: 120rpx;
							}
						}
							
						.name-friends-container{
							display: flex;
							flex-direction: column;
							margin-left: 30rpx;
							
							.name{
								width: 300rpx;
								  color: $font-ffffff;
								  font-family: "Avenir-Heavy";
								  font-size: 17px;
								  font-weight: 400;
								  overflow: hidden;    
								   	text-overflow: ellipsis;      //超出部分以省略号显示
								   	white-space: nowrap;
							}
							.firends-count{
								  color: $font-4e586e;
								  font-family: "Avenir-Book";
								  font-size: 15px;
								  font-weight: 400;
							}
						}
						
					}
					
					.follow-btn-container{
						display: flex;
						align-items: center;
						justify-content: center;
						  color: $font-ffffff;
						  font-family: "Avenir-Heavy";
						  font-size: 11px;
						  font-weight: 400;
						  width: 160rpx;
						  height: 50rpx;
						  border-radius: 12px;
						  background: $btn-f78-f54;
					}

				}
				
			}
			
		}
		
	}
</style>
