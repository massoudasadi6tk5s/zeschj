<template>
	<view class="body">
		
		<!-- 背景 -->
		<view class="bg-container">
			<image class="bg" mode="aspectFill" :src="photos1"></image>
			<image class="shadow" mode="aspectFill" :src="shadow"></image>
		</view>
		
		<!-- 头部 -->
		<view class="header-body-container">
			<view class="header-body">
				
				<!-- 用户信息 -->
				<view class="user-info-container">
					<image class="head" :src="head1"></image>
					<view class="nickname-live-time">
						<view class="nickname">Russell Lee</view>
						<view class="live-time">01:08:30</view>
					</view>
				</view>
				
				<!-- 删除按钮 -->
				<view class="del-btn">
					<image :src="close"></image>
				</view>
				
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				head1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/head1.png',
				close: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/close-btn.png',
				photos1: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/photos1.png',
				shadow: 'https://weiju1.oss-cn-shenzhen.aliyuncs.com/streams/shadow.png'
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
		background-color: $bg-gray-dark;
		
		.bg-container{
			position: relative;
			height: 100%;
			width: 100%;
			.bg{
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
			.shadow{
				position: absolute;
				top: 0;
				left: 0;
				height: 100%;
				width: 100%;
			}
		}
		
		
		.header-body-container{
			position: fixed;
			top: 100rpx;
			width: 100%;
			
			.header-body{
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 0 40rpx;
				
				.user-info-container{
					display: flex;
					align-items: center;
					
					.head{
						  width: 88rpx;
						  height: 88rpx;
						  border-radius: 50%;
					}
					
					.nickname-live-time{
						margin-left: 16rpx;
						
						.nickname{
							  color: $font-ffffff;
							  font-family: "Avenir-Heavy";
							  font-size: 17px;
							  font-weight: 400;
						}
						.live-time{
							  color: $font-ffffff;
							  font-family: "Avenir-Book";
							  font-size: 15px;
							  font-weight: 400;
						}
						
					}
					
					
				}
				
				.del-btn{
					image{
						  width: 80rpx;
						  height: 80rpx;
					}
				}
				
			}
			
		}
		
	}
</style>
